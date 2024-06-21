const menu = document.getElementById('menu');
const close = document.querySelector('#menu i');
const nav = document.querySelector('.mobile-nav');
let toggle = false;

menu.addEventListener("click", () => {
  toggle = !toggle;
  if (toggle){
    close.classList.replace('fa-bars', 'fa-xmark');
    nav.classList.add('show');
    nav.classList.remove('hidden');
  } else {
    close.classList.replace('fa-xmark', 'fa-bars');
    nav.classList.add('hidden');
    nav.classList.remove('show');
  }
});