import mongoose, { Document, Schema } from 'mongoose';

interface IComputer {
  model: string;
  IP: string;
  online: boolean;
  SN: string;
  lastSeenOnline: string;
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
    unique: true
  },
  lastSeenOnline: {
    type: String,
  },
});

const ComputerModel = mongoose.model<IComputer & Document>('Computer', computerSchema);
export default ComputerModel;
