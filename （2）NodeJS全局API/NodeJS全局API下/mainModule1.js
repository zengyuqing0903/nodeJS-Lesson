var circle = require("circleModule1.js");//相应模块circleModule.js中对外公布的对象
var r = process.argv[2];
var circleObj = circle.circleFun(r);
console.log("圆的半径："+ r);
console.log("圆的周长为："+ circleObj.circumference());
console.log("圆的面积为："+ circleObj.area());
/**
 * 1、原生模块，随环境安装就存在的
 * 2、自定义模块，自己编写的
 * 3、第三方模块，在命令行中进行安装的模块，从npm服务器上下载到本地的
 * 直接require("date-now")
 */