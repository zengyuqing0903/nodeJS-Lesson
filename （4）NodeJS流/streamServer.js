const http = require("http");
const fs = require("fs");
const path = require("path");
http.createServer(function(req,res){
    var dataPath = path.join(__dirname,"/data.txt");
    var readStream = fs.createReadStream(dataPath);
    readStream.pipe(res);
}).listen(8081);
console.log("server is listening 8081");