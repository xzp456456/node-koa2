import Base from "./Base";
import { getToken } from "../../middlewares/jwt";
import userModel from "../../models/api/user/user";
class Account extends Base {
  constructor() {
    super();
  }
  //用户登陆
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
      ctx.body = { status: 1, data: token, msg: "登陆成功" };
    } else {
      ctx.body = { status: 0, msg: "用户不存在或者密码错误" };
    }
  }
  //用户注册
  async register(ctx, next) {
    const { mobile, password } = ctx.request.body;
    let params = { mobile, password };
    let user = await userModel.findOne({ mobile: mobile });
    if (!user) {
      let save = await new userModel(params).save();
      if (save) {
        ctx.body = { status: 1, msg: "注册成功" };
      } else {
        ctx.body = { status: 1, msg: "注册失败" };
      }
    } else {
      ctx.body = { status: 0, msg: "用户已经被注册" };
    }
  }
  async changePassword(ctx) {
    const { mobile, password, new_password } = ctx.request.body
    let user = await userModel.findOne({ mobile, password });
    if (user) {
      let data = await userModel.update({ password }, { $set: { password: new_password } })
      if (data.ok == 1) {
        ctx.body = { status: 1, msg: '密码修改成功' }
      } else {
        ctx.body = { status: 0, msg: '密码修改失败' }
      }
    } else {
      ctx.body = { status: 0, msg: '用户不存在,或者密码错误' }
    }
  }

}

export default new Account();
