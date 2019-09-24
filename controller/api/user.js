import Base from "./Base";
import addressModel from "../../models/api/user/address";
import orderModel from "../../models/api/user/order";
import fs from "fs";
import path from "path";
import historyModel from "../../models/api/user/history";
class user extends Base {
  constructor() {
    super();
    this.index = this.index.bind(this);
  }
  //首页
  async index(ctx, next) {
    await ctx.render("index");
  }
  //获取地址
  async address(ctx, next) {
    let id = ctx.state.user.id
    let data = await addressModel.find({ user_id: id });
    if (data) {
      ctx.body = { status: 1, msg: "查询成功", data };
    } else {
      ctx.body = { status: 0, msg: "查询失败" };
    }
  }
  async history(ctx) {
    let id = ctx.state.user.id
    let data = await historyModel.find({ user_id: id })
    if (data) {
      ctx.body = { status: 1, msg: "查询成功", data }
    } else {
      ctx.body = { status: 0, msg: "查询失败" }
    }
  }
  //用户头像
  async avatar(ctx, next) {
    // 上传单个文件
    let id = ctx.state.user.id
    const file = ctx.request.files.file; // 获取上传文件
    // 创建可读流
    const reader = fs.createReadStream(file.path);
    var timestamp = new Date().getTime();
    let filePath = path.join("./", "/public/upload/") + `/${timestamp}.png`;
    // 创建可写流
    const upStream = fs.createWriteStream(filePath);
    // 可读流通过管道写入可写流
    reader.pipe(upStream);
    let data = await userModel.update({ _id: id }, { $set: { avatar: "/public/upload/" + `${timestamp}.png` } })
    if (data.ok === 1) {
      ctx.body = {
        msg: "上传成功！",
        status: 1,
        data: { url: "/public/upload/" + `${timestamp}.png` }
      }
    } else {
      ctx.body = {
        msg: "上传失败！",
        status: 0
      }
    }
  }
  //获取用户信息
  async getUserInfo(ctx, next) {
    const { id } = ctx.state.user;
    let data = await userModel.findById(id);
    if (data) {
      ctx.body = { status: 0, data, msg: "查询成功" };
    } else {
      ctx.body = { status: -10086, msg: "登陆异常" };
    }
  }
  async changeName(ctx, next) {
    const { name } = ctx.request.body
    const { id } = ctx.state.user;
    let data = await userModel.update({ _id: id }, { $set: { name: name } });
    if (data.ok == 1) {
      ctx.body = { status: 1, msg: "修改成功" };
    } else {
      ctx.body = { status: 0, msg: "修改失败" };
    }
  }
   // 获取我的商品列表
   async list(ctx, next) {
    let user_id = ctx.state.user.id;
    let data = await orderModel.find({ user_id });
    if (data) {
      ctx.body = { status: 1, data, msg: "查询成功" };
    } else {
      ctx.body = { status: 0, data, msg: "查询失败" };
    }
  }
  // 获取我的商品详情
  async orderDetail(ctx, next) {
    let order_id = ctx.query.order_id;
    let user_id = ctx.state.user.id;
    let data = await orderDetailModel.find({ order_id, user_id });
    if (data) {
      ctx.body = { status: 1, data, msg: "查询成功" };
    } else {
      ctx.body = { status: 0, data, msg: "查询失败" };
    }
  }
}

export default new user();
