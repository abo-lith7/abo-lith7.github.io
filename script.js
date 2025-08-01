// script.js - تحريك فقاعات آراء الجمهور من اليمين لليسار
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".testimonial-bubbles");
  if (container) {
    container.style.animation = "scroll-left 25s linear infinite";
  }
});
