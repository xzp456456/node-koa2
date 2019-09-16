var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const userSchema = new Schema({
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

userSchema.index({id: 1});

const userModel = mongoose.model('users',userSchema)

export default userModel

