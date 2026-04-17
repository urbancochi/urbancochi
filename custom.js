// INTRO ANIMATION
const enterBtn = document.getElementById("enterBtn");
const intro = document.getElementById("seam-intro");
const main = document.getElementById("customMain");

if (enterBtn && intro && main) {
  enterBtn.addEventListener("click", () => {
    intro.style.opacity = "0";
    intro.style.transform = "translateY(-20px)";

    setTimeout(() => {
      intro.style.display = "none";
      main.classList.remove("hidden");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 800);
  });
}

// FORM HANDLING (REAL SUBMIT)
const form = document.querySelector(".form");

if (form) {
  form.addEventListener("submit", () => {
    const btn = form.querySelector(".btn.primary");

    if (btn) {
      btn.textContent = "Sending...";
      btn.disabled = true;
    }
  });
}
