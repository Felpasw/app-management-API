 import { Request, Response } from 'express'
 import facade from '../routes/graph'

 const get = async (req: Request, res: Response) => {
   const query = req.query

   const response = await facade.getCounts(query)
   
   if(response){
    return res.json(response).status(200)
   } 
   return res.sendStatus(400)
}

 export default {
   get,
 }
