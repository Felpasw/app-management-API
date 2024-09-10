import { Request, Response, NextFunction } from 'express'
import userModel from '../config/tableModels/user'
import { get } from '../dbo/base'

const validate = async (req: Request, res: Response, next: NextFunction) => {
  if (req.cookies.cookieID) {
    const response = await get(userModel, { _id: req.cookies.cookieID })
    if (response) {
      next()
    }
  }
}

export default { validate }
