/* ==========================================================================
   HEALTHLINE PHARMACY - GLOBAL STYLESHEET
   Design Language: Luxury + Healthcare + Trust + Modern Technology
   Color Palette: Deep Forest Emerald, Clean White, Emerald Teal Accent
   ========================================================================== */

:root {
  --color-primary: #024B40;        /* Deep Sophisticated Emerald */
  --color-primary-dark: #01352D;   /* Darker Shade for Hover States */
  --color-accent: #00C9A7;        /* Energetic Clinical Teal */
  --color-accent-light: #E6F9F5;  /* Soft Tint Background */
  --color-surface: #FFFFFF;       /* Clean White Surface */
  --color-bg-light: #F8FAF9;      /* Off-white Background */
  --color-text-main: #1A2E2B;     /* High Contrast Dark Slate */
  --color-text-muted: #526662;    /* Readable Subdued Slate */
  --color-border: #E1E8E6;        /* Fine Luxury Border */
  --color-border-dark: #C4D1CE;
  --color-error: #D32F2F;
  --color-success: #2E7D32;

  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  
  --shadow-sm: 0 2px 4px rgba(2, 75, 64, 0.04);
  --shadow-md: 0 4px 12px rgba(2, 75, 64, 0.08);
  --shadow-lg: 0 12px 28px rgba(2, 75, 64, 0.12);

  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;

  --transition-fast: 0.2s ease;
  --transition-normal: 0.3s ease;
}

/* Hard reset & Strict Viewport Containment */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 100%;
  scroll-behavior: smooth;
  overflow-x: hidden;
  max-width: 100%;
}

body {
  font-family: var(--font-family);
  font-size: 1rem;
  line-height: 1.6;
  color: var(--color-text-main);
  background-color: var(--color-surface);
  overflow-x: hidden;
  max-width: 100%;
  -webkit-font-smoothing: antialiased;
}

/* Accessibility Focus States */
:focus-visible {
  outline: 3px solid var(--color-accent);
  outline-offset: 3px;
}

.skip-link {
  position: absolute;
  top: -100px;
  left: 1rem;
  background: var(--color-primary);
  color: white;
  padding: 0.75rem 1.25rem;
  z-index: 9999;
  border-radius: var(--radius-sm);
  text-decoration: none;
  transition: top var(--transition-fast);
}

.skip-link:focus {
  top: 1rem;
}

/* Containers & Grids */
.container {
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}

.grid {
  display: grid;
  gap: 2rem;
}

.grid-2 { grid-template-columns: 1fr; }
.grid-3 { grid-template-columns: 1fr; }

@media (min-width: 768px) {
  .grid-2 { grid-template-columns: repeat(2, 1fr); }
  .grid-3 { grid-template-columns: repeat(3, 1fr); }
}

.align-center { align-items: center; }
.text-center { text-align: center; }
.justify-center { justify-content: center; }
.margin-auto { margin-left: auto; margin-right: auto; }

.max-width-600 { max-width: 600px; }
.max-width-700 { max-width: 700px; }

/* Typography Hierarchy */
h1, h2, h3, h4 {
  color: var(--color-primary);
  font-weight: 700;
  line-height: 1.25;
  margin-bottom: 1rem;
  letter-spacing: -0.01em;
}

h1 { font-size: 2.25rem; }
h2 { font-size: 1.75rem; }
h3 { font-size: 1.35rem; }
h4 { font-size: 1.1rem; }

@media (min-width: 768px) {
  h1 { font-size: 3rem; }
  h2 { font-size: 2.25rem; }
  h3 { font-size: 1.5rem; }
}

p {
  margin-bottom: 1rem;
  color: var(--color-text-muted);
}

p.lead-text {
  font-size: 1.15rem;
  color: var(--color-text-main);
  font-weight: 500;
}

a {
  color: var(--color-primary);
  text-decoration: underline;
  transition: color var(--transition-fast);
}

a:hover {
  color: var(--color-accent);
}

/* Buttons & Interactive Elements */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.85rem 1.75rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: var(--radius-sm);
  text-decoration: none;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all var(--transition-fast);
}

.btn-primary {
  background-color: var(--color-primary);
  color: white;
}

.btn-primary:hover {
  background-color: var(--color-primary-dark);
  color: white;
  transform: translateY(-1px);
}

.btn-secondary {
  background-color: var(--color-accent-light);
  color: var(--color-primary);
  border-color: var(--color-border);
}

.btn-secondary:hover {
  background-color: var(--color-accent);
  color: white;
  border-color: var(--color-accent);
}

.btn-outline {
  background-color: transparent;
  color: var(--color-primary);
  border-color: var(--color-primary);
}

.btn-outline:hover {
  background-color: var(--color-primary);
  color: white;
}

.btn-sm {
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
}

.btn-lg {
  padding: 1rem 2.25rem;
  font-size: 1.1rem;
}

.btn-block {
  width: 100%;
}

.btn-group {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

/* Announcement Bar */
.announcement-bar {
  background-color: var(--color-primary-dark);
  color: white;
  padding: 0.4rem 0;
  font-size: 0.85rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.announcement-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
}

.announcement-bar a {
  color: var(--color-accent);
  text-decoration: none;
  font-weight: 600;
}

/* Sticky Header */
.site-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--color-border);
  transition: box-shadow var(--transition-fast);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}

