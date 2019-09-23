var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const historySchema = new Schema({
        name:{
            type:String
        },
        user_id:{
            type:String,
            ref:'users'
        }
})

historySchema.index({id: 1});

const historyModel = mongoose.model('historys',historySchema)

export default historyModel
