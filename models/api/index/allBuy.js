var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const allBuySchema = new Schema({
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
  }
});

allBuySchema.index({ id: 1 });

const allBuyModel = mongoose.model("allBuys", allBuySchema);

export default allBuyModel;
