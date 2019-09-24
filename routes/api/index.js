const router = require("koa-router")();
import user from "../../controller/api/user";
import Account from '../../controller/api/account'
import index from '../../controller/api/index'
import system from '../../controller/api/system'
import goods from '../../controller/api/goods'
import seller from '../../controller/api/seller'
module.exports = app => {
  router.prefix('/api');
  router.get('/goods',goods.goods)
  router.post('/goods/comments',goods.comments)
  router.get('/goods/getcomments',goods.getComment)
  router.get("/", user.index);
  router.get("/navBar",index.navBar)
  //
  
  router.get('/user/getUserInfo',user.getUserInfo)
  router.get("/user/order",user.list)
  router.post('/user/changeName',user.changeName)
  router.post('/user/changePassword',Account.changePassword)
  router.get("/user/details",user.orderDetail)
  //
  router.get("/recommend",index.recommend)
  router.get('/version',system.version)
  router.get('/agree',system.getAgree)
  router.post('/login',Account.login)
  router.get('/address',user.address)
  router.get('/timeRecom',index.timeRecom)
  router.get('/allBuy',index.allBuy)
  router.post('/avatar',user.avatar)
  router.get('/systemInfo',system.systemInfo)
  //
  router.get("/seller/getSellerInfo",goods.getSellerInfo)
  router.get('/seller',seller.seller)
  router.get('/seller/sellerCate',seller.sellerCate)
  //
  router.get('/history',user.history)
  
  router.get('/hot',system.hot)
  router.post('/register',Account.register)
  
  //router.post('/getUserInfo',Account.getUserInfo)
  app.use(router.routes()).use(router.allowedMethods());
};
