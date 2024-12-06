/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');
const navList = document.getElementById('navbar__list');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
const isInViewport = (section) => {
    const rect = section.getBoundingClientRect();
    return rect.top >= 0 && rect.top < 300;
  };


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const buildNav = () => {
    sections.forEach((section) => {
      const sectionId = section.id;
      const sectionDataNav = section.getAttribute('data-nav');
      const listItem = document.createElement('li');
      listItem.innerHTML = `<a href="#${sectionId}" class="menu__link">${sectionDataNav}</a>`;
      navList.appendChild(listItem);
    });
  };

// Add class 'active' to section when near top of viewport
const setActiveSection = () => {
    sections.forEach((section) => {
      const link = document.querySelector(`a[href="#${section.id}"]`);
      if (isInViewport(section)) {
        section.classList.add('your-active-class');
        link.classList.add('active-link');
      } else {
        section.classList.remove('your-active-class');
        link.classList.remove('active-link');
      }
    });
  };

// Scroll to anchor ID using scrollTO event
const scrollToSection = () => {
    navList.addEventListener('click', (event) => {
      event.preventDefault();
      if (event.target.tagName === 'A') {
        const targetId = event.target.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  };
  

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNav();
// Scroll to section on link click
document.addEventListener('scroll', setActiveSection);
// Set sections as active
scrollToSection();

