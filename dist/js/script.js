//burger
const burger = document.querySelector("#burger");
const navMenu = document.querySelector("#nav-menu");

burger.addEventListener("click", function () {
  burger.classList.toggle("burger-active");
  navMenu.classList.toggle("nav-active");
});

//navar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixNav = header.offsetTop;
  let sections = document.querySelectorAll("section");

  if (window.pageYOffset > fixNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }

  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    if (top >= offset && top < offset + height) {
      sec.classList.add("animate-show");
    } else {
      sec.classList.remove("animate-show");
    }
  });
};
