import mongoose from 'mongoose';


const User = new mongoose.Schema({
  result: {
    type: String,
  },
  msg: {
    type: String
  },
  computerModel: {
    type:String
  }
})

export default mongoose.model('Tests', User);