const http = require('http');
const fs = require("fs");
const queryString = require("querystring");
http.createServer(function(req,res){
    var dataStr = "";
    req.on("data",function(chunk){
        dataStr += chunk;
    })
    req.on("end",function(){
        var dataObj = queryString.parse(dataStr);
        fs.readFile("data.json",function(err,data){
            if(err){
                console.log(err);
            }else{
                var fc = JSON.parse(data);
                var flag = false;
                for(var i=0;i<fc.length;i++){
                    if(fc[i].username == dataObj.username && fc[i].password == dataObj.password){
                        flag = true; 
                        break;
                    }
                }
                if(flag){
                    console.log("登录成功"); 
                }else{
                    console.log("用户名、密码不正取");
                }
                
            } 
        }) 
    })
}).listen(8081);
console.log("server is listening 8081");