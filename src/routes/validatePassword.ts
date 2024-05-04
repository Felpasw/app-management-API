import { Router } from "express";
import { RequestHandler } from "express-serve-static-core";
import  post  from "../api/validatePassword";

const route = "/validatePassword";

const routes = (router: Router) => {
  router.route(route).post(post);
};

export default routes;
