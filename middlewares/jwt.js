const jwt = require('jsonwebtoken');
const { secret }  = require('../config/index')
const  getToken = (id) => {
    return new Promise((reslove,reject)=>{
        jwt.sign({name: 'user',id}, secret,(err,token)=>{
            if(err){
                reject(err)
            }else{
                reslove("Bearer "+token)
            }
        })
    })
}


const checkToken = (token) =>{
    return new Promise((reslove,reject)=>{
        jwt.verify(token, secret, (error, decoded) => {
            if(error) {
                console.log(error.message);
            }
            reslove(decoded)
        })
    })
    
}

module.exports = {
    checkToken,
    getToken
}