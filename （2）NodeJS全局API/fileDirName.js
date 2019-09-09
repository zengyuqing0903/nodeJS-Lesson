const http = require("http");
const fs = require("fs");
const path = require("path");

http.createServer(function(req,res){
    var fp =path.join(__dirname,"/view/view.html");
    console.log(fp);
    var fc = fs.readFileSync(fp);
    fc = fc.toString("utf8");
    res.writeHead(200,{"Content-Type":"text/html"})
    res.write(fc)
    res.end()
}).listen(8080);
console.log("server is listening 8080");


