import Base from "./Base";
import navBarModel from "../../models/api/index";
class index extends Base {
  constructor() {
    super();
  }
  async navBar(ctx) {
    let arr = ctx.request.body.arr
    try{
        arr.forEach((item)=>{
            await navBarModel
            .updated({id:item.id},{$set:{name:item.name}})
        })
        ctx.body = { status: 1, data, msg: "更新成功" };
    }catch(err){
        ctx.body = { status: 0, data, msg: "查询失败" };
    }
  }
}

export default new index();
