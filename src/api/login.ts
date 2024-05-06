import { Response, Request } from "express"
import facade from "../facade/login"


const insert = async (req: Request, res: Response) => {
  const object = req.body
  const result = await facade.post(object)

  if (typeof result === "number") {
    return res.sendStatus(result)
  }

  if (result && result.length != 0 && result.status === 1) {
    const expiration = moment().add(1, "hours").toDate()

    res.cookie("cookieID", result.id, { expires: expiration, httpOnly: true })
    delete result.password
  }

  return res.status(200).send(result)
}
export default {insert}