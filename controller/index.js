import Base from './Base'
class index extends Base {
        constructor(){
            super()
            this.action = this.action.bind(this)
        }
        async action(ctx,next){
            ctx.render('index')
        }
}


export default new index()