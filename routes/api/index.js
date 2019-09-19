const router = require("koa-router")();
import user from "../../controller/api/user";
import Account from '../../controller/api/account'
import index from '../../controller/api/index'
import system from '../../controller/api/system'
module.exports = app => {
  router.prefix('/api');
  router.get("/", user.index);
  router.get("/navBar",index.navBar)
  router.get("/recommend",index.recommend)
  router.get('/version',system.version)
  router.get('/agree',system.getAgree)
  router.post('/login',Account.login)
  router.get('/address',user.address)
  router.get('/timeRecom',index.timeRecom)
  router.get('/allBuy',index.allBuy)
  router.post('/avatar',user.avatar)
  router.post('/register',Account.register)
  //router.post('/getUserInfo',Account.getUserInfo)
  app.use(router.routes()).use(router.allowedMethods());
};
