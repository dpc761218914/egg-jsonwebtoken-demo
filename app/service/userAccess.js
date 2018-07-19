'use strict'

const Service = require('egg').Service
const Redis=require('ioredis');
const redis=new Redis;

class UserAccessService extends Service {

  async login() {
    const { ctx, service } = this;

    //获取用户id
    const userid='userid';
    //根据用户id生成token
    const token=await service.actionToken.apply(userid);
    //获取用户名
    const username='daniel';
    //组装hashmap参数
    var qe = {token: token, username:username};
    //将用户信息存在hashmap中，其中userid为主键，其他键值对为用户信息
    await redis.hmset(userid,qe,function(err,result){
      if(err){
        console.log(err);
      }else{
        console.log(result);
      }
    })
    return { token: token }
  }


}

module.exports = UserAccessService
