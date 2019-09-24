var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const orderSchema = new Schema({
  user_id: {
    type: String,
    ref: "users",
    required: true
  },
  seller_id: {
    type: String,
    required: true
  },
  shop_name: {
    type: String,
    required: true
  },
  shop_image: {
    type: String,
    required: true
  },
  shop_desc: {
    type: String,
    required: true
  },
  status: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

orderSchema.index({ id: 1 });

const orderModel = mongoose.model("orders", orderSchema);

export default orderModel;
