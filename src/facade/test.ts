import tests from "../config/tableModels/tests"
import dbo from '../dbo/base'

const get = async (object: any) => {
   return await dbo.get(tests, object)
}

const insert = async (object: any) => {
   return await dbo.insert(tests, object)
    
}

const update = async (object, id) => {
  
}

const remove = async id => {
 
}

export { get, insert, update, remove }
