var $ = document.querySelector.bind(document);
var canvas = $("#canvas");
var ctx = canvas.getContext("2d");
var width = 500, height = 700;
ctx.beginPath();
ctx.moveTo(width / 2, height);
ctx.lineTo(width / 4, 20);
ctx.stroke();
function onPointerMove() {
    console.log("A");
}
canvas.addEventListener("pointermove", onPointerMove, false);
