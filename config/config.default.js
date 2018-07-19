'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1532008376954_2069';

  // add your config here
  config.middleware = [];

  config.jwt = {
    secret: 'Great4-M',
    enable: true, // default is false
    match: '/jwt', // optional
  }



  //关闭默认的安全校验
  config.security={
    csrf: false,
    // domainWhiteList: [ 'http://localhost:8080' ]
  };

  // 跨域请求配置
  config.cors = {
    origin: '*', // 星号代表允许所有的请求源
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS', // 允许的请求方式
    credentials: true
  };

  config.middleware=[ 'auth' ];


  return config;
};
