function Bomb() {
    this.message = "bomb!!!";
    this.explode = function() {
        console.log(this.message);
    }
}
var bomb = new Bomb();
setTimeout(function(){
    bomb.explode();
},2000)