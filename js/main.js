// SWITCH LANG
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

// LISTS
const titleList = document.querySelectorAll('.catalog__select-top')

titleList.forEach(item => {
  item.addEventListener('click', (e) => {
    const catalogSelect = e.target.closest('.catalog__select')
    catalogSelect.classList.toggle('active')
  })
})

// RANGE YEAR
const rangeMinYear = document.getElementById('rangeMin--year')
const rangeMaxYear = document.getElementById('rangeMax--year')
const minInputRangeYear = document.getElementById('minInputRange--year')
const maxInputRangeYear = document.getElementById('maxInputRange--year')
const progressYear = document.querySelector('.catalog__range-progress--year')

let minGap = 1
const minYear = 1990
const maxYear = 2025

function updateProgressYear() {
  let minVal = parseInt(rangeMinYear.value)
  let maxVal = parseInt(rangeMaxYear.value)

  progressYear.style.left = ((minVal - minYear) / (maxYear - minYear)) * 100 + "%"
  progressYear.style.right = 100 - ((maxVal - minYear) / (maxYear - minYear)) * 100 + "%"

  minInputRangeYear.value = minVal
  maxInputRangeYear.value = maxVal
}

rangeMinYear.addEventListener('input', () => {
  if (parseInt(rangeMaxYear.value) - parseInt(rangeMinYear.value) <= minGap) {
    rangeMinYear.value = parseInt(rangeMaxYear.value) - minGap
  }
  updateProgressYear()
})

rangeMaxYear.addEventListener('input', () => {
  if (parseInt(rangeMaxYear.value) - parseInt(rangeMinYear.value) <= minGap) {
    rangeMaxYear.value = parseInt(rangeMinYear.value) + minGap
  }
  updateProgressYear()
})

minInputRangeYear.addEventListener('input', () => {
  let val = parseInt(minInputRangeYear.value)
  rangeMinYear.value = Math.max(minYear, Math.min(val, parseInt(rangeMaxYear.value) - minGap))
  updateProgressYear()
})

maxInputRangeYear.addEventListener('input', () => {
  let val = parseInt(maxInputRangeYear.value)
  rangeMaxYear.value = Math.min(maxYear, Math.max(val, parseInt(rangeMinYear.value) + minGap))
  updateProgressYear()
})

updateProgressYear()

// RANGE PRICE
const rangeMinPrice = document.getElementById('rangeMin--price')
const rangeMaxPrice = document.getElementById('rangeMax--price')
const minInputRangePrice = document.getElementById('minInputRange--price')
const maxInputRangePrice = document.getElementById('maxInputRange--price')
const progressPrice = document.querySelector('.catalog__range-progress--price')

const minPrice = 300000
const maxPrice = 15000000

function updateProgressPrice() {
  let minVal = parseInt(rangeMinPrice.value)
  let maxVal = parseInt(rangeMaxPrice.value)

  progressPrice.style.left = ((minVal - minPrice) / (maxPrice - minPrice)) * 100 + "%"
  progressPrice.style.right = 100 - ((maxVal - minPrice) / (maxPrice - minPrice)) * 100 + "%"

  minInputRangePrice.value = minVal
  maxInputRangePrice.value = maxVal
}

rangeMinPrice.addEventListener('input', () => {
  if (parseInt(rangeMaxPrice.value) - parseInt(rangeMinPrice.value) <= minGap) {
    rangeMinPrice.value = parseInt(rangeMaxPrice.value) - minGap
  }
  updateProgressPrice()
})

rangeMaxPrice.addEventListener('input', () => {
  if (parseInt(rangeMaxPrice.value) - parseInt(rangeMinPrice.value) <= minGap) {
    rangeMaxPrice.value = parseInt(rangeMinPrice.value) + minGap
  }
  updateProgressPrice()
})

minInputRangePrice.addEventListener('change', () => {
  let val = parseInt(minInputRangePrice.value)
  rangeMinPrice.value = Math.max(minPrice, Math.min(val, parseInt(rangeMaxPrice.value) - minGap))
  updateProgressPrice()
})

maxInputRangePrice.addEventListener('change', () => {
  let val = parseInt(maxInputRangePrice.value)
  rangeMaxPrice.value = Math.min(maxPrice, Math.max(val, parseInt(rangeMinPrice.value) + minGap))
  updateProgressPrice()
})

updateProgressPrice()
