var mongoose = require('mongoose');
var indexSchema = mongoose.Schema;
const indexSchema = new Schema({
        user:{
            type:String
        }
})

const indexModel = mongoose.model('indexs',indexSchema)

export default indexModel

