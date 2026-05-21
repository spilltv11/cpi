// Mobile nav toggle — toggles .open on .nav-inner to reveal links + CTA
const navToggle = document.getElementById('navToggle');
const navInner = document.querySelector('.nav-inner');

if (navToggle && navInner) {
  navToggle.addEventListener('click', () => navInner.classList.toggle('open'));
  navInner.querySelectorAll('.primary-nav a, .btn-pill').forEach(a =>
    a.addEventListener('click', () => navInner.classList.remove('open'))
  );
}

// Subtle reveal-on-scroll for cards/items
const revealEls = document.querySelectorAll(
  '.demand, .checklist li, .mission-card, .poster-frame, .vi-art, .contact-form'
);
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity .55s ease, transform .55s ease';
  io.observe(el);
});
