// script.js

// زر تغيير اللغة
function toggleLanguage() {
  const elementsAr = document.querySelectorAll('.ar');
  const elementsEn = document.querySelectorAll('.en');
  elementsAr.forEach(el => el.style.display = el.style.display === 'none' ? 'block' : 'none');
  elementsEn.forEach(el => el.style.display = el.style.display === 'none' ? 'block' : 'none');
}

// فقاعات آراء الجمهور
function startTestimonials() {
  const container = document.querySelector('.testimonial-bubbles');
  const testimonials = container.querySelectorAll('.bubble');
  let index = 0;

  setInterval(() => {
    testimonials.forEach((el, i) => {
      el.style.opacity = i === index ? '1' : '0';
      el.style.transform = i === index ? 'scale(1)' : 'scale(0.9)';
    });
    index = (index + 1) % testimonials.length;
  }, 5000);
}

// عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
  startTestimonials();
});
