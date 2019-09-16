import Base from "./Base";
import userModel from "../../models/user";
class user extends Base {
  constructor() {
    super();

    this.index = this.index.bind(this);
  }
  async index(ctx, next) {
    await ctx.render("index");
  }
  async join(ctx, next) {
    console.log(ctx.request.body);
    let data = await new userModel({
      user: ctx.request.body.user
    }).save();
    if (data) {
      ctx.body = {
        status: 1,
        msg: "save is success"
      };
    } else {
      ctx.body = {
        status: 0,
        msg: "save is pail"
      };
    }
  }
  async find(ctx, next) {
    let data = await userModel.find();
    if (data) {
      ctx.body = {
        status: 1,
        msg: "find is success",
        data: data
      };
    } else {
      ctx.body = {
        status: 0,
        msg: "find is pail",
        data: data
      };
    }
  }
}

export default new user();
