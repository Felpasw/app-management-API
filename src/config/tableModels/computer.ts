import mongoose, { Document, Model } from 'mongoose'

interface IComputer extends Document {
  model: string
  IP: string
  online: string
  SN: string
}

const computerSchema = new mongoose.Schema<IComputer>({
  model: {
    type: String,
  },
  IP: {
    type: String,
  },
  online: {
    type: String,
  },
  SN: {
    type: String,
  },
})

const ComputerModel = mongoose.model<IComputer>('Computers', computerSchema)
export default ComputerModel
