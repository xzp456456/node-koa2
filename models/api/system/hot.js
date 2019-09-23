var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const hotsSchema = new Schema({
       name:{
            type:String,
            required:true
       }
})

hotsSchema.index({id: 1});

const hotModel = mongoose.model('hots',hotsSchema)

export default hotModel