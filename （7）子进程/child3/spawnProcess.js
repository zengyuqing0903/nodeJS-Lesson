const cp = require("child_process");

var childProcess = cp.spawn("node",["childProcess1.js"]);//用参数接收spawn方法的返回值
// 以流的形式接收子进程返回的数据
var result = "";
childProcess.stdout.on("data",function(chunk){
    console.log(chunk.toString());
    result += chunk;
})



// childProcess.stdin.on("close",function(){
//     console.log(result);
// })