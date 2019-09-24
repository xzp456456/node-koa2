var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const infoSchema = new Schema({
  time: {
    type: Date,
    default: Date.now,
    required: true
  },
  desc: {
    type: String
  }
});

infoSchema.index({ id: 1 });

const infoModel = mongoose.model("systemInfos", infoSchema);

export default infoModel;
