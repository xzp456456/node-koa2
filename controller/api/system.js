import Base from "./Base";
import systemModel from "../../models/api/system/index";
import versionModel from "../../models/api/system/version";
import hotModel from '../../models/api/system/hot'
import systemInfoModel from '../../models/api/system/info'
class system extends Base {
  constructor() {
    super();
  }
  //启动页面
  async index(ctx, next) {
    let data = await systemModel.find();
    if (data) {
      ctx.body = { status: 1, msg: "查询成功", data };
    } else {
      ctx.body = { status: 0, msg: "查询失败" };
    }
  }
  //版本控制
  async version(ctx, next) {
    
    let data = await versionModel.find();
    if (data) {
      ctx.body = { status: 1, msg: "查询成功", data: data[0] };
    } else {
      ctx.body = { status: 0, msg: "查询失败" };
    }
  }
  //平台协议
  async getAgree(ctx) {
    await new versionModel({version:'dsadsadas',agree:'dshahdsha'}).save();
    let data = await versionModel.find();
    if (data) {
      ctx.body = { status: 1, msg: "查询成功", data: { agree: data[0].agree } };
    } else {
      ctx.body = { status: 0, msg: "查询失败" };
    }
  }
  async hot(ctx){
    let data = await hotModel.find();
  }
  //系统消息
  async systemInfo(ctx) {
    let data = await systemInfoModel.find();
    if (data) {
      ctx.body = { status: 1, msg: "查询成功", data };
    } else {
      ctx.body = { status: 0, msg: "查询失败" };
    }
  }
}
  
export default new system();
