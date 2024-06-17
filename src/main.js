const header = document.querySelector('.header');
const home = document.querySelector('.home__container');
const arrow = document.querySelector('.arrow-up');
const navbarMenu = document.querySelector('.header__menu');
const navbarToggle = document.querySelector('.header__toggle');

const headerHeight = header.getBoundingClientRect().height;
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
   // header 부분을 아래로 스크롤시 색을 바꿈
  if (window.scrollY > headerHeight) {
    header.classList.add('header--dark');
  } else {
    header.classList.remove('header--dark');
  } 
});

document.addEventListener('scroll', () => {
   // 아래로 스크롤 시 홈 내용을 투명하게 바꿈
  home.style.opacity = 1 - window.scrollY/ homeHeight;
  console.log(1 - window.scrollY/ homeHeight);
});

document.addEventListener('scroll', () => {
  // arrow up 버튼을 아래로 스크롤시 투명하게 처리함
  if (window.scrollY > homeHeight / 2) {
    arrow.style.opacity = 1;
  } else {
    arrow.style.opacity = 0;
  }
});

navbarToggle.addEventListener('click', () => {
  //navbar 토글버튼 클릭 처리
  navbarMenu.classList.toggle('open');
});

navbarMenu.addEventListener('click', () => {
  //navbar 토글버튼 클릭 처리
  navbarMenu.classList.remove('open');
});