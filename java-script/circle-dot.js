
const canvas = document.getElementById("circle-canvas");
const ctx = canvas.getContext("2d");

canvas.width = 400 * devicePixelRatio;
canvas.height = 400 * devicePixelRatio;

/*
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 220;

function drawDot(angle) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "white";
  ctx.lineWidth = 1;

  // Circle outline (optional)
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
  ctx.stroke();

  // Dot position
  const x = centerX + radius * Math.cos(angle);
  const y = centerY + radius * Math.sin(angle);

  ctx.fillStyle = "white";

  ctx.beginPath();
  ctx.arc(x, y, 5, 0, Math.PI * 2);
  ctx.fill();
}

function onScroll() {
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const scrollFraction = window.scrollY / maxScroll;

  // Map scroll [0 → 1] to angle [0 → 2π]
  const angle = scrollFraction * Math.PI * 2;

  drawDot(angle);
}

window.addEventListener("scroll", onScroll);

// Draw once at start
onScroll();
*/

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 180;

let lastScrollY = window.scrollY;
let totalScroll = 0; // this will always increase

function drawDot(angle) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Circle
  ctx.strokeStyle = "white";
  ctx.lineWidth = 2;

  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
  ctx.stroke();

  // Dot
  const x = centerX + radius * Math.cos(angle);
  const y = centerY + radius * Math.sin(angle);

  ctx.fillStyle = "white";
  ctx.strokeStyle = "white";
  ctx.lineWidth = 4;

  ctx.beginPath();
  ctx.arc(x, y, 5, 0, Math.PI * 2);
  ctx.stroke();
  ctx.fill();

  ctx.strokeStyle = "white";
  ctx.lineWidth = 2;

  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.lineTo(x,y);
  ctx.stroke();
}

function onScroll() {
  const currentScroll = window.scrollY;
  const delta = Math.max(currentScroll - lastScrollY, 0); // only positive
  totalScroll += delta;

  // Map totalScroll to angle (adjust speed factor)
  const angle = (totalScroll / 5) * 0.1; // tweak 0.02 for speed

  drawDot(angle);
  lastScrollY = currentScroll;
}

window.addEventListener("scroll", onScroll);
onScroll();