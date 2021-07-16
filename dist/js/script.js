const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    showModal();
});

function showModal() {
    menu.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    menu.classList.remove('active');
    document.body.style.overflow = '';
}

closeElem.addEventListener('click', () => {
    closeModal();
});


document.addEventListener('click', (e) => {
    if (e.target.classList.contains('menu__overlay')) {
        closeModal();
    }
});

const counters = document.querySelectorAll('.skills__item-percent'),
    lines = document.querySelectorAll('.skills__item-scale span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

// плавный скролл

var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    closeModal();
    return false;
});



//phpmailer
$('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
    });
    return false;
});

//show sidepanel

const sidepanel = document.querySelector('.sidepanel');

window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 900) {
        sidepanel.style.visibility = 'visible';
        sidepanel.style.opacity = 1;
    } else {
        sidepanel.style.visibility = 'hidden';
        sidepanel.style.opacity = 0;
    }
});