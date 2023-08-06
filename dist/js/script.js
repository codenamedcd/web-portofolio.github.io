//burger
const burger = document.querySelector('#burger');
const navMenu = document.querySelector('#nav-menu');

burger.addEventListener('click', function() {
    burger.classList.toggle('burger-active');
    navMenu.classList.toggle('hidden');
});

//navar fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixNav = header.offsetTop;

    if (window.pageYOffset > fixNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}

//title
function titleshow(x) {
  x.classList.toggle('sub-change');
}