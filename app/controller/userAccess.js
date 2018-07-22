'use strict'


const Controller = require('egg').Controller
const Redis=require('ioredis');
const redis=new Redis;

class UserAccessController extends Controller {
  // 用户登入
  async login() {
    const { ctx, service } = this;
    console.log('login----');
    // 组装参数
    //const payload = ctx.request.body || {};
    // 调用 Service 进行业务处理
    const res = await service.userAccess.login();
    // 设置响应内容和响应状态码
    ctx.body = res;
  }

  // 登录成功后，拼接参数，校验token
  async testToken() {
    const { ctx, service } = this;
    console.log('testtoken----');
    // 组装参数
    //const payload = ctx.request.body || {};
    // 调用 Service 进行业务处理 get请求 url?token=XXX
    const token1=ctx.query.token;
    const userid=595320843;


   /* await redis.hget(userid,'token',function(err,result){
      if(err){
        console.log(err);
      }else{
        console.log('token from redis');
        console.log(result);
      }
    })*/
    console.log('token user');
    console.log(token1);
    // 设置响应内容和响应状态码
    //校验user token
    ctx.body = '校验token成功';
  }






}

module.exports = UserAccessController
