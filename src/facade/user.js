const dbo = require('../dbo/base')
const validation = require('../model/user')
const { messages } = require('joi-translation-pt-br')
const tableName = 'user'
const bcrypt = require('bcrypt')
const saltRounds = 10

const get = async object => {
  const { limit, page, order, direction, ...filterParams } = object

  // const joins = [
  //   {
  //     joinType: 'leftJoin',
  //     tableJoin: 'screen',
  //     paramTo: 'screen.id',
  //     paramFrom: 'acl.id_screen'
  //   }
  // ]

  const fields = [`${tableName}.*`]

  const filterMap = {
    id: '=',
    name: 'like',
    email: 'like',
    status: 'like',
    createdAt: '='
  }

  const filters = Object.entries(filterParams).reduce((acc, [key, value]) => {
    if (filterMap[key]) {
      acc.push({ column: key, operator: filterMap[key], value })
    }
    return acc
  }, [])

  result = await dbo.get(
    tableName,
    filters,
    limit,
    page,
    order,
    direction,
    fields
  )

  if (result.data && Array.isArray(result.data)) {
    result.data = result.data.map(item => {
      const { password, ...rest } = item
      return rest
    })
  }

  return result
}

const insert = async object => {
  try {
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/
    if (!passwordRegex.test(object.password)) {
      throw new Error(
        'A senha deve ter no mínimo 8 caracteres contendo pelo menos 1 número, 1 letra maiúscula, 1 letra minúscula e 1 caractere especial.'
      )
    }

    await validation.object.validateAsync(object, {
      abortEarly: false,
      messages: messages
    })
  } catch (error) {
    if (error.details) {
      const errors = error.details.map(el => el.message)
      // console.log(errors)
      return { errors }
    } else {
      // console.log(error.message)
      return { errors: [error.message] }
    }
  }

  const hash = await new Promise((resolve, reject) => {
    bcrypt.hash(object.password, saltRounds, function (err, hash) {
      if (err) reject(err)
      resolve(hash)
    })
  })

  object.password = hash

  return await dbo.insert(object, tableName, ['email'])
}

const update = async (object, id) => {
  if (!id) {
    return false
  }

  if (object.password) {
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/

    if (!passwordRegex.test(object.password)) {
      return {
        errors: [
          'A senha deve ter no mínimo 8 caracteres contendo pelo menos 1 número, 1 letra maiúscula, 1 letra minúscula e 1 caractere especial.'
        ]
      }
    }

    const hash = await new Promise((resolve, reject) => {
      bcrypt.hash(object.password, saltRounds, function (err, hash) {
        if (err) reject(err)
        resolve(hash)
      })
    })

    object.password = hash
  }

  return await dbo.update(object, id, tableName)
}

const remove = async id => {
  if (!id) {
    return false
  }
  return await dbo.remove(id, tableName)
}

module.exports = {
  get,
  insert,
  update,
  remove
}
