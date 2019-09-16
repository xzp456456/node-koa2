import { checkToken } from '../middlewares/jwt'
class Base{
    constructor(){
    
    }
    async cheLogin(token){
      let user = await checkToken(token)
      if(user){
        return user
      } else {
        return {
          msg:'login is pail'
        }
      }
  }

}

export default Base