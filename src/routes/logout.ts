const route = "/logout"
import api from  "../api/logout"

export default (router) => {
  router.route(route).post(api.logout)
}
