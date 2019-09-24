var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const commentSchema = new Schema({
  user_id: {
    type: String,
    ref: "users",
    required: true
  },
  goods_id:{
    type: String,
    ref: "goods",
    required: true
  },
  date: {
    type: String,
    required: true,
    default: Date.now
  },
  desc: {
    type: String,
    required: true
  },
  user:{
      avatar:{
        type: String,
        required: true
      },
      name:{
        type: String,
        required: true
      }
  }
});

commentSchema.index({ id: 1 });

const commentModel = mongoose.model("comments", commentSchema);

export default commentModel;
