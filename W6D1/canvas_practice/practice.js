document.addEventListener("DOMContentLoaded", function(){
  const canvas = document.getElementById('myCanvas');
  // canvas.style.height = "500";
  // canvas.style.width = "500";
  canvas.height = "500";
  canvas.width = "500";
  let ctx = canvas.getContext('2d');
  ctx.fillStyle = 'blue';
  ctx.rect(0,0,100,100);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(70, 70, 50, 0, 360);
  ctx.strokeStyle = 'red';
  ctx.lineWidth = "10";
  ctx.fillStyle = 'green';
  ctx.stroke();
  ctx.fill();
});
