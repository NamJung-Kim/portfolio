'use strict';

const observer = new IntersectionObserver(callback);
const sections = document.querySelectorAll('.section');

sections.forEach(section => {
  observer.observe(section);
});

function callback(entries) {
  entries.forEach(entry => {
    const listItem =document.querySelector(`.header__menu__item[data-category="${entry.target.dataset.category}"]`);
    console.log(entry);
    if (entry.isIntersecting) {
      listItem.classList.add('active');
    } else {
      listItem.classList.remove('active');
    }
  })
}

