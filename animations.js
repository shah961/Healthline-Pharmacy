/**
 * Healthline Pharmacy - Animation Controller
 * Ultra-performant, zero-dependency animations respecting user preferences
 */

document.addEventListener('DOMContentLoaded', () => {
  // Check if reduced motion is preferred by user
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (!prefersReducedMotion) {
    initScrollHeaderEffect();
    initCardHoverEffects();
  }
});

/**
 * Adds slight shadow elevation on sticky header during scroll
 */
function initScrollHeaderEffect() {
  const header = document.getElementById('site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.style.boxShadow = '0 4px 12px rgba(2, 75, 64, 0.08)';
    } else {
      header.style.boxShadow = 'none';
    }
  }, { passive: true });
}

/**
 * Subtle Hover Elevations for Luxury Cards
 */
function initCardHoverEffects() {
  const cards = document.querySelectorAll('.card, .service-card, .trust-card');

  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-2px)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
    });
  });
}
