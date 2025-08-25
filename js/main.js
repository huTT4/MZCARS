// SWITCH LANG
let langList = null

document.addEventListener('click', (e) => {
  const langButton = e.target.closest('.lang')
  const langList = e.target.closest('.lang__list')
  const langLink = e.target.closest('.lang__list-link')

  // Если кликнули по кнопке языка
  if (langButton) {
    const container = langButton.closest('.langs')
    const list = container.querySelector('.lang__list')
    list.classList.toggle('active')
  }
  // Если кликнули по ссылке в списке
  else if (langLink) {
    const list = langLink.closest('.lang__list')
    list.classList.remove('active')

    // Здесь можно добавить логику смены языка
    console.log('Выбран язык:', langLink.textContent)
  }
  // Если кликнули вне области языкового меню 
  else if (!langList) {
    document.querySelectorAll('.lang__list.active').forEach(list => {
      list.classList.remove('active')
    })
  }
})

// ARROW TO TOP
const arrowToTop = document.querySelector('.arrow__to-top')

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 200) {
    arrowToTop.classList.add('show')
  } else {
    arrowToTop.classList.remove('show')
  }
})

arrowToTop.addEventListener('click', function (e) {
  e.preventDefault()
  window.scrollTo({ top: 0 })
})

// BURGER
const burger = document.querySelector('.burger')
const nav = document.querySelector('.header__content')
const burgerLinks = document.querySelectorAll('.header__nav a')

burger.addEventListener('click', () => {
  burger.classList.toggle('active')
  nav.classList.toggle('active')
})

burgerLinks.forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('active')
    nav.classList.remove('active')
  })
})

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

// Form Validation

const lang = document.documentElement.getAttribute('lang')

const messages = {
  ru: {
    required: 'Это поле обязательно для заполнения.',
    email: 'Введите корректный адрес электронной почты.',
    captcha: 'Пройдите reCAPTCHA.',
    success: 'Сообщение успешно отправлено.',
    failed: 'Сообщение не отправлено, попробуйте ещё раз.'
  },

  lv: {
    required: 'LV.Это поле обязательно для заполнения.',
    email: 'LV.Введите корректный адрес электронной почты.',
    captcha: 'Pabeidziet reCAPTCHA',
    success: 'LV.Сообщение успешно отправлено.',
    failed: 'LV.Сообщение не отправлено, попробуйте ещё раз.'
  },

  en: {
    required: 'EN.Это поле обязательно для заполнения.',
    email: 'EN.Введите корректный адрес электронной почты.',
    captcha: 'Complete reCAPTCHA.',
    success: 'EN.Сообщение успешно отправлено.',
    failed: 'EN.Сообщение не отправлено, попробуйте ещё раз.'
  }
}

let msg = messages.ru

switch (lang) {
  case 'ru':
    msg = messages.ru
    break
  case 'lv':
    msg = messages.lv
    break
  case 'en':
    msg = messages.en
    break
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function validateForm(form) {
  let isValid = true
  const inputs = form.querySelectorAll('input[name], textarea[name]')
  
  // Сброс предыдущих ошибок
  const errorElements = form.querySelectorAll('.error-message')
  errorElements.forEach(el => el.remove())
  
  inputs.forEach(input => {
    const value = input.value.trim()
    const name = input.getAttribute('name')
    const formGroup = input.closest('.form-group')
    
    if (!formGroup) return
    
    // Проверка обязательных полей
    if (input.hasAttribute('required') && !value) {
      showError(formGroup, msg.required)
      isValid = false
      return
    }
    
    // Проверка email
    if (name === 'email' && value && !validateEmail(value)) {
      showError(formGroup, msg.email)
      isValid = false
    }
    
    // Проверка reCAPTCHA
    if (name === 'g-recaptcha-response') {
      const recaptchaResponse = grecaptcha.getResponse()
      if (!recaptchaResponse) {
        showError(formGroup, msg.captcha)
        isValid = false
      }
    }
  })
  
  return isValid
}

function showError(formGroup, message) {
  const errorElement = document.createElement('div')
  errorElement.className = 'error-message'
  errorElement.style.color = 'red'
  errorElement.style.marginTop = '5px'
  errorElement.textContent = message
  formGroup.appendChild(errorElement)
}

function serializeForm(form) {
  const formData = new FormData(form)
  const params = new URLSearchParams()
  
  for (const [key, value] of formData.entries()) {
    params.append(key, value)
  }
  
  return params.toString()
}

function handleFormSubmit(event) {
  event.preventDefault()
  
  const form = event.target
  const notification = document.querySelector('.form-notification')
  const preloader = document.querySelector('.preloader')
  
  if (!validateForm(form)) return
  
  const formData = serializeForm(form)
  
  // Показать прелоадер
  if (preloader) preloader.style.display = 'block'
  
  fetch('../php/sendEmail.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formData
  })
  .then(response => response.text())
  .then(data => {
    if (notification) {
      notification.style.display = 'block'
      if (data === 'success') {
        notification.textContent = msg.success
        setTimeout(() => {
          window.location.href = ''
        }, 5000)
      } else if (data === 'captcha') {
        notification.textContent = msg.captcha
      } else {
        notification.textContent = msg.failed
      }
    }
  })
  .catch(error => {
    if (notification) {
      notification.style.display = 'block'
      notification.textContent = msg.failed
    }
    console.error('Error:', error)
  })
  .finally(() => {
    // Скрыть прелоадер
    if (preloader) preloader.style.display = 'none'
  })
}

// Инициализация формы
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.querySelector('.contact-form')
  if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit)
  }
})
