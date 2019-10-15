/**
 * 1、创建server，读取index.html，响应到客户端显示
 * 2、在页面发起ajax请求，获取数据
 * 服务端接收到ajax请求，去猫眼网站上爬取页面内容
 * 使用cheerio来解析得到需要的数据，储存在数组里面，响应到客户端
 * 3、在ajax回调函数中使用响应到的数据，拼接到页面上显示
 */
const http = require("http");
const https = require("https");

const fs = require("fs");
const url = require("url");

const cheerio = require("cheerio");

http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    var pathName = urlObj.pathname;
    if(pathName == "/"){
        var fileContent = fs.readFileSync("index.html");
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(fileContent);
        res.end();
    }
    else if(pathName == "/getlist"){
        var option={
            hostname: 'maoyan.com',
            path: '/films',
            headers: {
              'Accept':'*/*',
              'Accept-Encoding':'utf-8',
              'Accept-Language':'zh-CN,zh;q=0.8',
              'Connection':'keep-alive',
              'Host':'maoyan.com',
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.87 Safari/537.36'
            }
        };
        https.get(option,function(resObj){
            var result = "";
            resObj.on("data",function(chunk){
                result += chunk;
            })
            resObj.on("end",function(){
                var $ = cheerio.load(result);
                var list = [];
                $("dd").each(function(index,el){
                    // 获取到值放到数组中再响应
                    const element = $(el);
                    var movieObj = {};
                    var a=element.find(".movie-item-title a");
                    var d=element.find(".channel-detail-orange");
                    movieObj.movieId=a.attr("data-val").slice(9,-1);
                    movieObj.movieName=a.text();
                    movieObj.movieRange=d.text();
                    // filmObj.movieId ="$(this).text()";
                    list.push(movieObj);
                   

                });
                var listStr = JSON.stringify(list); 
                console.log(listStr);
                res.writeHead(200,{"Content-Type":"text/plain;charset=utf-8"});
                res.write(listStr);
                res.end();
            })
          
           
        })
    }
}).listen(8081);
console.log("server is listening 8081");






