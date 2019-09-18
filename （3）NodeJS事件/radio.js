const events = require("events");
const util = require("util");

const EventEmitter = events.EventEmitter;

function Radio(radioName,FM){
    EventEmitter.call(this);
    this.radioName = radioName;
    this.FM = FM;
    this.emit("listen");
}

Radio.prototype.play = function(){
    console.log(this.radioName + this.FM + "opened");
}
Radio.prototype.stop = function(){
    setTimeout(function() {
        console.log("lalala...");
        console.log(this.radioName + this.FM + "closed");
    },2000)
    
}
util.inherits(Radio,EventEmitter);
module.exports = {
    Radio:Radio
}