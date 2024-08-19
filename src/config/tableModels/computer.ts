import mongoose, { Document, Schema } from 'mongoose'

interface IComputer extends Document {
  model: string
  IP: string
  online: boolean
  SN: string
}

const computerSchema = new Schema<IComputer>({
  model: {
    type: String,
  },
  IP: {
    type: String,
  },
  online: {
    type: Boolean,
  },
  SN: {
    type: String,
  },
})

const ComputerModel = mongoose.model<IComputer>('Computers', computerSchema)
export default ComputerModel
