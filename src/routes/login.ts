import { get } from '../dbo/base'
import UserModel from '../config/tableModels/user'

const post = async (object) => {
  const response = await get(UserModel, object)
  console.log(response)
}
export { post }
