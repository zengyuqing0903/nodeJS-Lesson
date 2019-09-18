// function circleFun(r){
//     return {
//         circumference:function(){console.log(2*Math.PI*r)},
//         area:function(){console.log(Math.PI*r*r)}
//     }

// }
function circleFun(r){
    function circumference(){
        return 2*Math.PI*r
    }
    function area(){
        return Math.PI*r*r
    }
    return {
        circumference:circumference(),
        area:area()
    }
}

module.exports = {
    circleFun:circleFun
}