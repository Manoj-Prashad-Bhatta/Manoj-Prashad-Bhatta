// Simple JavaScript for interaction

// Scroll to a section when a button is clicked
document.getElementById('exploreButton').addEventListener('click', function() {
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

// Optional: Add a scroll effect on the navbar to highlight the current section
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav ul li a');

  sections.forEach((section, index) => {
    if (window.scrollY >= section.offsetTop - 50) {
      navLinks.forEach(link => link.classList.remove('active'));
      navLinks[index].classList.add('active');
    }
  });
});
