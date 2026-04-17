// ENTER GALLERY
const enterBtn = document.getElementById("enterGallery");
const intro = document.getElementById("flashIntro");
const main = document.getElementById("galleryMain");

if (enterBtn && intro && main) {
  enterBtn.addEventListener("click", () => {
    intro.style.display = "none";
    main.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// LIGHTBOX
const figures = document.querySelectorAll(".grid figure");
const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lbImg");
const lbCap = document.getElementById("lbCaption");
const lbClose = document.getElementById("lbClose");

if (figures.length && lightbox && lbImg) {
  figures.forEach(fig => {
    fig.addEventListener("click", () => {
      const img = fig.querySelector("img");
      const cap = fig.querySelector("figcaption");

      lbImg.src = img.src;
      lbCap.textContent = cap ? cap.textContent : "";

      lightbox.classList.add("show");
    });
  });
}

// CLOSE BUTTON
if (lbClose) {
  lbClose.addEventListener("click", () => {
    lightbox.classList.remove("show");
  });
}

// CLICK OUTSIDE CLOSE
if (lightbox) {
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove("show");
    }
  });
}

// ESC KEY CLOSE (pro touch 🔥)
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    lightbox.classList.remove("show");
  }
});
