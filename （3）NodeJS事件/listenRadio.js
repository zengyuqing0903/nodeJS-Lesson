var radio = require("./radio");
const util = require("util");
const events = require("events");
const EventEmitter = events.EventEmitter;

util.inherits(radio.Radio,EventEmitter);
var listenRadio = new radio.Radio("music radio","FM 106.7");


listenRadio.on("play",listenRadio.play);
listenRadio.on("stop",listenRadio.stop);

 
listenRadio.emit("play");
setTimeout(function() {
    listenRadio.emit('stop');
}, 2000); 