// Swiper HERO-BLOCK
document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper-container', {
        speed: 1500,
        loop: true,
        autoplay: {
            delay: 1800
        },
    });
});

const element = document.querySelector('#choices');
const choices = new Choices(element, {
    searchEnabled: false,
    classNames: {
        containerOuter: 'choices header_choices',
    },
    shouldSort: false
});

// Swiper GALLERY 
document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper-container-s2', {
        speed: 1500,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
    });
});