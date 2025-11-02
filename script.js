// Wait for cinematic intro to finish
setTimeout(() => {
  document.getElementById("intro").style.display = "none";
  document.getElementById("main-content").classList.remove("hidden");
}, 5500);
