var arg = process.argv[2];
if(arg == undefined || arg == "-h"){
    console.log("命令行参数应为数学运算式！");
}
else{
    console.log(arg + "=%s",eval(arg));
} 