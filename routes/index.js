const router = require("koa-router")();
import user from "../controller/api/user";
import Account from '../controller/api/account'
import AdminAccount from '../controller/admin/account'
module.exports = app => {
  router.get("/", user.index);
  router.post("/api/join", user.join);
  router.post("/api/find", user.find);
  router.post('/api/login',Account.login)
  router.post('/api/register',Account.register)
  router.post('/api/getUserInfo',Account.getUserInfo)
  //admin 
  router.get('/admin/adminLogin',AdminAccount.adminLogin)
  router.post('/admin/AccountLogin',AdminAccount.login)
  app.use(router.routes()).use(router.allowedMethods());
};
