
    const btn = document.querySelector('.navbar__hamburger');
    const menu = document.getElementById('mobile-menu');
    if (btn && menu) {
      btn.addEventListener('click', () => {
        const open = !menu.hidden;
        menu.hidden = open;
        btn.setAttribute('aria-expanded', String(!open));
      });
    }
    // Password show/hide
    document.querySelectorAll('.form__toggle-pw').forEach(toggle => {
      toggle.addEventListener('click', () => {
        const input = document.getElementById(toggle.dataset.target);
        if (!input) return;
        const show = input.type === 'password';
        input.type = show ? 'text' : 'password';
        toggle.setAttribute('aria-label', show ? 'Hide password' : 'Show password');
      });
    });