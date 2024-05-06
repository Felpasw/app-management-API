import { Request, Response, NextFunction } from "express";



const validate = async (req: Request, res: Response, next: NextFunction) => {
  if (req.cookies.cookieID) {
    
    // const url = req.originalUrl.split('/')[1].split('?')[0];

    // result = await facade.validateAcl(req.cookies.cookieID, `/${url}`)
  } 
  next()

}

export default {validate} 