.brand-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
}

.brand-text {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-primary);
}

.brand-text span {
  color: var(--color-accent);
}

.desktop-nav {
  display: none;
}

@media (min-width: 900px) {
  .desktop-nav { display: block; }
}

.nav-list {
  display: flex;
  list-style: none;
  gap: 1.75rem;
}

.nav-link {
  text-decoration: none;
  color: var(--color-text-main);
  font-weight: 500;
  font-size: 0.95rem;
  padding: 0.5rem 0;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--color-accent);
  transition: width var(--transition-fast);
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}

.nav-link.active {
  color: var(--color-primary);
  font-weight: 700;
}

.header-cta-group {
  display: flex;
  align-items: center;
  gap: 1rem;
}

/* Mobile Hamburger Toggle */
.mobile-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

@media (min-width: 900px) {
  .mobile-toggle { display: none; }
}

.hamburger-box {
  width: 24px;
  height: 18px;
  position: relative;
  display: inline-block;
}

.hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {
  width: 24px;
  height: 2px;
  background-color: var(--color-primary);
  position: absolute;
  transition: transform var(--transition-fast);
}

.hamburger-inner { top: 50%; transform: translateY(-50%); }
.hamburger-inner::before { content: ''; top: -7px; left: 0; }
.hamburger-inner::after { content: ''; top: 7px; left: 0; }

/* Mobile Menu Overlay Drawer (STRICTLY TAP ONLY) */
.mobile-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1050;
  opacity: 0;
  visibility: hidden;
  transition: opacity var(--transition-normal), visibility var(--transition-normal);
}

.mobile-menu {
  position: fixed;
  top: 0;
  right: -100%; /* Fully off-screen by default */
  width: 85%;
  max-width: 380px;
  height: 100%;
  background-color: var(--color-surface);
  z-index: 1100;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-lg);
  transition: right var(--transition-normal);
}

.mobile-menu.open {
  right: 0;
}

.mobile-overlay.open {
  opacity: 1;
  visibility: visible;
}

.mobile-menu-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--color-border);
  margin-bottom: 1.5rem;
}

.mobile-close {
  background: none;
  border: none;
  font-size: 2rem;
  color: var(--color-primary);
  cursor: pointer;
}

.mobile-nav-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.mobile-nav-link {
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--color-text-main);
  text-decoration: none;
}

.mobile-nav-link.active {
  color: var(--color-primary);
  border-left: 3px solid var(--color-accent);
  padding-left: 0.5rem;
}

.mobile-menu-footer {
  margin-top: auto;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-border);
}

.mobile-hours-text {
  font-size: 0.85rem;
  text-align: center;
  margin-top: 0.75rem;
  color: var(--color-text-muted);
}

/* Body Scroll Lock */
body.menu-open {
  overflow: hidden;
}

/* Hero Section */
.hero-section {
  padding: 3.5rem 0;
  background: linear-gradient(180deg, var(--color-accent-light) 0%, var(--color-surface) 100%);
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  align-items: center;
}

@media (min-width: 900px) {
  .hero-grid { grid-template-columns: 1.2fr 0.8fr; }
}

.badge-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  padding: 0.35rem 0.85rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: 1.25rem;
}

.badge-dot {
  width: 8px;
  height: 8px;
  background-color: var(--color-accent);
  border-radius: 50%;
}

.hero-title {
  margin-bottom: 1.25rem;
}

.hero-subtitle {
  font-size: 1.15rem;
  margin-bottom: 2rem;
  color: var(--color-text-muted);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
}

.hero-quick-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: var(--color-text-muted);
  border-top: 1px solid var(--color-border);
  padding-top: 1rem;
}

/* Hero Graphic Illustration Container */
.hero-visual {
  width: 100%;
  display: flex;
  justify-content: center;
}

.hero-card-graphic {
  width: 100%;
  max-width: 400px;
  background: white;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--color-border);
  overflow: hidden;
}

.hero-svg-illustration {
  width: 100%;
  height: auto;
  display: block;
}

/* Trust Bar Section */
.trust-bar-section {
  padding: 2.5rem 0;
  border-bottom: 1px solid var(--color-border);
  background-color: var(--color-surface);
}

.trust-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}

.trust-card {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
}

.trust-icon {
  font-size: 2rem;
  line-height: 1;
}

.trust-text h3 {
  font-size: 1.05rem;
  margin-bottom: 0.25rem;
}

.trust-text p {
  font-size: 0.85rem;
  margin-bottom: 0;
}

/* Section Framework */
.section {
  padding: 4rem 0;
}

.section-tag {
  display: inline-block;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-accent);
  margin-bottom: 0.5rem;
}

.section-header {
  margin-bottom: 3rem;
}

.bg-light { background-color: var(--color-bg-light); }
.bg-primary { background-color: var(--color-primary); }
.text-white { color: white; }
.text-white-80 { color: rgba(255, 255, 255, 0.8); }
.bg-white-10 { background-color: rgba(255, 255, 255, 0.1); }

