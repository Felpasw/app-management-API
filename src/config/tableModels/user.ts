import mongoose, { Document, Model } from 'mongoose'

interface IUser extends Document {
  username: string
  password: string
}

const userSchema = new mongoose.Schema<IUser>({
  username: {
    type: String,
  },
  password: {
    type: String,
  },
})

const UserModel = mongoose.model<IUser>('Users', userSchema)
export default UserModel
