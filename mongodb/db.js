
const mongoose = require('mongoose')
const config = require('../config/index')
const DB_URL = config.DB_URL
 
mongoose.connect(DB_URL)
 
mongoose.connection.on('connected',function() {
   console.log('数据库连接成功');
});
/**
* 连接异常 error 数据库连接错误
*/
mongoose.connection.on('error',function(err) {
  console.log('数据库连接错误');
});
/**
* 连接断开 disconnected 连接异常断开
*/
mongoose.connection.on('disconnected',function() {
  console.log('连接异常断开');
});
 
module.exports = mongoose