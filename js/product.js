// Product info
const productInfo = document.querySelector('.product__price-left-info')
const productInfoText = document.querySelector('.product__price-left-info-text')

productInfo.addEventListener('mouseenter', () => {
  productInfoText.classList.add('active')
})

productInfo.addEventListener('mouseleave', () => {
  productInfoText.classList.remove('active')
})

// Главный слайдер
$('.product__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  infinite: false,
  asNavFor: '.product__pagination'
});

// Миниатюры
$('.product__pagination').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.product__slider',
  focusOnSelect: true,
  infinite: false,
  arrows: true,
  centerMode: false,
  prevArrow: '<button type="button" class="product-arrow prev">‹</button>',
  nextArrow: '<button type="button" class="product-arrow next">›</button>'
});

// Fancybox
Fancybox.bind("[data-fancybox='gallery']", {
  placeFocusBack: false
})
