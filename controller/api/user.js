import Base from "./Base";
import userModel from "../../models/api/user/user";
import addressModel from "../../models/api/user/address";
import fs from "fs";
import path from "path" ;
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
    let data = await addressModel.find();
    if (data) {
      ctx.body = { status: 1, msg: "查询成功" };
    } else {
      ctx.body = { status: 0, msg: "查询失败" };
    }
  }
  //用户头像
  async avatar(ctx, next) {
    // 上传单个文件
    const file = ctx.request.files.file; // 获取上传文件
    // 创建可读流
    const reader = fs.createReadStream(file.path);
    var timestamp = new Date().getTime();
    let filePath = path.join("./", "/public/upload/") + `/${timestamp}.png`;
    // 创建可写流
    const upStream = fs.createWriteStream(filePath);
    // 可读流通过管道写入可写流
    reader.pipe(upStream);
    return (ctx.body = {
      msg: "上传成功！",
      status: 1,
      data: { url: "/public/upload/" + `${timestamp}.png` }
    });
  }
}

export default new user();
