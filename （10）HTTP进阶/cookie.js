const http = require("http");
const url = require("url");
const path = require("path");
const fs = require("fs");
const querystring = require('querystring');
http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    var pathName = urlObj.pathname;
    if(pathName=='/' && req.method=='GET'){
        showHome(req,res);
    }else if(pathName=='/login_bg.jpg' && req.method=='GET'){
        showImg(res);
    }else if(pathName=='/' && req.method=='POST'){
        loginIn(req,res);
    }
    
}).listen(8081)
console.log("server is listening 8081");
function showLogin(res,fileName){
    var filePath = path.join(__dirname,fileName);
    var fileContent = fs.readFileSync(filePath);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(fileContent);
    res.end();
}
function showImg(res){
    var filePath = path.join(__dirname,"login_bg.jpg");
    var fileContent = fs.readFileSync(filePath);
    res.writeHead(200,{"Content-Type":"image/png"});
    res.write(fileContent);
    res.end();
}
function loginIn(req,res){
    var formData ="";
    req.on("data",function(chunk){
        formData += chunk;
         console.log(chunk);
    })
    req.on("end",function(){
        var formObj = querystring.parse(formData);
        if(formObj.username == 'admin' && formObj.pwd == 'admin'){
            res.setHeader("Set-Cookie","username=admin;max-age=600000");
            showLogin(res,"list.html");
        }else{
            res.end("login error");
        }
    })
}
function showHome(req,res){
    var cookie = req.headers["cookie"];
    if(cookie == undefined){
        showLogin(res,"login.html");
    }
    else if(cookie.indexOf("username=")>=0){
        showLogin(res,"list.html");
    }
}
