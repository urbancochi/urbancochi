// handle seam intro + reveal
document.getElementById('enterBtn').addEventListener('click', () => {
  const intro = document.getElementById('seam-intro');
  intro.style.opacity = '0';
  intro.style.transform = 'translateY(-20px)';
  setTimeout(()=> {
    intro.style.display = 'none';
    document.getElementById('customMain').classList.remove('hidden');
    window.scrollTo({top:0,behavior:'smooth'});
  },900);
});

// small client-side form feedback (no backend)
document.getElementById('customForm')?.addEventListener('submit', (e)=>{
  e.preventDefault();
  const btn = document.querySelector('.btn.primary');
  btn.textContent = 'Sending...';
  btn.disabled = true;
  // fake send
  setTimeout(()=>{
    btn.textContent = 'Request Sent';
    btn.style.background = '#fff';
    btn.style.color = '#000';
    alert('Thank you! We received your request. Our team will contact you shortly.');
    btn.disabled = false;
  },1200);
});
