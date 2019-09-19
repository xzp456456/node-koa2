var mongoose = require('../../../mongodb/db');
var Schema = mongoose.Schema;
const navBarsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  navBar_id: {
    type: String,
    required: true
  },
  category: [
    {
      image: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      }
    }
  ]
});

navBarsSchema.index({ id: 1 });

const navBarsModel = mongoose.model("navBars", navBarsSchema);

export default navBarsModel;
