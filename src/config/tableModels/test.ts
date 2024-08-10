import mongoose from 'mongoose';


const test = new mongoose.Schema({
  success: {
    type: Boolean,
  },
  msg: {
    type: String
  },
  SN: {
    type:String
  },
  type: {
    type:String
  }
})

export default mongoose.model('Tests', test);