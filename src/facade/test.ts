import tests from '../config/tableModels/test'
import dbo from '../dbo/base'

const get = async (object: any) => {
  return await dbo.get(tests, object)
}

const insert = async (object: any) => {
  const now = new Date()
  const formattedDate =
    now.toLocaleDateString('pt-BR') +
    ' às ' +
    now.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
    })

  object.madeAt = formattedDate

  return await dbo.insert(tests, object)
}

const update = async (object, id) => {
  return await dbo.update(tests, id, object)
}

const remove = async (id) => {
  return await dbo.remove(tests, id)
}

export { get, insert, update, remove }
