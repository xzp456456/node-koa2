var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const goodsSchema = new Schema({
  image: {
    type: String,
    required:true
  },
  name:{
    type: String,
    required:true
  },
  price: {
    type: String,
    required:true
  },
  desc:{
    type: String,
    required:true
  },
  weight:{
    type: String,
    required:true
  },
  original_price:{
    type: String,
    required:true
  }
});

goodsSchema.index({ id: 1 });

const goodsModel = mongoose.model("goods", goodsSchema);

export default goodsModel;
