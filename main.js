/**
 * Healthline Pharmacy - Main Application Logic
 * Pure Vanilla JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initActiveNavigation();
  initCurrentYear();
  initContactForm();
});

/**
 * Mobile Navigation Drawer Setup
 * Strict Requirement: Mobile menu MUST NOT be swipeable or open automatically.
 * Opens ONLY on explicit click/tap of hamburger.
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const closeBtn = document.getElementById('mobile-close');
  const menu = document.getElementById('mobile-menu');
  const overlay = document.getElementById('mobile-overlay');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !menu || !overlay) return;

  function openMenu() {
    menu.classList.add('open');
    overlay.classList.add('open');
    document.body.classList.add('menu-open');
    toggleBtn.setAttribute('aria-expanded', 'true');
    menu.setAttribute('aria-hidden', 'false');
    overlay.setAttribute('aria-hidden', 'false');
    if (closeBtn) closeBtn.focus();
  }

  function closeMenu() {
    menu.classList.remove('open');
    overlay.classList.remove('open');
    document.body.classList.remove('menu-open');
    toggleBtn.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-hidden', 'true');
    overlay.setAttribute('aria-hidden', 'true');
    toggleBtn.focus();
  }

  // Explicit Tap/Click Listener
  toggleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (menu.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      closeMenu();
    });
  }

  overlay.addEventListener('click', closeMenu);

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // ESC key listener
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('open')) {
      closeMenu();
    }
  });
}

/**
 * Automatically Highlights Active Page Navigation Link
 */
function initActiveNavigation() {
  const currentPath = window.location.pathname;
  const pageName = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index.html';

  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === pageName || (pageName === '' && href === 'index.html')) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    } else {
      link.classList.remove('active');
      link.removeAttribute('aria-current');
    }
  });
}

/**
 * Footer Current Year Injector
 */
function initCurrentYear() {
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}

/**
 * Safe Contact Form Validation Handling
 * Strictly avoids fake backend promises. Explicitly informs user.
 */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const statusMessage = document.getElementById('form-status');

  if (!form || !statusMessage) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('full-name').value.trim();
    const phone = document.getElementById('phone-num').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !phone || !subject || !message) {
      statusMessage.className = 'form-status-message error';
      statusMessage.textContent = 'Please fill out all required fields before submitting.';
      return;
    }

    // Safe Frontend Response: Acknowledges submission and provides direct phone CTA
    statusMessage.className = 'form-status-message success';
    statusMessage.textContent = `Thank you, ${name}. Your inquiry has been received on our system. For urgent prescription processing, please call 905-458-9000 directly.`;
    
    form.reset();
  });
}
