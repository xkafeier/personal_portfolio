const navbar = document.getElementById('navbar');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

navbar.addEventListener('click', () => {
    sidebar.classList.add('open');
    overlay.classList.add('open');
});

overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
});