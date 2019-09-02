const http = require("http");

var server = http.createServer(function(req,res){
    res.write("hello world!");
    res.end();
});

server.listen(8080);
console.log("server is listening 8080");