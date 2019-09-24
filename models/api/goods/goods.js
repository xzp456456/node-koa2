var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const goodsSchema = new Schema({
  image: {
    type: String,
    required: true
  },
  banner: [
    {
      type: String
    }
  ],
  seller_id: {
    type: String,
    ref: "sellers",
    required: true
  },
  cate_id: {
    type: String,
    ref: "sellercates",
    required: true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  weight: {
    type: String,
    required: true
  },
  original_price: {
    type: String,
    required: true
  },
  desc_imgae: [
    {
      image: {
        type: String
      },
      text: {
        type: String
      }
    }
  ]
});

goodsSchema.index({ id: 1 });

const goodsModel = mongoose.model("goods", goodsSchema);

export default goodsModel;