/* Cards & Components */
.card {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 2rem;
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);
}

.card:hover {
  box-shadow: var(--shadow-md);
}

.card-accent-border {
  border-left: 4px solid var(--color-primary);
}

.card-accent-top {
  border-top: 4px solid var(--color-accent);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.75rem;
}

.service-card {
  background: white;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
}

.service-card-icon {
  font-size: 2.25rem;
  margin-bottom: 1rem;
}

.service-card p {
  flex-grow: 1;
}

.card-link {
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  margin-top: 1rem;
}

/* Lists & Tables */
.feature-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.feature-list li {
  position: relative;
  padding-left: 1.5rem;
  font-size: 0.95rem;
}

.feature-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--color-accent);
  font-weight: bold;
}

.hours-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;
}

.hours-table tr {
  border-bottom: 1px solid var(--color-border);
}

.hours-table td {
  padding: 0.75rem 0;
}

.hours-table td:last-child {
  text-align: right;
  font-weight: 600;
}

.badge-closed {
  background-color: var(--color-border);
  color: var(--color-text-muted);
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
}

/* Service Detail Cards (Services Page) */
.service-detail-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.service-detail-card {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 2rem;
  border-left: 4px solid var(--color-primary);
}

.service-header-inline {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.service-num {
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--color-accent);
  background: var(--color-accent-light);
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-sm);
}

/* Contact & Info Blocks */
.contact-info-block {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-top: 1.5rem;
}

.info-line {
  font-size: 1rem;
}

.phone-link {
  font-size: 1.35rem;
  font-weight: 700;
  text-decoration: none;
}

/* Forms */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-top: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.form-group label {
  font-size: 0.9rem;
  font-weight: 600;
}

.required { color: var(--color-error); }

.form-control {
  width: 100%;
  padding: 0.8rem;
  font-size: 1rem;
  font-family: inherit;
  border: 1px solid var(--color-border-dark);
  border-radius: var(--radius-sm);
  background-color: white;
}

.form-control:focus {
  border-color: var(--color-primary);
  outline: none;
}

.security-warning-box {
  background-color: #FFF8E1;
  border-left: 3px solid #FFA000;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border-radius: 4px;
}

.form-status-message {
  padding: 0.75rem;
  border-radius: var(--radius-sm);
  font-weight: 600;
  display: none;
}

.form-status-message.success {
  display: block;
  background-color: #E8F5E9;
  color: var(--color-success);
  border: 1px solid #A5D6A7;
}

.form-status-message.error {
  display: block;
  background-color: #FFEBEE;
  color: var(--color-error);
  border: 1px solid #FFCDD2;
}

/* Page Headers & Breadcrumbs */
.page-header {
  background-color: var(--color-accent-light);
  padding: 3rem 0;
  border-bottom: 1px solid var(--color-border);
}

.page-subtitle {
  font-size: 1.15rem;
  margin-bottom: 0;
}

.breadcrumb-list {
  display: flex;
  list-style: none;
  gap: 0.5rem;
  font-size: 0.85rem;
  margin-bottom: 1rem;
}

.breadcrumb-list li::after {
  content: '/';
  margin-left: 0.5rem;
  color: var(--color-text-muted);
}

.breadcrumb-list li:last-child::after { content: ''; }

.notice-box {
  background-color: var(--color-accent-light);
  border: 1px solid var(--color-border);
  padding: 1.25rem;
  border-radius: var(--radius-md);
}

/* Legal Content Page Styling */
.legal-content h2 {
  margin-top: 2rem;
  font-size: 1.35rem;
}

/* Disclaimers & Footer */
.disclaimer-section {
  background-color: var(--color-bg-light);
  padding: 1.5rem 0;
  font-size: 0.85rem;
  color: var(--color-text-muted);
  border-top: 1px solid var(--color-border);
}

.site-footer {
  background-color: var(--color-primary-dark);
  color: white;
  padding: 4rem 0 2rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
}

@media (min-width: 768px) {
  .footer-grid { grid-template-columns: 1.5fr 1fr 1fr 1fr; }
}

.footer-col h4 {
  color: white;
  margin-bottom: 1.25rem;
}

.footer-col p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
}

.footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.9rem;
}

.footer-links a:hover {
  color: var(--color-accent);
}

.footer-address {
  font-style: normal;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
}

.footer-address a {
  color: var(--color-accent);
}

.copyright-text {
  margin-top: 2rem;
  font-size: 0.8rem;
}

/* Helper Spacers & 404 */
.spacer-xs { height: 0.75rem; }
.spacer-sm { height: 1.5rem; }
.spacer-md { height: 2.5rem; }

.error-code {
  font-size: 5rem;
  font-weight: 900;
  color: var(--color-accent);
  line-height: 1;
  display: block;
}

.min-height-600 { min-height: 60vh; }
.center-content { display: flex; align-items: center; }

/* Print Styles */
@media print {
  .site-header, .announcement-bar, .mobile-menu, .site-footer, .btn {
    display: none !important;
  }
  body {
    background: white;
    color: black;
  }
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
