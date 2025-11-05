// ✅ Mobile Menu Toggle
function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('active');
}

// ✅ Reveal on Scroll
window.addEventListener('scroll', () => {
  document.querySelectorAll('.reveal').forEach(el => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (top < windowHeight - 100) el.classList.add('active');
  });
});

// ✅ Year Update
document.getElementById('year').textContent = new Date().getFullYear();
