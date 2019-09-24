var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const orderDetailSchema = new Schema({
      seller_id:{
          type:String,
          required:true
      },
      shop_name:{
          type:String,
          required:true
      },
      shop_image:{
        type:String,
        required:true
      },
      shop_desc:{
          type:String,
          required:true
      },
      status:{
          type:Number,
          required:true
      },
      price:{
          type:Number,
          required:true
      }
})

orderDetailSchema.index({id: 1});

const orderDetailModel = mongoose.model('orders',orderDetailSchema)

export default orderDetailModel

