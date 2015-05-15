var $ = document.querySelector.bind(document);

var canvas = $("#canvas");
var ctx = <CanvasRenderingContext2D>canvas.getContext("2d");

var width = 700, height = 500;
var bullet_dy=5;
canvas.width = width;
canvas.height = height;

var x, y;

var bullets=[];

function onPointerMove(e) {
  x = e.offsetX;
  y = e.offsetY;
}

function onPointerDown(e) {
    bullets.push({
      x :e.offsetX,
      y :e.offsetY
    });
}


// dx=(y+dy)x/y -x

function updateBullets(time){

  bullets.forEach(function(bullet){
    var dx=0
    if(bullet.x>width/2){
        var px=bullet.x-width/2;
        var py=height-bullet.y;
      dx=(py+bullet_dy)*(px)/py-(px)
      bullet.x+=dx;
    }else{

      px=width/2-bullet.x;
      var py=height-bullet.y;
      dx=(py+bullet_dy)*(px)/py-(px)
      bullet.x-=dx;
    }


      bullet.y-=bullet_dy;
      var radius=5;
      ctx.beginPath();
      ctx.arc(bullet.x, bullet.y, radius, 0, 2 * Math.PI, false);
      ctx.fillStyle = 'green';
      ctx.fill();
  });


}

function gameLoop(time_) {
  ctx.clearRect(0, 0, width, height);

  ctx.beginPath();
  ctx.moveTo(width / 2, height);
  ctx.lineTo(x, y);
  ctx.stroke();

  updateBullets(time_);


  window.requestAnimationFrame(gameLoop);
}
window.requestAnimationFrame(gameLoop);

canvas.addEventListener("pointermove", onPointerMove, false);
canvas.addEventListener("pointerdown", onPointerDown, false);
