const route = "/login"
import api from "../api/login"

export default (router) => {
  router.route(route).post(api.post)
}
