// ─── Scroll-based nav background ─────────────────────────────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ─── Mobile nav toggle ───────────────────────────────────────────────────────
function toggleNav() {
    document.querySelector('.nav-links').classList.toggle('open');
}

// Close mobile nav on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('open');
    });
});

// ─── Intersection Observer for fade-in animations ────────────────────────────
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

// Observe feature cards, steps, tech items
document.querySelectorAll('.feature-card, .step, .tech-item, .demo-showcase, .download-card').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// ─── Smooth scroll for anchor links ──────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
