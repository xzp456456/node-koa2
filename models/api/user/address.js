var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const addressSchema = new Schema({
        user_id:{
            type:String
        },
        address:{
            type:String,
            required:true
        },
        name:{
            type:String,
            required:true
        },
        address_name:{
            type:String
        },
        mobile:{
            type:String,
            required:true
        }
})

addressSchema.index({id: 1});

const addressModel = mongoose.model('addresses',addressSchema)

export default addressModel
