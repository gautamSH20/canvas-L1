const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

ctx.fillRect(100, 100, 100, 100);
ctx.fillRect(110, 160, 100, 100);
ctx.fillRect(150, 200, 100, 100);
ctx.fillRect(200, 250, 100, 100);
