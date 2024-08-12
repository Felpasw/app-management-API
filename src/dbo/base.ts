import { Document, Model } from 'mongoose'

async function insert(Model, data) {
  try {
    const newDocument = new Model(data)
    return await newDocument.save()
  } catch (error) {
    return new Error(`ERROR! ${error}`)
  }
}

async function get(Model: any, object: any) {
  try {
    return await Model.find(object)
  } catch (error) {
    throw new Error(`Erro ao encontrar documentos: ${error}`)
  }
}

async function update<T extends ModelDocument>(Model: Model<T>, id: string, data: Partial<T>): Promise<T | null> {
  try {
    return await Model.findByIdAndUpdate(id, data, { new: true })
  } catch (error) {
    throw new Error(`Erro ao atualizar documento: ${error}`)
  }
}

// Função genérica para excluir um documento
async function remove<T extends ModelDocument>(Model: Model<T>, id: string): Promise<void> {
  try {
    await Model.findByIdAndDelete(id)
  } catch (error) {
    throw new Error(`Erro ao excluir documento: ${error}`)
  }
}

export default {
  get,
  insert,
  update,
  remove,
}
