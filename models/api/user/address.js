var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const addressSchema = new Schema({
        user:{
            type:String
        },
        mobile:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        avatar:{
            type:String
        }
})

addressSchema.index({id: 1});

const addressModel = mongoose.model('address',addressSchema)

export default addressModel
