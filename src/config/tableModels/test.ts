import mongoose from 'mongoose';


const test = new mongoose.Schema({
  result: {
    type: String,
  },
  msg: {
    type: String
  },
  SN: {
    type:String
  }
})

export default mongoose.model('Tests', test);