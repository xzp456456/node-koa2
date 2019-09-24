var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const versionSchema = new Schema({
  version: {
    type: String,
    required: true
  },
  agree: {
    type: String
  }
});

versionSchema.index({ id: 1 });

const versionModel = mongoose.model("versions", versionSchema);

export default versionModel;
