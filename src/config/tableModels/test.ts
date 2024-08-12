import mongoose, { Document, Model } from 'mongoose'

interface ITest extends Document {
  success: boolean
  msg: string
  SN: string
  type: string
  madeAt: string
}

const testSchema = new mongoose.Schema<ITest>({
  success: {
    type: Boolean,
  },
  msg: {
    type: String,
  },
  SN: {
    type: String,
  },
  type: {
    type: String,
  },
  madeAt: {
    type: String,
  },
})

const TestModel = mongoose.model<ITest>('Tests', testSchema)
export default TestModel
