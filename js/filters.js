import cars from './cars.js'

// ============================== Фильтрация ==============================
const carsPerPage = 12
let currentIndex = 0
let filteredCars = null // сюда сохраняем результат поиска + фильтра
let activeFilter = null // текущий выбранный фильтр

const currentLang = document.documentElement.getAttribute('lang')
const cardsContainer = document.querySelector('.catalog__cards')
const showMore = document.querySelector('.catalog__show')
const searchInput = document.querySelector('.catalog__search input')
const searchBtn = document.querySelector('.catalog__search button')
const filterBtns = document.querySelectorAll('.catalog__filter-cards li')
const foundCountEl = document.querySelector('[data-quantity]') // элемент с количеством
const applyBtn = document.querySelector('#apply-filters')
const clearBtn = document.querySelector('#clear-filters')

const noResultsText = {
  ru: 'Ничего не найдено',
  lv: 'Rezultatų nėra',
  eng: 'No results found'
}

document.addEventListener('DOMContentLoaded', () => {
  renderCars(currentLang)
  toggleClearBtnVisibility()
})

function renderCars(lang) {
  const carsList = filteredCars || cars[lang] || []

  // Обновляем цифру "Найдено X авто" каждый раз при рендере
  if (foundCountEl) {
    foundCountEl.textContent = carsList.length
  }

  const slice = carsList.slice(currentIndex, currentIndex + carsPerPage)

  slice.forEach(car => {
    cardsContainer.insertAdjacentHTML('beforeend', `
      <div class="catalog__card-wrapper">
        <a href="${car.url}" target="_blank" class="catalog__card">
          <div class="catalog__card-img-wrapper">
            <img class="catalog__card-img" src="${car.mainImg}" alt="car-img">

            <div class="catalog__card-img-info">
              ${car.isNew ? `<span class="catalog__card-img-info-new">NEW</span>` : (car.discount > 0 ? `<span class="catalog__card-img-info-discount"><img src="img/percent.svg" alt="percent">-${car.discount}$</span>` : '')}

              <span class="catalog__card-img-info-availability">
                <img src="img/check-mark.svg" alt="check-mark">
                ${car.availability}
              </span>
            </div>
          </div>

          <div class="catalog__card-title">
            <h5>${car.title}</h5>
            <span>${car.article}</span>
          </div>

          <div class="catalog__card-info">
            <span><img src="img/calendar-2.svg" alt="calendar">${car.year}</span>
            <span><img src="img/transmission.svg" alt="transmission">${car.transmission}</span>
            <span><img src="img/speedometer.svg" alt="speedometer">${car.mileage_text}</span>
            <span><img src="img/engine.svg" alt="engine">${car.engine}</span>
          </div>

          <div class="catalog__card-price">
            <h6>${car.price}€</h6>
            <div>
              ${car.leasing_text}
              <span>${car.leasing}€/${car.leasing_month_text}</span>
            </div>
          </div>
        </a>
      </div>
    `)
  })

  currentIndex += slice.length

  if (slice.length === 0 && currentIndex === 0) {
    cardsContainer.innerHTML = `<p class="catalog__empty">${noResultsText[lang]}</p>`
    showMore.classList.remove('active')
    return
  }

  if (currentIndex >= carsList.length) {
    showMore.classList.remove('active')
  } else {
    showMore.classList.add('active')
  }
}

// кнопка "Показать ещё"
showMore.addEventListener('click', () => renderCars(currentLang))

