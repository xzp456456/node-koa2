const router = require("koa-router")();
import AdminAccount from '../../controller/admin/account'

module.exports = app => {
    router.prefix('/admin');
  router.get('/login',AdminAccount.loginPage)
  router.post('/AccountLogin',AdminAccount.login)
  app.use(router.routes()).use(router.allowedMethods());
};