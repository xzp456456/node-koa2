import Base from "./Base";
import goodsModel from "../../models/api/goods/goods";
import sellerModel from "../../models/api/seller/seller";
import userModel from "../../models/api/user/user";
import commentModel from "../../models/api/goods/comment";
class goods extends Base {
  constructor() {
    super();
  }
  //获取商品列表
  async goods(ctx, next) {
    let sort = ctx.query.sort;
    let data = await goodsModel.find().sort({ KEY:sort });
    if (data) {
      ctx.body = { status: 1, msg: "查询成功", data };
    } else {
      ctx.body = { status: 0, msg: "查询失败" };
    }
  }
  async getSellerInfo(ctx, next) {
    let seller_id = ctx.query.seller_id;
    let data = await sellerModel.find({ seller_id });
    if (data) {
      ctx.body = { status: 1, msg: "查询成功", data };
    } else {
      ctx.body = { status: 0, msg: "查询失败" };
    }
  }
  async getComment(ctx, next) {
    let goods_id = ctx.query.goods_id;
    let data = await commentModel.find({ goods_id });
    if (data) {
      ctx.body = { status: 1, msg: "查询成功", data };
    } else {
      ctx.body = { status: 0, msg: "查询失败" };
    }
  }
  async comments(ctx, next) {
    let user_id = ctx.state.user.id;
    let { name, avatar } = await userModel.find({user_id});
    let { desc, goods_id } = ctx.request.body;
    let data = await new commentModel({ user: { name, avatar }, user_id,desc,goods_id });
    if (data) {
      ctx.body = { status: 1, msg: "查询成功", data };
    } else {
      ctx.body = { status: 0, msg: "查询失败" };
    }
  }
}

export default new goods();
