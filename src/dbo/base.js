const { date } = require('joi')
const db = require('../config/db')

const get = async (
  tableName,
  filters = [],
  limit = 10,
  page = 1,
  order,
  direction = 'asc',
  fields = [],
  joins = []
) => {
  const offset = (page - 1) * limit

  let baseQuery = db(tableName).where(`${tableName}.deleted_at`, null)

  joins.forEach(({ joinType, tableJoin, paramTo, paramFrom }) => {
    if (joinType && tableJoin && paramTo && paramFrom) {
      baseQuery = baseQuery[joinType](tableJoin, paramTo, paramFrom)
    }
  })

  filters.forEach(({ column, operator, value }) => {
    if (column && operator && value != null) {
      if (operator === 'like') {
        value = `%${value}%`
      }
      baseQuery = baseQuery.where(`${tableName}.${column}`, operator, value)
    }
  })

  if (order) {
    baseQuery = baseQuery.orderBy(`${tableName}.${order}`, direction)
  } else if (filters && Array.isArray(filters) && filters.length > 0) {
    const firstFilter = filters[0]
    if (firstFilter.column) {
      baseQuery = baseQuery.orderBy(
        `${tableName}.${firstFilter.column}`,
        direction
      )
    }
  }

  if (limit !== Infinity) {
    baseQuery = baseQuery.limit(limit)
  }

  const result = await baseQuery
    .clone()
    .select(fields)
    .offset(offset)
    .catch(error => {
      console.log(error.message)
      return []
    })

  const count = await baseQuery
    .clone()
    .countDistinct(`${tableName}.id as quantity`)
    .first()
    .catch(error => {
      console.log(error.message)
      return []
    })

  return {
    data: result,
    actualPage: page,
    total: count.quantity
  }
}

const getById = async (id, tableName) => {
  const result = await db(tableName)
    .select()
    .where('id', id)
    .where('deleted_at', null)
    .first()
    .catch(err => {
      console.log(err.message)
      return false
    })

  return result
}

const insert = async (object, tableName) => {
  const result = await db(tableName)
    .insert(object)
    .catch(err => {
      return { errors: err.message }
    })

  return result
}

const update = async (object, id, tableName) => {
  const result = await db(tableName)
    .update(object)
    .where('id', id)
    .catch(err => {
      return { errors: err.message }
    })
  return result
}

const remove = async (id, tableName) => {
  const result = await db(tableName)
    .update({ deleted_at: new Date() })
    .where('id', id)
    .catch(err => {
      console.log(err)
      return false
    })
  return result
}

const login = async (tableName, email) => {
  const result = await db(tableName)
    .select()
    .where('email', email)
    .where('deleted_at', null)
    // .where("status", 1)
    .first()
    .catch(err => {
      return false
    })
  return result
}

const getPendingImporter = async tableName => {
  const result = await db(tableName)
    .select()
    .where('status', 0)
    .andWhere('deleted_at', null)
    .orderBy('priority', 'asc')
    .first()
    .catch(err => {
      console.log(err.message)
      return []
    })

  return result
}

const validateAcl = async (idUser, path) => {
  const result = await db('user')
    .select()
    .first()

    .where('user.id', idUser)
    .where('screen.route', path)

    .where('user.deleted_at', null)
    .where('user_group.deleted_at', null)
    .where('acl.deleted_at', null)
    .where('screen.deleted_at', null)

    .leftJoin('user_group', 'user.id', 'user_group.id_user')
    .leftJoin('acl', 'user_group.id_group', 'acl.id_group')
    .leftJoin('screen', 'acl.id_screen', 'screen.id')

    .catch(err => {
      console.log(err.message)
      return []
    })

  return result
}

module.exports = {
  get,
  getById,
  insert,
  update,
  remove,
  login,
  getPendingImporter,
  validateAcl
}
