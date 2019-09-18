var radio = require("./radio");
var listenRadio = new radio.Radio("music radio","FM 106.7");
function fun(){
    listenRadio.play();
    listenRadio.stop();
}

listenRadio.on("listen",fun());
