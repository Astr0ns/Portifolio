function trocarCSS() {
  const themeToggle = document.querySelector('#theme-toggle');
  const body = document.querySelector('body');

  if (themeToggle.checked) {
    body.classList.add('dark');
  } else {
    body.classList.remove('dark');
  }
}
