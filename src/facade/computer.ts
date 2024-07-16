import dbo from '../dbo/base'
import computer from '../config/tableModels/computer'
import bcrypt from  'bcrypt'
const saltRounds = 10

const get = async object => {
    return await dbo.get(computer, object)
}

const insert = async object => {
  return await dbo.insert(computer, object)
  
}

const update = async (object, id) => {
 
}

const remove = async id => {
  
}

export  {
  get,
  insert,
  update,
  remove
}
