/**
 * fork() 专门用来启动node进程
 * 并且父子进程之间可以进行通信
 */

const cp = require("child_process");
// fork() 最常用 
var fork1 = cp.fork("childProcess1.js",["javascript"]);//以变量形式接收返回值
// 以流的形式接收子进程返回的数据
fork1.on("close",function(chunk){
    // console.log(chunk.toString());
})

fork1.send("parent");

// 事件监听  (进程通信)
fork1.on("message",function(msg){
    console.log(msg);
    console.log(typeof msg);
})