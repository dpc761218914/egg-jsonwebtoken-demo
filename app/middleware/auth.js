/**
 * 功能：
 * 作者： dpc
 * 日期： 2018/7/20.
 */
const Redis=require('ioredis');
const redis=new Redis;



/* eslint-disable */
module.exports = (option, app) => {
    return async function auth(ctx,next) {
        console.log(ctx.path);
        if(ctx.path=='/'||ctx.path=='/user/login'){
            await next();
        }else{
            //用户传过来的token
            const  user_token=ctx.query.token;
            //用户传过来的userid
            const  userid=595320843;
            //获取用的token，在这里校验token。如果userid和token可以在redis中找到，
            // 那么久return，否则重定向到登录页面
            // 重定向写法：this.redirect('/','login')
            await redis.hget(userid,'token',async function(err,result){
                if(err){
                    console.log(err);
                }else{
                    console.log('token from redis');
                    console.log(result);
                    if(result==user_token){
                        //用户有权限
                        console.log('you have token');
                        await next();
                    }else{
                        console.log('you have no token');
                        //用户无权限，重定向到登录
                        ctx.body = {
                            code: '0',
                            message: '无token,请重新登入！'
                        }
                        ctx.status = 200;
                    }
                }
            })
        }

    };
};

