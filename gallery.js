// enter gallery
document.getElementById('enterGallery').addEventListener('click', ()=>{
  document.getElementById('flashIntro').style.display = 'none';
  document.getElementById('galleryMain').classList.remove('hidden');
});

// lightbox
const figs = document.querySelectorAll('.grid figure');
const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('lbImg');
const lbCap = document.getElementById('lbCaption');
const lbClose = document.getElementById('lbClose');

figs.forEach(f=>{
  f.addEventListener('click', ()=>{
    const img = f.querySelector('img').src;
    const cap = f.querySelector('figcaption').innerText;
    lbImg.src = img; lbCap.textContent = cap;
    lb.classList.add('show');
  });
});

lbClose.addEventListener('click', ()=> lb.classList.remove('show'));
lb.addEventListener('click', (e)=>{ if(e.target===lb) lb.classList.remove('show') });
