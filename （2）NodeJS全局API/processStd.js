var obj = {};
var i = 0;
process.stdout.write("name:\n");
process.stdin.on("data",function(data){
    i++;
    switch(i){
        case 1:
            obj.name = data.toString();
            process.stdout.write("email:\n");
            break;
        case 2:
            obj.email = data.toString(); 
            process.stdout.write("qq:");
            break;
        case 3:
            obj.qq = data.toString();
            process.stdout.write("mobile:\n");
            break;
        case 4:
            obj.mobile = data.toString();
            console.log(obj);
            break;
        default:
            process.exit();
            break;
    }
})

