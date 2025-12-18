// search element with class "md-nav__link--active"
const activeLink = document.querySelector('a.md-nav__link--active');
//get child
// const activeLinkChild = activeLink.children[0];

// create a new element
myElem = document.createElement('span');

// add a class to the new element
myElem.classList.add('sr-only');

// add text to the new element
myElem.textContent = 'Page active';

activeLink.insertAdjacentElement('beforeend', myElem);
// activeLinkChild.insertAdjacentElement('beforeend', myElem);

activeLink.setAttribute('aria-current', 'page');

// // display in red
// activeLink.style.color = 'red';
// // activeLinkChild.style.color = 'red';