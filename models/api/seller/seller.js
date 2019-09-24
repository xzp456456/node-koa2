var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const sellerSchema = new Schema({
  seller_name: {
    type: String,
    required:true
  },
  user_id:{
    type: String,
    ref:'users',
    required:true
  },
  xing:{
    type: String
  },
  sell: {
    type: String,
    required:true
  },
  start_price:{
    type: String,
    required:true
  },
  base:{
    type: String,
    required:true
  }
});

sellerSchema.index({ id: 1 });

const sellerModel = mongoose.model("sellers", sellerSchema);

export default sellerModel;
