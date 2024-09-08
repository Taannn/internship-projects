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
const headerNavElement = document.querySelector('.header-nav ul');
const mobileNavElement = document.querySelector('.mobile-nav ul');
const servicesElement = document.getElementById('services');
const featuresElement = document.getElementById('features');
const tetimonialsElement = document.querySelector('.testimonials');
const footerLinksElement = document.querySelector('.footer-links ul');

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
const serviceItems = [
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
const featureItems = [
  {
    icon: 'fa-solid fa-chalkboard-user',
    title: 'Customized Solutions',
    desc: 'At Noctis Pioneering, we deliver tailored digital solutions to meet your unique business needs, ensuring alignment with your goals for a competitive edge.'
  },
  {
    icon: 'fa-solid fa-microchip',
    title: 'Innovative Technology',
    desc: 'We use cutting-edge technologies to build robust, scalable, and future-proof solutions, keeping your business at the forefront of digital innovation.'
  },
  {
    icon: 'fa-solid fa-users',
    title: 'Client-Centric Approach',
    desc: 'Our client-centric approach ensures transparent communication, dedicated support, and collaborative partnerships, exceeding your expectations every step of the way..'
  }
];
const testimonialItems = [
  {
    class: 'first-review',
    img: './assets/images/emily.jpg',
    alt: 'Emily Clark',
    name: 'Emily Clark',
    role: 'Marketing Manager',
    desc: '"Noctis Pioneering transformed our online presence with their exceptional UI/UX design. Our customers love the new interface, and it has significantly improved our user engagement."'
  },
  {
    class: 'second-review',
    img: './assets/images/james.jpg',
    alt: 'James Smith',
    name: 'James Smith',
    role: 'CEO, Tech Solutions Inc.',
    desc: '"We partnered with Noctis Pioneering for app development, and they exceeded our expectations. Their expertise and dedication helped us launch a high-performing app that has boosted our business growth."'
  },
  {
    class: 'third-review',
    img: './assets/images/sara.jpg',
    alt: 'Sarah Johnson',
    name: 'Sarah Johnson',
    role: 'Digital Strategist',
    desc: '"Noctis Pioneering transformed our online presence with their exceptional UI/UX design. Our customers love the new interface, and it has significantly improved our user engagement."'
  },
  {
    class: 'fourth-review',
    img: './assets/images/michael.jpg',
    alt: 'Michael Lee',
    name: 'Michael Lee',
    role: 'Startup Founder',
    desc: '"Noctis Pioneering&quot;s programming team is top-notch. They created a scalable backend solution for our platform, allowing us to handle increased traffic and scale our business rapidly."'
  },
  {
    class: 'fifth-review',
    img: './assets/images/alexandra.jpg',
    alt: 'Alexandra White',
    name: 'Alexandra White',
    role: 'Creative Director',
    desc: '"Working with Noctis Pioneering on our website redesign was a breeze. They listened to our vision and delivered a stunning website that perfectly represents our brand."'
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
  const servicesContent = services.map(service => createService(service)).join('');

  element.innerHTML += servicesContent;
};
const createFeatures = (features, element) => {
  const createFeature = (feature) => {
    return `
      <div class="feature">
        <div class="feature-title">
          <i class="${feature.icon}"></i><p>${feature.title}</p>
        </div>
        <p>${feature.desc}</p>
      </div>
    `;
  }
  const featuresContent = `
    <h1>Features</h1>
    <div class="container alignment">
      ${features.map(feature => createFeature(feature)).join('')}
    </div>
  `;

  element.innerHTML += featuresContent;
};
const createTestimonials = (testimonials, element) => {
  const createTestimonial = (testimonial) => {
    return `
    <div class="${testimonial.class}">
      <div class="testimonial-avatar flex">
        <div class="testimonial-image"><img src="${testimonial.img}" alt="${testimonial.alt}"></div>
        <div class="testimonial-info">
          <p>${testimonial.name}</p>
          <span>${testimonial.role}</span>
        </div>
      </div>
      <p class="testimonial-comment">${testimonial.desc}</p>
    </div>
  `;
  }
  const testimonialsContent = testimonials.map(testimonial => createTestimonial(testimonial)).join('');

  element.innerHTML += testimonialsContent;
};

// created content
createNav(headerLinks, headerNavElement);
createNav(headerLinks.concat([{
  href: '#contact',
  link: 'Contact Us'
}]), mobileNavElement);
createNav(headerLinks.concat([{
  href: '#contact',
  link: 'Contact'
}]), footerLinksElement);
createServices(serviceItems, servicesElement);
createFeatures(featureItems, featuresElement);
createTestimonials(testimonialItems, tetimonialsElement);