// ================== 🔍 ПОИСК + ФИЛЬТР ===================
function applyFilters() {
  const query = searchInput.value.trim().toLowerCase()
  const allCars = cars[currentLang] || []

  let result = allCars

  // ======= ПОИСК =======
  if (query) {
    result = result.filter(car => {
      return (
        car.title.toLowerCase().includes(query) ||
        car.article.toLowerCase().includes(query) ||
        String(car.year).includes(query)
      )
    })
  }

  // ======= БРЕНД =======
  const brandInput = document.querySelector('.catalog__brand input[name="brand"]:checked')
  if (brandInput && brandInput.value !== 'all') {
    result = result.filter(car => car.brand.toLowerCase() === brandInput.value.toLowerCase())
  }

  // ======= ГОД =======
  const minYear = Number(document.getElementById('minInputRange--year').value)
  const maxYear = Number(document.getElementById('maxInputRange--year').value)
  result = result.filter(car => car.year >= minYear && car.year <= maxYear)

  // ======= ЦЕНА =======
  const minPrice = Number(document.getElementById('minInputRange--price').value)
  const maxPrice = Number(document.getElementById('maxInputRange--price').value)
  result = result.filter(car => car.price >= minPrice && car.price <= maxPrice)

  // ======= ПРОБЕГ =======
  const mileageChecks = document.querySelectorAll('.catalog__select input[name="mileage"]:checked')
  if (mileageChecks.length > 0) {
    const mileageValues = Array.from(mileageChecks).map(c => c.value)
    result = result.filter(car => {
      return mileageValues.some(val => {
        if (val === 'more250k') return car.mileage > 250000
        return car.mileage <= Number(val)
      })
    })
  }

  // ======= ТОПЛИВО =======
  const fuelChecks = document.querySelectorAll('.catalog__select input[name="fuel"]:checked')
  if (fuelChecks.length > 0) {
    const fuelValues = Array.from(fuelChecks).map(c => c.value.toLowerCase())
    result = result.filter(car => fuelValues.includes(car.fuel.toLowerCase()))
  }

  // ======= КОРОБКА ПЕРЕДАЧ =======
  const transChecks = document.querySelectorAll('.catalog__select input[name="transmission"]:checked')
  if (transChecks.length > 0) {
    const transValues = Array.from(transChecks).map(c => c.value.toLowerCase())
    result = result.filter(car => transValues.includes(car.transmission.toLowerCase()))
  }

  // ======= ДОСТУПНОСТЬ =======
  const availChecks = document.querySelectorAll('.catalog__select input[name="availability"]:checked')
  if (availChecks.length > 0) {
    const availValues = Array.from(availChecks).map(c => c.value.toLowerCase())
    result = result.filter(car => availValues.includes(car.availability.toLowerCase()))
  }

  // ======= СОРТИРОВКА =======
  if (activeFilter) {
    switch (activeFilter) {
      case 'cheap':
        result = result.slice().sort((a, b) => a.price - b.price)
        break
      case 'expensive':
        result = result.slice().sort((a, b) => b.price - a.price)
        break
      case 'new':
        result = result.slice().sort((a, b) => {
          const numA = parseInt(a.article.match(/\d+/)?.[0] || 0, 10)
          const numB = parseInt(b.article.match(/\d+/)?.[0] || 0, 10)
          return numB - numA
        })
        break
      case 'discount':
        result = result.slice().sort((a, b) => b.discount - a.discount)
        break
    }
  }

  filteredCars = result
  currentIndex = 0
  cardsContainer.innerHTML = ''
  renderCars(currentLang)

  toggleClearBtnVisibility()
}

// Функция очистки фильтров
function clearFilters() {
  // Сброс поиска
  searchInput.value = ''

  // Сброс бренда
  const brandRadios = document.querySelectorAll('.catalog__brand input[name="brand"]')
  brandRadios.forEach(r => r.checked = r.value === 'all')
  updateSelectTopBrand()

  // Сброс года
  document.getElementById('minInputRange--year').value = 1990
  document.getElementById('maxInputRange--year').value = 2025
  document.getElementById('rangeMin--year').value = 1990
  document.getElementById('rangeMax--year').value = 2025
  updateProgressYear()

  // Сброс цены
  document.getElementById('minInputRange--price').value = 500
  document.getElementById('maxInputRange--price').value = 100000
  document.getElementById('rangeMin--price').value = 500
  document.getElementById('rangeMax--price').value = 100000
  updateProgressPrice()

  // Сброс всех чекбоксов
  const allCheckboxes = document.querySelectorAll('.catalog__select input[type="checkbox"]')
  allCheckboxes.forEach(cb => cb.checked = false)

  // Сброс сортировки
  filterBtns.forEach(b => b.classList.remove('active'))
  activeFilter = null

  // Обновляем список
  filteredCars = null
  currentIndex = 0
  cardsContainer.innerHTML = ''
  renderCars(currentLang)

  toggleClearBtnVisibility()
}

