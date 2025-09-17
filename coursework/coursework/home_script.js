document.addEventListener('DOMContentLoaded', () => {
    const navbarToggle = document.getElementById('hamburger');
    const navbarMenu = document.getElementById('navbar-links');

    // Toggle navbar menu on hamburger click
    navbarToggle.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.carousel-item');
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    
    let currentIndex = 0;

    function updateCarousel() {
        const itemWidth = items[0].clientWidth;
        track.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
    }

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    });
});

// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

// Smooth Scroll Effect
scrollToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling effect
    });
});
