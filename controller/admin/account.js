import Base from "./Base";
import AdminuserModel from "../../models/admin/adminUser";
class user extends Base {
  constructor() {
    super();
  }
  async loginPage(ctx) {
      await ctx.render('login')
  }
  async login(ctx, next) {
    const { account, password } = ctx.request.body;
    let data = await AdminuserModel.find({
      account,
      password
    });
    if (data) {
      ctx.body = {
        status: 1,
        msg: "login is success"
      };
    } else {
      ctx.body = {
        status: 0,
        msg: "login is pail"
      };
    }
  }
}

export default new user();
