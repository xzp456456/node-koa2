const router = require("koa-router")();
import index from "../controller/index";
module.exports = app => {
  router.get("/", index.action);
  app.use(router.routes()).use(router.allowedMethods());
};
