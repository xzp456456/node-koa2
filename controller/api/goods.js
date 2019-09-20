import Base from "./Base";
import goodsModel from "../../models/api/goods/goods";
class goods extends Base {
  constructor() {
    super();
  }
  //获取商品列表
  async goods(ctx,next) {
    let sort = ctx.query.sort
    let data = await goodsModel.find().sort({KEY,sort});
    if (data) {
      ctx.body = { status: 1, msg: "查询成功", data };
    } else {
      ctx.body = { status: 0, msg: "查询失败" };
    }
  }
}

export default new goods();
