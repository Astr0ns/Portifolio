const btnToggle = document.getElementById('toggle-theme');
const body = document.body;
const style = document.getElementById('css-link');

btnToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    btnToggle.classList.toggle('dark');
    
    if (body.classList.contains('dark')) {
        style.setAttribute('href', 'dark.css');
        localStorage.setItem('theme', 'dark');
    } else {
        style.setAttribute('href', 'light.css');
        localStorage.setItem('theme', 'light');
    }
});

const theme = localStorage.getItem('theme');
if (theme === 'dark') {
    body.classList.add('dark');
    btnToggle.classList.add('dark');
    style.setAttribute('href', 'dark.css');
}