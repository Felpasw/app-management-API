import dbo from '../dbo/base'
import computer from '../config/tableModels/computer'

const get = async (object) => {
  return await dbo.get(computer, object)
}


const insert = async (object) => {
  const { SN } = object;
  
  const updatedComputer = await computer.findOneAndUpdate(
    { SN }, 
    object, 
    { upsert: true, new: true } 
  );

  return updatedComputer;
};


const update = async (object, id) => {
  return await dbo.update(computer, id, object)
}

const remove = async (id) => {
  return await dbo.remove(computer, id)
}

export { get, insert, update, remove }
