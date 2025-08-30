import cars from './cars.js'

// ============================== Показываем конкретную машину ==============================
// Получаем параметры из URL
const params = new URLSearchParams(window.location.search)
const carId = params.get('id')
const lang = document.documentElement.getAttribute('lang')

// Выбираем массив машин для текущего языка
const carsByLang = cars[lang]

// Ищем конкретную машину
const car = carsByLang.find(c => String(c.id) === carId)

if (!car) {
  console.error('Car not found')
} else {
  // Слева
  const mainImgWrapper = document.querySelector('.product__slider')
  const paginationWrapper = document.querySelector('.product__pagination')
  mainImgWrapper.innerHTML = ''
  paginationWrapper.innerHTML = ''

  car.imgs.forEach(img => {
    mainImgWrapper.innerHTML += `<img class="product__card-img" src="${img}" alt="car-img" data-fancybox="gallery">`
    paginationWrapper.innerHTML += `<div><img src="${img}" alt="car-img"></div>`
  })

  // Информационные плашки
  const infoWrapper = document.querySelector('[data-car-info]')

  let badgeHtml = ''
  if (car.isNew) {
    badgeHtml = `<span class="product__card-img-info-new">NEW</span>`
  } else if (car.discount > 0) {
    badgeHtml = `<span class="product__card-img-info-discount">
                 <img src="../img/percent.svg" alt="percent"> -${car.discount}$
               </span>`
  }

  infoWrapper.innerHTML = `
  ${badgeHtml}
  <span class="product__card-img-info-availability">
    <img src="../img/check-mark.svg" alt="check-mark">
    ${car.availability}
  </span>
`

  // Ссылки
  const videoLink = document.querySelector('[data-car-link-video]')
  const reportLink = document.querySelector('[data-car-link-report]')

  // Видео
  if (car.linkVideo && car.linkVideo.trim() !== '') {
    videoLink.href = car.linkVideo
    videoLink.style.display = ''
  } else {
    videoLink.style.display = 'none'
  }

  // Отчет
  if (car.linkReport && car.linkReport.trim() !== '') {
    reportLink.href = car.linkReport
    reportLink.style.display = ''
  } else {
    reportLink.style.display = 'none'
  }

  // Справа
  document.querySelector('[data-car-title]').textContent = car.title
  document.querySelector('[data-car-price]').textContent = car.price.toLocaleString('ru-RU') + ' €'
  document.querySelector('[data-car-leasing]').textContent = car.leasing + '€'

  const infoSpans = document.querySelectorAll('.product__info li span')
  infoSpans[0].textContent = car.year
  infoSpans[1].textContent = car.mileage.toLocaleString('de-DE')
  infoSpans[2].textContent = car.article
  infoSpans[3].textContent = car.transmission
  infoSpans[4].textContent = car.engine
  infoSpans[5].textContent = car.vin

  // Описание
  document.querySelector('.product__descr').innerHTML = car.descr

  renderRelatedCars(carId, lang)
}

document.querySelectorAll('.lang__list-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault()
    const newLang = link.dataset.lang
    let page = 'index.html'

    if (newLang === 'lv') page = 'lv.html'
    if (newLang === 'eng') page = 'eng.html'

    window.location.href = `/product/${page}?&id=${carId}`
  })
})

function createCatalogCard(car) {
  return `
      <div class="catalog__card-wrapper catalog__card-wrapper--product">
        <a href="/product/${lang === 'ru' ? 'index.html' : lang === 'lv' ? 'lv.html' : 'eng.html'}?id=${car.id}" target="_blank" class="catalog__card">
          <div class="catalog__card-img-wrapper">
            <img class="catalog__card-img" src="${car.mainImg}" alt="car-img">

            <div class="catalog__card-img-info">
              ${car.isSold ? `<span class="catalog__card-img-info-sold">SOLD</span>` : ''}
              ${car.isNew ? `<span class="catalog__card-img-info-new">NEW</span>` : ''}
              ${car.discount > 0 ? `<span class="catalog__card-img-info-discount">
                <img src="../img/percent.svg" alt="percent">-${car.discount}€
              </span>` : ''}
              ${car.availability ? `<span class="catalog__card-img-info-availability">
                <img src="../img/check-mark.svg" alt="check-mark">
                ${car.availability}
              </span>` : ''}
            </div>
          </div>

          <div class="catalog__card-title">
            <h5>${car.title}</h5>
            <span>${car.article}</span>
          </div>

          <div class="catalog__card-info">
            <span><img src="../img/calendar-2.svg" alt="calendar">${car.year}</span>
            <span><img src="../img/transmission.svg" alt="transmission">${car.transmission}</span>
            <span><img src="../img/speedometer.svg" alt="speedometer">${car.mileage.toLocaleString('de-DE')}</span>
            <span><img src="../img/engine.svg" alt="engine">${car.engine}</span>
          </div>

          <div class="catalog__card-price">
            <h6>${car.price}€</h6>
            <div>
              ${lang === 'ru' ? 'Лизинг от' : lang === 'lv' ? 'Līzings no' : 'Leasing from'}
              <span>${car.leasing}€/${lang === 'ru' ? 'мес' : lang === 'lv' ? 'mēnesī' : 'per month'}</span>
            </div>
          </div>
        </a>
      </div>
    `
}

function renderRelatedCars(currentCarId, lang) {
  const container = document.querySelector('.catalog__cards')
  const catalogSection = document.querySelector('.catalog--product')

  if (!container || !catalogSection) return

  container.innerHTML = ''

  // Берем массив машин для текущего языка
  const carsByLang = cars[lang]

  const related = carsByLang
    .filter(c => String(c.id) !== String(currentCarId))
    .slice(0, 8) // последние 8 без учета текущей

  // Скрываем секцию если нет машин
  if (related.length === 0) {
    catalogSection.style.display = 'none'
    return
  } else {
    catalogSection.style.display = ''
  }

  related.forEach(car => {
    container.insertAdjacentHTML('beforeend', createCatalogCard(car))
  })
}

// ============================== Информация о цене (при наведении) ==============================
const productInfo = document.querySelector('.product__price-left-info')
const productInfoText = document.querySelector('.product__price-left-info-text')

productInfo.addEventListener('mouseenter', () => {
  productInfoText.classList.add('active')
})

productInfo.addEventListener('mouseleave', () => {
  productInfoText.classList.remove('active')
})

// ============================== Главный слайдер ==============================
$('.product__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  infinite: false,
  asNavFor: '.product__pagination',
})

// ============================== Миниатюры (пагинация) ==============================
$('.product__pagination').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  focusOnSelect: true,
  asNavFor: '.product__slider',
  infinite: false,
  arrows: true,
  centerMode: false,
  prevArrow: '<button type="button" class="product-arrow prev">‹</button>',
  nextArrow: '<button type="button" class="product-arrow next">›</button>',
})

// ============================== Галерея картинок (Fancybox) ==============================
Fancybox.bind("[data-fancybox='gallery']", {
  placeFocusBack: false
})

