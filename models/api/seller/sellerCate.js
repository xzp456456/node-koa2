var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const sellerCatesSchema = new Schema({
  category: {
      type:String,
      required:true
  },
  seller_id:{
    type:String,
    ref:'sellers',
    required:true
  }
});

sellerCatesSchema.index({ id: 1 });

const sellerCatesModel = mongoose.model("sellercates", sellerCatesSchema);

export default sellerCatesModel;
