const router = require("koa-router")();
import index from "../controller/index";
module.exports = app => {
  router.get("/", index.action);
  router.post("/join", index.join);
  router.post("/find", index.find);
  app.use(router.routes()).use(router.allowedMethods());
};
