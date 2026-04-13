window.location.href = "solar.html";function go(p) {
  document.body.style.transition = "0.3s";
  document.body.style.opacity = "0";

  setTimeout(() => {
    window.location.href = p + ".html";
  }, 300);
}function goHome() {
  document.body.style.transition = "0.3s";
  document.body.style.opacity = "0";

  setTimeout(() => {
    window.location.href = "index.html";
  }, 300);
}function go(p) {
  document.body.style.transition = "0.5s ease";
  document.body.style.transform = "scale(1.2)";
  document.body.style.opacity = "0";

  setTimeout(() => {
    window.location.href = p + ".html";
  }, 500);
}