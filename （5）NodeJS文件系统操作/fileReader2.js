/*
const http = require("http");
const fs = require("fs");
const path = require("path");
http.createServer(function(req,res){
    if(process.argv[2]){
        fileName = process.argv[2];
    }else{
        fileName = "fileReader2.js";
    }
    var filePath = path.join(__dirname,"/"+fileName)
    var resu = fs.existsSync(filePath);
    if(resu){
        var len = fs.statSync(filePath).size;
        var buf = Buffer.alloc(len);
        fs.open(filePath,function(err,fd) { 
            if(err){
                console.log(err);
            }else{
                fs.read(fd,buf,0,len,0,function(err,bytes) {
                    if(err){
                        console.log(err);
                    }else{
                        res.writeHead(200,{"Content-Type":"text/txt;charset=utf-8"});
                        res.end(buf.slice(0, bytes).toString());
                        fs.close(fd,function(err) {
                            if(err){
                                console.log(err);
                            }else{
                                console.log("文件关闭成功");
                            }
                        });
                    }
                });
            }
        });
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
        fs.open(process.argv[1],"r+",function(err,fd){
            if(err){
                console.log(err);
            }else{
                var statObj = fs.statSync(process.argv[1]);
                var buf = Buffer.alloc(statObj.size);
                fs.read(fd,buf,0,statObj.size,0,function(err,by,buff){
                    if(err){
                        console.log(err);
                    }
                    else{
                        res.end(buf.toString());
                        fs.closeSync(fd);
                    }
                })
            }

        })
    }
    else{
        var pathName = path.join(__dirname,fileName);
        if(fs.existsSync(pathName)){
            fs.open(pathName,"r+",function(err,fd){
                if(err){
                    console.log(err);
                }
                else{
                    var statObj = fs.statSync(fileName);
                    var buf = Buffer.alloc(statObj.size);
                    fs.read(fd,buf,0,statObj.size,0,function(err,by,buff){
                        if(err){
                            console.log(err);
                        }
                        else{
                            res.end(buf.toString());
                            fs.closeSync(fd);
                        }
                    })
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