const http = require("http");
const querystring = require("querystring");//此模块可以将对象转换成服务器端可以接收的字符串形式
var username = process.argv[2];
var password = process.argv[3];
var infor = {
    "username":username,
    "password":password
};
var str = querystring.stringify(infor);
var options = {
    host:"localhost",
    port:8081,
    path:"/",
    method:"post"
}
var req = http.request(options,function(res){

});
// options是一个类似关联数组的对象，表示请求的参数，
// callback作为回调函数，需要传递一个参数，为http.ClientResponse的实例，
// http.request返回一个http.ClientRequest的实例。
req.write(str);
req.end();   