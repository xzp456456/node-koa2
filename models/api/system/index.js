var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const indexSchema = new Schema({
       image:{
            type:String
       }
})

indexSchema.index({id: 1});

const indexModel = mongoose.model('indexs',indexSchema)

export default indexModel