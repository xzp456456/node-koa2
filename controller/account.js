import Base from "./Base";
import { getToken } from "../middlewares/jwt";
import userModel from "../models/user";
class Account extends Base {
  constructor() {
    super();
    this.getUserInfo = this.getUserInfo.bind(this);
  }
  async login(ctx, next) {
    const { mobile, password } = ctx.request.body;
    if (mobile == undefined || password == undefined) {
      ctx.body = { status: 0, msg: "手机号和密码不能为空" };
      return;
    }
    let params = { mobile: mobile, password: password };
    let user = await userModel.findOne(params);
    if (user) {
      let token = await getToken(user._id);
      ctx.body = {
        status: 1,
        data: token,
        msg: "登陆成功"
      };
    } else {
      ctx.body = {
        status: 0,
        msg: "用户不存在或者密码错误"
      };
    }
  }
  async register(ctx, next) {
    const { mobile, password } = ctx.request.body;
    let params = { mobile, password };
    let user = await userModel.findOne(params);
    if (!user) {
      let save = await new userModel(params).save();
      if (save) {
        ctx.body = { status: 1, msg: "注册成功" };
      } else {
        ctx.body = { status: 1, msg: "注册失败" };
      }
    } else {
      ctx.body = {
        status: 0,
        msg: "用户已经被注册"
      };
    }
  }
  async getUserInfo(ctx, next) {
    const { id } = ctx.state.user;
    let data = await userModel.findById(id)
    if (data) {
      ctx.body = {
        status: 0,
        data,
        msg: "查询成功"
      };
    } else {
      ctx.body = {
        status: -10086,
        msg: "登陆异常"
      };
    }
  }
}

export default new Account();
