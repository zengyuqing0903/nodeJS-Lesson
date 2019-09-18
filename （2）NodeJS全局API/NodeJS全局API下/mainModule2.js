var circle = require("./circleModule.js");//相应模块circleModule.js中对外公布的对象
var r = process.argv[2];
console.log("圆的半径："+ r);
console.log("圆的周长为："+ circle.circumference(r));
console.log("圆的面积为："+ circle.area(r));
