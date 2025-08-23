// SWITCH LANG
const lang = document.querySelector('.header__lang')
const langList = document.querySelector('.header__lang-list')

document.addEventListener('click', (e) => {
  if (e.target.closest('.header__lang')) {
    langList.classList.toggle('active')
  } else if (!e.target.closest('.header__lang') && e.target !== langList) {
    langList.classList.remove('active')
  }
})

// BURGER
const burger = document.querySelector('.burger')
const nav = document.querySelector('.header__content')

burger.addEventListener('click', () => {
  burger.classList.toggle('active')
  nav.classList.toggle('active')
})

// SWIPER SLIDER
const swiper = new Swiper('.hero__slider', {
  wrapperClass: 'hero__slider-wrapper',
  slideClass: 'hero__slider-slide',
  pagination: {
    el: '.hero__slider-pagination',
    clickable: true,
  },

  loop: true,
  autoplay: {
    delay: 5000,
  },
  effect: 'fade',
});
