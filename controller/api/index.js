import Base from "./Base";
import navBarModel from "../../models/api/index/navBar";
import recommendModel from "../../models/api/index/recommend";
import allBuyModel from '../../models/api/index/allBuy'
import timeRecomModel from '../../models/api/index/timeRecom'
class index extends Base {
  constructor() {
    super();
  }
  async navBar(ctx, next) {
    let data = await navBarModel.find();
    if (data) {
      ctx.body = { status: 1, data, msg: "查询成功" };
    } else {
      ctx.body = { status: 0, data, msg: "查询失败" };
    }
  }
  async allBuy(ctx, next) {
    let data = await allBuyModel.find();
    if (data) {
      ctx.body = { status: 1, data, msg: "查询成功" };
    } else {
      ctx.body = { status: 0, data, msg: "查询失败" };
    }
  }
  async timeRecom(ctx, next) {
    let data = await timeRecomModel.find();
    if (data) {
      ctx.body = { status: 1, data, msg: "查询成功" };
    } else {
      ctx.body = { status: 0, data, msg: "查询失败" };
    }
  }
  async recommend(ctx, next) {
    let data = await recommendModel.find();
    if (data) {
      ctx.body = { status: 1, data, msg: "查询成功" };
    } else {
      ctx.body = { status: 0, data, msg: "查询失败" };
    }
  }
}

export default new index();
