var userName = process.argv[2];
var password = process.argv[3];
console.log("用户名:" + userName +" 密码:" + password);
var str = userName +""+ password;
var buf1 = Buffer.from(str,"utf-8");
var base64Str = buf1.toString("base64");
console.log("base64加密:"+base64Str);
