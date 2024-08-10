import mongoose from 'mongoose';


const computer = new mongoose.Schema({
  model: {
    type: String,
  },
  IP: {
    type: String
  },
  online: {
    type: String
  },
  SN: {
    type: String

  }
})

export default mongoose.model('Computers', computer);