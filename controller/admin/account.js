import Base from "./Base";
import AdminuserModel from "../../models/admin/adminUser";
class user extends Base {
  constructor() {
    super();
  }
  //后台登陆
  async loginPage(ctx,next) {
    await ctx.render('login')
  }
  async login(ctx, next) {
    const { account, password } = ctx.request.body;
    let data = await AdminuserModel.findOne({
      account,
      password
    });
    if (data) {
    ctx.body = { status: 1, msg: "登录成功" };

    } else {
      console.log(ctx.session)
      ctx.body = {
        status: 0, msg: "登录失败"
      };
    }
  }
}

export default new user();
