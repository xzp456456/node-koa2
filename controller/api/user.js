import Base from "./Base";
import addressModel from "../../models/api/user/address";
import orderModel from "../../models/api/user/order";
import fs from "fs";
import path from "path";
import userModel from "../../models/api/user/user";
import historyModel from "../../models/api/user/history";
import goodsModel from "../../models/api/goods/goods";
import goods from "./goods";
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
    let id = ctx.state.user.id;
    let data = await addressModel.find({ user_id: id });
    if (data) {
      ctx.body = { status: 1, msg: "查询成功", data };
    } else {
      ctx.body = { status: 0, msg: "查询失败" };
    }
  }
  async subAddress(ctx) {
    let id = ctx.state.user.id;
    let params = ctx.request.body;
    params.user_id = id;
    let data = await new addressModel(params).save();
    if (data) {
      ctx.body = { status: 1, msg: "提交成功" };
    } else {
      ctx.body = { status: 0, msg: "提交失败" };
    }
  }
  async editAddress(ctx) {
    let address_id = ctx.request.body.address_id;
    const { name, address, address_name, mobile } = ctx.request.body;
    let params = { name, address, address_name, mobile };
    let data = await addressModel.update({ _id: address_id }, { $set: params });
    if (data.ok == 1) {
      if (data) {
        ctx.body = { status: 1, msg: "修改成功" };
      } else {
        ctx.body = { status: 0, msg: "修改失败" };
      }
    }
  }
  async history(ctx) {
    let id = ctx.state.user.id;
    let data = await historyModel.find({ user_id: id });
    if (data) {
      ctx.body = { status: 1, msg: "查询成功", data };
    } else {
      ctx.body = { status: 0, msg: "查询失败" };
    }
  }
  //用户头像
  async avatar(ctx, next) {
    // 上传单个文件
    let id = ctx.state.user.id;
    const file = ctx.request.files.file; // 获取上传文件
    // 创建可读流
    const reader = fs.createReadStream(file.path);
    var timestamp = new Date().getTime();
    let filePath = path.join("./", "/public/upload/") + `/${timestamp}.png`;
    // 创建可写流
    const upStream = fs.createWriteStream(filePath);
    // 可读流通过管道写入可写流
    reader.pipe(upStream);
    let data = await userModel.update(
      { _id: id },
      { $set: { avatar: "/public/upload/" + `${timestamp}.png` } }
    );
    if (data.ok === 1) {
      ctx.body = {
        msg: "上传成功！",
        status: 1,
        data: { url: "/public/upload/" + `${timestamp}.png` }
      };
    } else {
      ctx.body = {
        msg: "上传失败！",
        status: 0
      };
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
    const { name } = ctx.request.body;
    const { id } = ctx.state.user;
    let data = await userModel.update({ _id: id }, { $set: { name: name } });
    if (data.ok == 1) {
      ctx.body = { status: 1, msg: "修改成功" };
    } else {
      ctx.body = { status: 0, msg: "修改失败" };
    }
  }
  // 获取我的订单商品列表
  async list(ctx, next) {
    let user_id = ctx.state.user.id;
    let data = await orderModel.find({ user_id });
    if (data) {
      ctx.body = { status: 1, data, msg: "查询成功" };
    } else {
      ctx.body = { status: 0, data, msg: "查询失败" };
    }
  }
  // 获取我的订单商品详情
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
  async buy(ctx, next) {
    let { goods_id } = ctx.request.body;
    let user_id = ctx.state.user.id;
    let data = await goodsModel.findById(goods_id);
    if (data) {
      var timestamp = new Date().getTime();
      var params = {
        user_id,
        order_id: timestamp,
        shop_name: data.name,
        shop_image: data.image,
        status: 0,
        seller_id: data.seller_id,
        price: data.price,
        shop_desc: data.desc
      };
      var res = await new orderModel(params).save();
      if (res) {
        ctx.body = { status: 1, msg: "下单成功", data: { buy_id: res._id } };
      } else {
        ctx.body = { status: 0, msg: "下单失败" };
      }
    } else {
      ctx.body = { status: 0, msg: "商品不存在" };
    }
  }
  async status(ctx, next) {
    const { buy_id,status } = ctx.request.body;
    let data = await orderModel.update(
      { _id: buy_id },
      { $set: { status: status } }
    );
    if (data.ok == 1) {
      ctx.body = { status: 1, msg: "状态修改成功" };
    } else {
      ctx.body = { status: 0, msg: "状态修改失败" };
    }
  }
  
}

export default new user();
