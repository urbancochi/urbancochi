// ===========================
// MOBILE MENU
// ===========================
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      hamburger.classList.remove("active");
    });
  });
}

// ===========================
// SCROLL REVEAL
// ===========================
const revealElements = document.querySelectorAll(".panel, .gallery-item");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// ===========================
// NAVBAR SCROLL EFFECT
// ===========================
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (navbar) {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  }
});

// ===========================
// FOOTER YEAR
// ===========================
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// ===========================
// SPARKLE EFFECT
// ===========================
const canvas = document.createElement("canvas");
canvas.classList.add("sparkle-canvas");
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

let w, h, particles;

function initCanvas() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;

  particles = [];

  for (let i = 0; i < 60; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.5 + 0.5,
      d: Math.random() * 2,
      color: `rgba(255, 215, 0, ${Math.random() * 0.8 + 0.2})`
    });
  }
}

function draw() {
  ctx.clearRect(0, 0, w, h);

  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();

    p.y -= p.d / 2;

    if (p.y < -10) {
      p.y = h + 10;
      p.x = Math.random() * w;
    }
  });

  requestAnimationFrame(draw);
}

initCanvas();
draw();

window.addEventListener("resize", initCanvas);
