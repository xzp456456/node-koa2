var mongoose = require('../../../mongodb/db');
var Schema = mongoose.Schema;
const recommendSchema = new Schema({
  image: {
    type: String,
    required:true
  },
  name: {
    type: String,
    required:true
  },
  price: {
    type: String,
    required:true
  },
  original_price: {
    type: String,
    required:true
  }
});

recommendSchema.index({ id: 1 });

const recommendModel = mongoose.model("recommends", recommendSchema);

export default recommendModel;
