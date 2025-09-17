document.addEventListener('DOMContentLoaded', () => {
    const navbarToggle = document.getElementById('hamburger');
    const navbarMenu = document.getElementById('navbar-links');

    // Toggle navbar menu on hamburger click
    navbarToggle.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
    });
});