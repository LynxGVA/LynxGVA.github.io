// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Back to Top Button
const backToTop = document.createElement('button');
backToTop.textContent = '↑ Top';
backToTop.style.cssText = 'display:none; position:fixed; bottom:30px; right:30px; z-index:999;';
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
  backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Fade-in Elements on Scroll
const faders = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
  faders.forEach(element => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      element.classList.add('visible');
    }
  });
});

// Light / Dark Mode Toggle
const toggleMode = document.createElement('button');
toggleMode.textContent = '🌙 Toggle Mode';
toggleMode.style.cssText = 'position:fixed; bottom:30px; left:30px; z-index:999;';
document.body.appendChild(toggleMode);

toggleMode.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Typewriter Text Effect
const typewriter = document.getElementById('typewriter');
if (typewriter) {
  const text = "Welcome to my awesome portfolio!";
  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      typewriter.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, 100);
    }
  }
  typeWriter();
}

