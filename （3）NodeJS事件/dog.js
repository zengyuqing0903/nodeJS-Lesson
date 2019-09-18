// 原生模块、核心模块
const events = require("events");
const EventEmitter = events.EventEmitter;

function Dog(name,energy){
    EventEmitter.call(this);
    this.name = name;
    this.energy = energy;
    var that = this;
    var timerId = setInterval(function() {
        if(that.energy>=0){
            that.emit("bark");
            that.energy--;
        }else{
            clearInterval(timerId);
        }
    }, 1000);

}  

Dog.prototype.__proto__ = EventEmitter.prototype;

module.exports = {
    Dog:Dog
}