applyBtn.addEventListener('click', applyFilters)
clearBtn.addEventListener('click', clearFilters)
searchBtn.addEventListener('click', applyFilters)
searchInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    e.preventDefault()
    applyFilters()
  }
})

// ================== 🎛 ФИЛЬТРЫ ===================
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'))

    if (activeFilter === btn.dataset.filter) {
      // если нажали повторно → убираем фильтр
      activeFilter = null
    } else {
      btn.classList.add('active')
      activeFilter = btn.dataset.filter
    }

    applyFilters()
  })
})

function toggleClearBtnVisibility() {
  const query = searchInput.value.trim().toLowerCase()

  const brandInput = document.querySelector('.catalog__brand input[name="brand"]:checked')
  const minYearVal = Number(document.getElementById('minInputRange--year').value)
  const maxYearVal = Number(document.getElementById('maxInputRange--year').value)
  const minPriceVal = Number(document.getElementById('minInputRange--price').value)
  const maxPriceVal = Number(document.getElementById('maxInputRange--price').value)

  const mileageChecks = document.querySelectorAll('.catalog__select input[name="mileage"]:checked')
  const fuelChecks = document.querySelectorAll('.catalog__select input[name="fuel"]:checked')
  const transChecks = document.querySelectorAll('.catalog__select input[name="transmission"]:checked')
  const availChecks = document.querySelectorAll('.catalog__select input[name="availability"]:checked')

  // Условие: есть ли активные фильтры?
  const hasFilters =
    query ||
    (brandInput && brandInput.value !== 'all') ||
    minYearVal !== 1990 ||
    maxYearVal !== 2025 ||
    minPriceVal !== 500 ||
    maxPriceVal !== 100000 ||
    mileageChecks.length > 0 ||
    fuelChecks.length > 0 ||
    transChecks.length > 0 ||
    availChecks.length > 0 ||
    activeFilter !== null

  if (hasFilters) {
    clearBtn.style.display = 'block'
  } else {
    clearBtn.style.display = 'none'
  }
}

// ============================== Выбор бренда (только один) ==============================
function updateSelectTopBrand() {
  const selectTop = document.querySelector('.catalog__brand-choise')
  const checkedRadio = document.querySelector(".catalog__select-list input[type='radio']:checked")
  if (checkedRadio) {
    const label = checkedRadio.parentElement.querySelector('span')
    selectTop.textContent = label.textContent
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const radios = document.querySelectorAll(".catalog__select-list input[type='radio']")

  updateSelectTopBrand()

  radios.forEach(radio => radio.addEventListener('change', updateSelectTopBrand))
})


// ============================== Списки фильтров ==============================
const titleList = document.querySelectorAll('.catalog__select-top')

titleList.forEach(item => {
  item.addEventListener('click', (e) => {
    const catalogSelect = e.target.closest('.catalog__select')
    catalogSelect.classList.toggle('active')
  })
})

// ============================== Диапазон года выпуска ==============================
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

// ============================== Диапазон цены ==============================
const rangeMinPrice = document.getElementById('rangeMin--price')
const rangeMaxPrice = document.getElementById('rangeMax--price')
const minInputRangePrice = document.getElementById('minInputRange--price')
const maxInputRangePrice = document.getElementById('maxInputRange--price')
const progressPrice = document.querySelector('.catalog__range-progress--price')

const minPrice = 500
const maxPrice = 100000

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
