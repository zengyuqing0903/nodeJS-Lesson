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
    var result = fs.existsSync(filePath);
    if(result){
        var readStream = fs.createReadStream(filePath);
        readStream.pipe(res);
    }else{
        console.log("该路径文件不存在!!");
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
        var reader = fs.createReadStream(process.argv[1]);
        reader.pipe(res);
    }
    else{
        var pathName = path.join(__dirname,fileName);
        if(fs.existsSync(pathName)){
            var reader = fs.createReadStream(pathName);
            reader.pipe(res);
        }
        else{
            res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
            res.end("文件不存在");
        }
    }
}).listen(8081)
console.log("server is listening 8081");