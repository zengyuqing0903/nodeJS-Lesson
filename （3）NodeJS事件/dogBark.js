var dog = require("./dog.js");
var energy1 = process.argv[2];
var energy2 = process.argv[3];
var dog1 =new dog.Dog("taidi", energy1);
var dog2 =new dog.Dog("zangao", energy2);
function barkFun(){
    console.log(this.name + " barked!" +"energy: " +this.energy);
}
dog1.on("bark",barkFun);
dog2.on("bark",barkFun);

