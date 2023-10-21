// Burger menu and scroll
const menuIcon = document.querySelector('.menu-icon'),
      header = document.querySelector('.header'),
      body = document.querySelector('body');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('menu-icon-active');
    header.classList.toggle('header-mobile');
    body.classList.toggle('no-scroll');
});

// Slider with arrows
const sliderArrows = document.querySelector('.main__slider-arrows'),
      slidesArrows = sliderArrows.querySelectorAll('.slider-arrows__item'),
      prev = sliderArrows.querySelector('.slider-arrows__arrow-left'),
      next = sliderArrows.querySelector('.slider-arrows__arrow-right');

let slideIndex = 0;

prev.addEventListener('click', () => showSlideArrows(-1));
next.addEventListener('click', () => showSlideArrows(1));

function showSlideArrows(n){
    slideIndex +=n;
    if(slideIndex < 0){
        slideIndex = slidesArrows.length - 1;
    }
    if(slideIndex >= slidesArrows.length){
        slideIndex = 0;
    }
    slidesArrows.forEach(slide => slide.style.display = 'none');
    slidesArrows[slideIndex].style.display = 'block';
};

showSlideArrows(0);