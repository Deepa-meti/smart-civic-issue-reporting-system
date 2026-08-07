// Mobile hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const header = document.querySelector('.site-header');
 
if (hamburger && header) {
  hamburger.addEventListener('click', () => {
    header.classList.toggle('menu-open');
  });
}
 
// Back to top button
const toTop = document.getElementById('toTop');
if (toTop) {
  toTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
 