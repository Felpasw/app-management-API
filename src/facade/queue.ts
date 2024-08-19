import dbo from '../dbo/base'
import queue from '../config/tableModels/queue'

const get = async (object) => {
  return await dbo.get(queue, object)
}

const insert = async (object) => {
  const now = new Date()
  const formattedDate =
    now.toLocaleDateString('pt-BR') +
    ' às ' +
    now.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
    })

  object.requestedAt = formattedDate

  return await dbo.insert(queue, object)
}

const update = async (object, id) => {
  return await dbo.update(queue, id, object)
}

const remove = async (id) => {
  return await dbo.remove(queue, id)
}

export { get, insert, update, remove }
