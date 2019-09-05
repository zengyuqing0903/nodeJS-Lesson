const http = require("http");
const path = require("path");
const fs = require("fs");

var server = http.createServer(function(req,res){
    var fp = __dirname + "/view/view.html";
    var fc = fs.readFileSync(fp);
    console.log(fp);
    fc = fc.toString("utf8");
    res.writeHead(200,{"Content-Type":"text/html"})
    res.write(fc)
    res.end()
});
server.listen(8080);
console.log("server is listening 8080");