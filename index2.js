const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
  const isLight = document.body.classList.toggle('light-mode');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

// On page load - read theme from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  document.body.classList.add('light-mode');
} else {
  document.body.classList.remove('light-mode');
}