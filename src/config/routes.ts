import fs from "fs";
import path from "path";
import { Router, Request, Response, NextFunction } from "express";
import { RequestHandler } from "express-serve-static-core";
import auth from "../api/auth"

const start = (app: any) => {
  const router = Router();
  app.use(router);

  const directory = path.resolve("./src/routes/");
  const filelist = fs.readdirSync(directory);

  for (let i = 0; i < filelist.length; i++) {
    const file = filelist[i];
    const routes = require(directory + "/" + file);
    routes(router);
  }

  const route = "/:route";
  const api = require("../api/template");


  router.route(route).all(auth.validate).get(api.get).post(api.insert);
  router.route(`${route}/:id`).all(auth.validate).patch(api.update).delete(api.remove);

  router.route("/ping").all((req: Request, res: Response) => {
    res.status(200).send("Pong");
  });

  router.route("/").all((req: Request, res: Response) => {
    res.sendStatus(204);
  });

  router.route("*").all((req: Request, res: Response) => {
    res.status(404).send("Erro, rota não encontrada.");
  });
};

export default start;
