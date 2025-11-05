// ===========================
// Mobile Hamburger Menu
// ===========================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
  });
});

// ===========================
// Scroll Reveal Animations
// ===========================
const revealElements = document.querySelectorAll('.panel, .gallery-item');

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  revealElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// ===========================
// Navbar Scroll Effect
// ===========================
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===========================
// Dynamic Year in Footer
// ===========================
document.getElementById('year').textContent = new Date().getFullYear();

// ===========================
// Cinematic Gold Sparkle Threads
// ===========================
const canvas = document.createElement('canvas');
canvas.classList.add('sparkle-canvas');
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');

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
      color: rgba(255, 215, 0, ${Math.random() * 0.8 + 0.2})
    });
  }
}
initCanvas();

function draw() {
  ctx.clearRect(0, 0, w, h);
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, false);
    ctx.fillStyle = p.color;
    ctx.fill();

    p.y -= p.d / 2;
    if (p.y < -10) {
      p.y = h + 10;
      p.x = Math.random() * w;
    }
  }
  requestAnimationFrame(draw);
}
draw();

window.addEventListener('resize', initCanvas);
