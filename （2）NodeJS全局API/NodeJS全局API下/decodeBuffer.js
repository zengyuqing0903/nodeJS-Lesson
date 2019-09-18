var base64Str = 'emhhbmdzYW46MTIzNDU2';
var buf = base64Str.toString("base64");
var str = Buffer.from(buf,"base64");
console.log(str.toString("utf-8"));