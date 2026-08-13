/* =============================================================
   Civic Report — script.js
   Handles:
     1. Password show / hide toggle
     2. Mobile navbar toggle
   ============================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- 1. Password Toggle ---- */
  const passwordToggle = document.getElementById('passwordToggle');
  const passwordInput  = document.getElementById('password');
  const eyeIcon        = document.getElementById('eyeIcon');

  if (passwordToggle && passwordInput && eyeIcon) {
    passwordToggle.addEventListener('click', () => {
      const isPassword = passwordInput.type === 'password';

      // Switch input type
      passwordInput.type = isPassword ? 'text' : 'password';

      // Swap icon
      eyeIcon.className = isPassword ? 'ph ph-eye-slash' : 'ph ph-eye';

      // Update aria attributes
      passwordToggle.setAttribute('aria-label',   isPassword ? 'Hide password' : 'Show password');
      passwordToggle.setAttribute('aria-pressed',  isPassword ? 'true' : 'false');
    });
  }

  /* ---- 2. Mobile Navbar Toggle ---- */
  const navToggle = document.getElementById('navToggle');
  const navMenu   = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close menu when a link is clicked
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

});