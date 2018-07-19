/**
 * 功能：
 * 作者： dpc
 * 日期： 2018/7/20.
 */
const Redis=require('ioredis');
const redis=new Redis;


module.exports = (option, app) => {
    return function* auth(next) {
        yield next;
        if(this.path=='/'||this.path=='/login'){
            console.log('login page');
            return;
        }
        else{
           // const {ctx} = this
            //用户传过来的token
            const  user_token=this.query.token;
            //用户传过来的userid
            const  userid='userid';
            //获取用的token，在这里校验token。如果userid和token可以在redis中找到，
            // 那么久return，否则重定向到登录页面
            // 重定向写法：tihs.redirect('/','login')
            redis.hget(userid,'token',function(err,result){
                if(err){
                    console.log(err);
                }else{
                    console.log('token from redis');
                    console.log(result);
                    if(result==user_token){
                        //用户有权限
                        console.log('you have token');
                    }else{
                        //用户无权限，重定向到登录
                        console.log('you have error token');
                    }
                }
            })
            console.log(user_token)

            console.log('need token  page');

        }

    };
};