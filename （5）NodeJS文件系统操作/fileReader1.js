/*
const http = require("http");
const fs = require("fs");
const path = require("path");
http.createServer(function(req,res){
    if(process.argv[2]){
        fileName = process.argv[2];
    }else{
        fileName = "fileReader1.js";
    }
    var filePath = path.join(__dirname,"/"+fileName)
    var resu = fs.existsSync(filePath);
        if(resu){
            fs.readFile(filePath,function(err,data) { 
                if(err){
                    console.log(err);
                }
                else{
                    res.writeHead(200,{"Content-Type":"text/txt;charset=utf-8"});
                    res.end(data);
                }
            })
        }else{
            console.log("文件路径不存在！");
        }  
}).listen(8081);
console.log("server is listening 8081");
*/



const http = require("http");
const fs = require("fs");
const path = require("path");
var fileName = process.argv[2];
http.createServer(function (req,res) {
    if(fileName == undefined){
        var str = "hello";
        /**
         * fs.readFile()是一个异步方法，执行该句不会等待
         * 文件读取完成，就直接执行后面的语句。
         * 回调函数是等到文件读取完成之后才执行
         */
        fs.readFile(process.argv[1],function(err,data) {
            if(err){
                console.log(err);
            }
            else{
                str = data.toString();
                res.end(str);
            }
        })
    }
    else{
        var pathName = path.join(__dirname,fileName);
        if(fs.existsSync(pathName)){
            fs.readFile(pathName,function(err,data){
                if(err){
                    console.log(err);
                }
                else{
                    res.end(data.toString());
                }
            })
        }
        else{
            res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
            res.end("文件不存在");
        }
    }
}).listen(8081)
console.log("server is listening 8081");
