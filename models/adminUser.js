var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const adminUserSchema = new Schema({
        account:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        }
})

adminUserSchema.index({id: 1});

const adminUserModel = mongoose.model('adminUsers',adminUserSchema)

export default adminUserModel

