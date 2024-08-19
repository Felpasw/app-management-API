import mongoose, { Document, Model } from 'mongoose'

interface IQueue extends Document {
  method: string
  SN: string
  status: number
  requestedAt: string
}

const queueSchema = new mongoose.Schema<IQueue>({
  status: {
    type: Number,
  },
  method: {
    type: String,
  },
  SN: {
    type: String,
  },
  requestedAt: {
    type: String,
  },
})

const QueueModel = mongoose.model<IQueue>('Queue', queueSchema)
export default QueueModel
