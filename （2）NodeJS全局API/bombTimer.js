function Bomb() {
    this.message = "bomb!!!";
}
Bomb.prototype.explode = function(){
    console.log(this.message);
}

var bomb = new Bomb();
setTimeout(bomb.explode.bind(bomb),2000)