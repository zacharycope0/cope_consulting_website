// Shared site behavior: mobile nav toggle + current-page highlight.
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? 'Close' : 'Menu';
    });
    links.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        links.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.textContent = 'Menu';
      });
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && links.classList.contains('is-open')) toggle.click();
    });
  }

  // Mark the nav link for the current page.
  const here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach((a) => {
    if (a.getAttribute('href') === here) a.setAttribute('aria-current', 'page');
  });

  // Contact form: submit to Formspree without leaving the page.
  // Without JS the form still posts normally and Formspree shows its own thank-you page.
  const form = document.getElementById('contact-form');
  if (form) {
    const status = form.querySelector('.form-status');
    const button = form.querySelector('button[type="submit"]');
    const label = button.textContent;
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      button.disabled = true;
      button.textContent = 'Sending...';
      status.className = 'form-status';
      status.textContent = '';
      try {
        const res = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' },
        });
        if (res.ok) {
          form.reset();
          status.classList.add('is-ok');
          status.textContent = "Thanks, got it. I'll reply within two business days.";
        } else {
          const data = await res.json().catch(() => ({}));
          const msg = data.errors ? data.errors.map((er) => er.message).join(' ') : '';
          status.classList.add('is-error');
          status.textContent = msg || 'Something went wrong. Please email zach@zachcope.com instead.';
        }
      } catch (err) {
        status.classList.add('is-error');
        status.textContent = 'Could not send. Check your connection, or email zach@zachcope.com.';
      } finally {
        button.disabled = false;
        button.textContent = label;
      }
    });
  }

  // Year in footer.
  const y = document.querySelector('[data-year]');
  if (y) y.textContent = new Date().getFullYear();
});
