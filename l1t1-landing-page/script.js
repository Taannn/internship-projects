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
// elements
const headerNav = document.querySelector('.header-nav ul');
const mobileNav = document.querySelector('.mobile-nav ul');
const servicesElement = document.getElementById('services');

// arrays of info
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
const services = [
  {
    img: './assets/images/day94-ui-ux.png',
    alt: 'UI/UX Design Image',
    title: 'UI / UX Design',
    desc1: 'Transform your digital presence with our expert UI/UX design. We prioritize user needs and preferences to craft interfaces that are not only beautiful but also highly functional and easy to navigate.',
    desc2: 'At Noctis Pioneering, we create intuitive and visually stunning user interfaces that enhance user experience. Our UI/UX design services focus on delivering seamless, user-centric designs that engage and delight your audience.'
  },
  {
    img: './assets/images/day95-app-development.png',
    alt: 'App Development Image',
    title: 'App Development',
    desc1: 'Bring your app ideas to life with Noctis Pioneering. We develop custom mobile and web applications tailored to your unique requirements, delivering exceptional user experiences and driving business growth.',
    desc2: 'Our app development team at Noctis Pioneering specializes in creating robust, scalable, and high-performance applications. From concept to deployment, we ensure your app meets your business objectives and exceeds user expectations.'
  },
  {
    img: './assets/images/day93-programing.png',
    alt: 'Programming Image',
    title: 'Programming',
    desc1: 'Elevate your technology with our professional programming services. Whether you need backend development, API integration, or custom software solutions, our team ensures your systems run smoothly and efficiently.',
    desc2: 'At Noctis Pioneering, our programming experts deliver high-quality, efficient code to power your software solutions. We specialize in various programming languages and frameworks to build reliable, scalable, and maintainable software.'
  }
];

// functions for dynamic content creation
const createNav = (links, element) => {
  const createList = (link) => {
    return  `
      <li><a href="${link.href}">${link.link}</a></li>
    `;
  }
  const navContent = links.map(link => createList(link)).join('');

  element.innerHTML += navContent;
};
const createServices = (services, element) => {
  const createService = (service) => {
    return `
      <div class="container one-two-block">
        <div class="service-image">
          <img src="${service.img}" alt="${service.alt}">
        </div>
        <div class="service-text">
          <h1>${service.title}</h1>
          <p>${service.desc1}</p>
          <p>${service.desc2}</p>
        </div>
      </div>
    `;
  }
  const serviceContent = services.map(service => createService(service)).join('');

  element.innerHTML += serviceContent;
};





createNav(headerLinks, headerNav);
createNav(headerLinks.concat([{
  href: '#contact',
  link: 'Contact Us'
}]), mobileNav);
createServices(services, servicesElement);