const menu = document.querySelector('.hamburger');
const icon = document.querySelector('.hamburger i');
const mobileNav = document.querySelector('.mobile-nav');
let toggle = false;

menu.addEventListener("click", () => {
  toggle = !toggle;
  if (toggle){
    icon.classList.replace('fa-bars', 'fa-xmark');
    mobileNav.classList.add('visible');
    mobileNav.classList.remove('hidden');
  } else {
    icon.classList.replace('fa-xmark', 'fa-bars');
    mobileNav.classList.add('hidden');
    mobileNav.classList.remove('visible');
  }
});