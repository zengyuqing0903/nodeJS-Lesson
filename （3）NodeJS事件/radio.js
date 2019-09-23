const events = require("events");

const EventEmitter = events.EventEmitter;

function Radio(radioName,FM){
    EventEmitter.call(this);
    this.radioName = radioName;
    this.FM = FM;
}

Radio.prototype.play = function(){
    console.log(this.radioName + this.FM + "opened");
    setTimeout(function() {
        console.log("lalala...");
    },2000)
}
Radio.prototype.stop = function(){
    console.log(this.radioName + this.FM + "closed"); 
}
module.exports = {
    Radio:Radio
} 

