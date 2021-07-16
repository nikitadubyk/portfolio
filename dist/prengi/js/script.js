$(document).ready(function(){
    $('.product__slider').slick({
        speed: 1000,

        prevArrow: '<button type="button" class="slick-prev"><img src="icons/second/arrow_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/second/arrow_right.png"></button>',


        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false,
                    speed: 500,
                }
            }
        ]
    });
});

var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});


window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__menu'),
    menuItem = document.querySelectorAll('.header__menu-item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header__menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header__menu_active');
        });
    });
});