import Base from "./Base";
import userModel from "../../models/api/user/user";
import addressModel from "../../models/api/user/address";
class user extends Base {
  constructor() {
    super();
    this.index = this.index.bind(this);
  }
  async index(ctx, next) {
    await ctx.render("index");
  }
  async address(ctx, next) {
    let data = await addressModel.find();
    if (data) {
      ctx.body = { status: 1, msg: "查询成功" };
    } else {
      ctx.body = { status: 0, msg: "查询失败" };
    }
  }
}

export default new user();
