const router = require("koa-router")();
import user from "../controller/user";
import Account from '../controller/account'
module.exports = app => {
  router.get("/", user.action);
  router.post("/join", user.join);
  router.post("/find", user.find);
  router.post('/login',Account.login)
  router.post('/register',Account.register)
  router.post('/getUserInfo',Account.getUserInfo)
  app.use(router.routes()).use(router.allowedMethods());
};
