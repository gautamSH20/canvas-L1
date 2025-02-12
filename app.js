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

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;

  this.radius = radius;

  this.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.stroke();
    ctx.fill();
  };
  this.update = function () {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  };
}

var cricleArray = [];

for (let i = 0; i < 100; i++) {
  var radius = 50;
  var x = Math.random() * (innerWidth - radius * 2) + radius;
  var y = Math.random() * (innerHeight - radius * 2) + radius;
  var dx = Math.random() - 0.5;
  var dy = Math.random() - 0.5;
  cricleArray.push(new Circle(x, y, dx, dy, radius));
}

console.log(cricleArray);

function animateion() {
  requestAnimationFrame(animateion);
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  for (let i = 0; i < cricleArray.length; i++) {
    cricleArray[i].update();
  }
}

animateion();
