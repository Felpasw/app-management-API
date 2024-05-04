import './config/moongooseFile';
import Express from "express";
import router from "./config/routes";

const app = Express();

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(router);

export default app;
