const router = require("koa-router")();
import AdminAccount from '../../controller/admin/account'
import index from '../../controller/admin/index'
module.exports = app => {
    router.prefix('/admin');
  router.get('/login',AdminAccount.loginPage)
  router.post('/AccountLogin',AdminAccount.login)
  router.get('/index',index.index)
  app.use(router.routes()).use(router.allowedMethods());
};