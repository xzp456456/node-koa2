var mongoose = require('../../../mongodb/db');
var Schema = mongoose.Schema;
const timeRecomSchema = new Schema({
  image: {
    type: String,
    required:true
  },
  price: {
    type: String,
    required:true
  }
});

timeRecomSchema.index({ id: 1 });

const timeRecomModel = mongoose.model("timeRecoms", timeRecomSchema);

export default timeRecomModel;
