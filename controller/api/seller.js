import Base from "./Base";
import sellerModel from "../../models/api/seller/seller";
import sellerCateModel from '../../models/api/seller/sellerCate'
class seller extends Base {
    constructor() {
        super();
    }
    //首页店铺推荐
    async seller(ctx) {
        let data = await sellerModel.find()
        if (data) {
            ctx.body = { status: 1, data, msg: '查询成功' }
        } else {
            ctx.body = { status: 1, data, msg: '查询成功' }
        }
    }
    async sellerCate(ctx) {
        let seller_id = ctx.query.seller_id
        let data = await sellerCateModel.find({ seller_id })
        if (data) {
            ctx.body = { status: 1, data, msg: '查询成功' }
        } else {
            ctx.body = { status: 0, data, msg: '查询失败' }
        }
    }
}
export default new seller();
