const dbo = require('../dbo/base')
const validation = require('../model/acl')
const { messages } = require('joi-translation-pt-br')
const tableName = 'acl'

const get = async object => {

  return 
}

const insert = async object => {


  return await dbo.insert(object, tableName)
}

const update = async (object, id) => {
  if (!id) {
    return false
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
