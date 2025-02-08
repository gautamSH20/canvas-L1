const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

// ctx.fillStyle = `rgba(255,0,0,0.5)`;
// ctx.fillRect(100, 100, 100, 100);
// ctx.fillStyle = `rgba(0,255,0,0.5)`;
// ctx.fillRect(400, 100, 100, 100);
// ctx.fillStyle = `rgba(0,0,255,0.5)`;
// ctx.fillRect(300, 300, 100, 100);

// // LINES
// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(700, 50);
// ctx.lineTo(700, 500);
// ctx.lineTo(50, 500);
// ctx.closePath();

// ctx.strokeStyle = "#fa34a3";
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(700, 500);
// ctx.lineTo(700, 50);
// ctx.lineTo(50, 500);
// ctx.closePath();
// ctx.stroke();

// // arc/circle

// for (let i = 1; i < 500; i++) {
//   var x = Math.random() * window.innerWidth;
//   var y = Math.random() * window.innerHeight;
//   ctx.beginPath();
//   ctx.arc(x, y, 40, 0, Math.PI * 2, false);
//   ctx.closePath();
//   var r = Math.random() * 255;
//   var b = Math.random() * 255;
//   var g = Math.random() * 255;
//   var a = Math.random().toFixed(1) * 1;
//   ctx.strokeStyle = `rgba(${r},${g},${b},${a})`;
//   ctx.stroke();
// }
// for (let j = 6, k = 100; j < 11; j++, k = k + 100) {
//   ctx.beginPath();
//   ctx.arc(600, k, 40, 0, Math.PI * 2, false);
//   ctx.strokeStyle = "blue";
//   ctx.closePath();
//   ctx.stroke();
// }

var x = 200;
var dx = 10;
var y = 200;
var dy = 10;
var radius = 50;
var h = 100;
var w = 100;
function animateion() {
  requestAnimationFrame(animateion);
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  ctx.stroke();

  if (x + radius > innerWidth || x - radius < 0) {
    dx = -dx;
  }
  if (y + radius > innerHeight || y - radius < 0) {
    dy = -dy;
  }
  x += dx;
  y += dy;
}

animateion();
