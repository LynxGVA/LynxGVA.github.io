document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

const backToTop = document.createElement('button');
backToTop.type = 'button';
backToTop.textContent = 'Top';
backToTop.style.cssText = 'display:none; position:fixed; bottom:24px; right:24px; z-index:999; padding:10px 12px; border-radius:10px; border:1px solid rgba(0,0,0,0.2); background:#fff; cursor:pointer;';
document.body.appendChild(backToTop);

const toggleBackToTop = () => {
  backToTop.style.display = window.scrollY > 400 ? 'block' : 'none';
};

window.addEventListener('scroll', toggleBackToTop, { passive: true });
toggleBackToTop();

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
