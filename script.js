// Shared nav dropdown + tap-to-reveal behavior. Click-based so it works on tap, not just hover.
document.addEventListener('DOMContentLoaded', () => {
  const openReveals = new Set();
  const openDropdowns = new Set();

  function closeReveal(trigger) {
    trigger.closest('.reveal').classList.remove('is-open');
    trigger.setAttribute('aria-expanded', 'false');
    openReveals.delete(trigger);
  }

  function closeDropdown(toggle) {
    const dropdown = document.getElementById(toggle.getAttribute('aria-controls'));
    if (dropdown) dropdown.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    openDropdowns.delete(toggle);
  }

  document.querySelectorAll('.reveal-trigger').forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = trigger.closest('.reveal').classList.contains('is-open');
      openReveals.forEach(closeReveal);
      if (!isOpen) {
        trigger.closest('.reveal').classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
        openReveals.add(trigger);
      }
    });
  });

  document.querySelectorAll('[data-dropdown-toggle]').forEach((toggle) => {
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const dropdown = document.getElementById(toggle.getAttribute('aria-controls'));
      const isOpen = dropdown.classList.contains('is-open');
      openDropdowns.forEach(closeDropdown);
      if (!isOpen) {
        dropdown.classList.add('is-open');
        toggle.setAttribute('aria-expanded', 'true');
        openDropdowns.add(toggle);
      }
    });
  });

  document.addEventListener('click', () => {
    openReveals.forEach(closeReveal);
    openDropdowns.forEach(closeDropdown);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      openReveals.forEach(closeReveal);
      openDropdowns.forEach(closeDropdown);
    }
  });
});
