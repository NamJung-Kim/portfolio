const header = document.querySelector('.header');
const home = document.querySelector('.home__container');

const headerHeight = header.getBoundingClientRect().height;
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight) {
    header.classList.add('header--dark');
  } else {
    header.classList.remove('header--dark');
  } 
});

document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY/ homeHeight;
  console.log(1 - window.scrollY/ homeHeight);
});
