// window.addEventListener("load",() => {
//     var c = document.getElementById("canvas");   
//      const ctx = canva.getContext("2d");

var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();
   
// });