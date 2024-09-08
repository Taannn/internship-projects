// hamburger menu logic
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

// DYNAMIC CONTENT

// header nav
const headerLinks = [
  {
    href: '#hero',
    link: 'Home'
  },
  {
    href: '#services',
    link: 'Services'
  },
  {
    href: '#features',
    link: 'Features'
  },
  {
    href: '#about',
    link: 'About'
  }
];
const headerNav = document.querySelector('.header-nav ul');
const mobileNav = document.querySelector('.mobile-nav ul');

const createNav = (links, element) => {

  const createList = (link) => {
    return  `
      <li><a href="${link.href}">${link.link}</a></li>
    `;
  }

  const navContent = `
      ${links.map(link => createList(link)).join('')}
  `;

  element.innerHTML += navContent;
};





createNav(headerLinks, headerNav);
createNav(headerLinks.concat([{
  href: '#contact',
  link: 'Contact Us'
}]), mobileNav);