setInterval(function loop(){
    console.log("I will loop forever!");
},500)
setTimeout(function(){
    console.log("Game over");
    process.exit();
},5000)