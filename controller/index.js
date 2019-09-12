import Base from './Base'
import indexModel from '../models/index'
class index extends Base {
        constructor(){
            super()
            this.action = this.action.bind(this)
        }
        async action(ctx,next){
            ctx.render('index')
        }
        async join(ctx,next){
            console.log(ctx.request.body)
           let data =await new indexModel({
               user:ctx.request.body.user
           }).save()
           if(data){
               ctx.body = {
                   status:1,
                   msg:'save is success'
               }
           }else{
            ctx.body = {
                status:0,
                msg:'save is pail'
            }
           }
        }
        async find(ctx,next){
            let data =await indexModel.find()
            if(data){
                ctx.body = {
                    status:1,
                    msg:'find is success',
                    data:data
                }
            }else{
             ctx.body = {
                 status:0,
                 msg:'find is pail',
                 data:data
             }
            }
         }
}


export default new index()