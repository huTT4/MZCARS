// const cars = {
//   ru: [
//     {
//       id: 0,
//       brand: 'BMW',
//       year: 2015,
//       price: 88888,
//       mileage: 222222,
//       fuel: 'Дизель',
//       transmission: 'Автомат',
//       availability: 'В наличии',
//       isNew: true,
//       discount: 0,

//       mainImg: 'img/car-img.jpg',
//       title: 'BMW 5120',
//       article: 'AP-074',
//       mileage_text: '222.222',
//       engine: '2.0 бензин',
//       leasing: 166,
//       leasing_text: 'Лизинг',
//       leasing_month_text: 'мес',
//       url: '/product/index.html?lang=ru&id=0',

//       imgs: [
//         '../img/car-img.jpg',
//         '../img/bg-1.jpg',
//         '../img/bg-2.jpg',
//         '../img/car-img.jpg',
//         '../img/bg-1.jpg',
//         '../img/bg-2.jpg',
//       ],
//       vin: '324586875932978532',
//       linkVideo: 'https://youtube.com/embed/5MgBikgc0nY',
//       linkReport: 'https://example.com',
//       descr: `
//       <p><span>BMW F30 318d.</span> Мотор 105 kW. Машина из Европы, без пробега по Латвии.<br><br>Отличное
//                       визуальное и техническое состояние. Редкий цвет для этого кузова.</p>
//                     <p>
//                       <span>Комплектация:</span>
//                       <br><br>
//                       - Xenon (LED) фары<br>
//                       - климат-контроль с опцией кондиционера<br>
//                       - датчик дождя<br>
//                       - текстильный салон (Recaro) с подогревом сидений<br>
//                       - круиз-контроль<br>
//                       - мультируль с обогревом<br>
//                       - борт компьютер<br>
//                       - парковочные датчики сзади<br>
//                       - start-stop<br>
//                       - навигация по всей Европе<br>
//                       - радио/cd/usb/mp3<br>
//                       - летняя резина с дисками BMW на 18 (можно купить сразу на зимней)<br>
//                       - hands free (bluetooth) можно подключить телефон и слушать музыку<br>
//                       - 2 ориг. ключа и др. опции.
//                       <br><br>
//                       <span>Ухоженный салон, в авто не курили.</span>
//                     </p>
//                     <p>
//                       <span>Общая информация:</span>
//                       <br><br>
//                       - машина на учете (гос.номер OE-8223), тех осмотр по нулям, быстрое переоформление<br>
//                       - с нашим постоянным партнером E-Lizings.lv, доступы выгодные преложения по авто кредиту от 120
//                       EUR/мес.<br>
//                       - перед покупкой, машину можно проверить в любом сервисе или у нас на подъемнике с вашим мастером<br>
//                       - после покупки автомобиля, вы можете обслуживать его у нас (всегда хорошие цены и порядочный подход к
//                       каждому клиенту)<br><br>
//                       <span>Наша компания занимается продажей, подбором, ремонтом автомобилей.</span>
//                       <br><br>
//                       <span>Состоит в транспортном регистре Латвии с разрешением на торговлю авто No. 4037.</span>
//                       <br><br>
//                       <span>Посмотреть и купить машину можно в любой день, только заранее нужно договориться по
//                         встрече.</span>
//                     </p>
//             `
//     },
//   ],
//   lv: [
//     {
//       id: 0,
//       brand: 'BMW',
//       year: 2051,
//       price: 55321,
//       mileage: 222222,
//       fuel: 'Diesel',
//       transmission: 'Automātiskā',
//       availability: 'Uz vietas',
//       isNew: true,
//       discount: 0,

//       mainImg: 'img/car-img.jpg',
//       title: 'BMW 5120',
//       article: 'AP-074',
//       mileage_text: '222.221',
//       engine: '2.0 Dīzelis',
//       leasing: 115,
//       leasing_text: 'Līzings',
//       leasing_month_text: 'mēnesī',
//       url: '/product/index.html?lang=lv&id=0',

//       imgs: [
//         '../img/car-img.jpg',
//         '../img/bg-1.jpg',
//         '../img/bg-2.jpg',
//         '../img/car-img.jpg',
//         '../img/bg-1.jpg',
//         '../img/bg-2.jpg',
//       ],
//       vin: 'WBA3D11070F389395',
//       linkVideo: 'https://youtube.com/embed/5MgBikgc0nY',
//       linkReport: 'https://example.com',
//       descr: `
//       <p><span>LVLVLVLVLVLVLVLLVLVLVLVLLVBMW F30 318d.</span> Мотор 105 kW. Машина из Европы, без пробега по Латвии.<br><br>Отличное
//                       визуальное и техническое состояние. Редкий цвет для этого кузова.</p>
//                     <p>
//                       <span>Комплектация:</span>
//                       <br><br>
//                       - Xenon (LED) фары<br>
//                       - климат-контроль с опцией кондиционера<br>
//                       - датчик дождя<br>
//                       - текстильный салон (Recaro) с подогревом сидений<br>
//                       - круиз-контроль<br>
//                       - мультируль с обогревом<br>
//                       - борт компьютер<br>
//                       - парковочные датчики сзади<br>
//                       - start-stop<br>
//                       - навигация по всей Европе<br>
//                       - радио/cd/usb/mp3<br>
//                       - летняя резина с дисками BMW на 18 (можно купить сразу на зимней)<br>
//                       - hands free (bluetooth) можно подключить телефон и слушать музыку<br>
//                       - 2 ориг. ключа и др. опции.
//                       <br><br>
//                       <span>Ухоженный салон, в авто не курили.</span>
//                     </p>
//                     <p>
//                       <span>Общая информация:</span>
//                       <br><br>
//                       - машина на учете (гос.номер OE-8223), тех осмотр по нулям, быстрое переоформление<br>
//                       - с нашим постоянным партнером E-Lizings.lv, доступы выгодные преложения по авто кредиту от 120
//                       EUR/мес.<br>
//                       - перед покупкой, машину можно проверить в любом сервисе или у нас на подъемнике с вашим мастером<br>
//                       - после покупки автомобиля, вы можете обслуживать его у нас (всегда хорошие цены и порядочный подход к
//                       каждому клиенту)<br><br>
//                       <span>Наша компания занимается продажей, подбором, ремонтом автомобилей.</span>
//                       <br><br>
//                       <span>Состоит в транспортном регистре Латвии с разрешением на торговлю авто No. 4037.</span>
//                       <br><br>
//                       <span>Посмотреть и купить машину можно в любой день, только заранее нужно договориться по
//                         встрече.</span>
//                     </p>
//             `
//     },
//   ],
//   eng: [
//     {
//       id: 0,
//       brand: 'BMW',
//       year: 2015,
//       price: 22222,
//       mileage: 222222,
//       fuel: 'Diesel',
//       transmission: 'Automatic',
//       availability: 'In stock',
//       isNew: true,
//       discount: 0,

//       mainImg: 'img/car-img.jpg',
//       title: 'BMW 5120',
//       article: 'AP-074',
//       mileage_text: '222.222',
//       engine: '2.0 Diesel',
//       leasing: 113,
//       leasing_text: 'Leasing',
//       leasing_month_text: 'per month',
//       url: '/product/index.html?lang=eng&id=0',

//       imgs: [
//         '../img/car-img.jpg',
//         '../img/bg-1.jpg',
//         '../img/bg-2.jpg',
//         '../img/car-img.jpg',
//         '../img/bg-1.jpg',
//         '../img/bg-2.jpg',
//       ],
//       vin: 'WBA3D11070F389395',
//       linkVideo: 'https://youtube.com/embed/5MgBikgc0nY',
//       linkReport: 'https://example.com',
//       descr: `
//       <p><span>ENGENGENGENGENGENGBMW F30 318d.</span> Мотор 105 kW. Машина из Европы, без пробега по Латвии.<br><br>Отличное
//                       визуальное и техническое состояние. Редкий цвет для этого кузова.</p>
//                     <p>
//                       <span>Комплектация:</span>
//                       <br><br>
//                       - Xenon (LED) фары<br>
//                       - климат-контроль с опцией кондиционера<br>
//                       - датчик дождя<br>
//                       - текстильный салон (Recaro) с подогревом сидений<br>
//                       - круиз-контроль<br>
//                       - мультируль с обогревом<br>
//                       - борт компьютер<br>
//                       - парковочные датчики сзади<br>
//                       - start-stop<br>
//                       - навигация по всей Европе<br>
//                       - радио/cd/usb/mp3<br>
//                       - летняя резина с дисками BMW на 18 (можно купить сразу на зимней)<br>
//                       - hands free (bluetooth) можно подключить телефон и слушать музыку<br>
//                       - 2 ориг. ключа и др. опции.
//                       <br><br>
//                       <span>Ухоженный салон, в авто не курили.</span>
//                     </p>
//                     <p>
//                       <span>Общая информация:</span>
//                       <br><br>
//                       - машина на учете (гос.номер OE-8223), тех осмотр по нулям, быстрое переоформление<br>
//                       - с нашим постоянным партнером E-Lizings.lv, доступы выгодные преложения по авто кредиту от 120
//                       EUR/мес.<br>
//                       - перед покупкой, машину можно проверить в любом сервисе или у нас на подъемнике с вашим мастером<br>
//                       - после покупки автомобиля, вы можете обслуживать его у нас (всегда хорошие цены и порядочный подход к
//                       каждому клиенту)<br><br>
//                       <span>Наша компания занимается продажей, подбором, ремонтом автомобилей.</span>
//                       <br><br>
//                       <span>Состоит в транспортном регистре Латвии с разрешением на торговлю авто No. 4037.</span>
//                       <br><br>
//                       <span>Посмотреть и купить машину можно в любой день, только заранее нужно договориться по
//                         встрече.</span>
//                     </p>
//             `
//     },
//   ],
// }

const cars = {
  ru: [],
  lv: [],
  eng: []
}

const brands = ['BMW', 'MERCEDES', 'VOLVO']

const transmissions = {
  ru: ['Автомат', 'Механика'],
  lv: ['Automātiskā', 'Mehāniska'],
  eng: ['Automatic', 'Mechanical']
}

const fuels = {
  ru: ['Бензин', 'Дизель', 'Другое'],
  lv: ['Benzīns', 'Dīzelis', 'Cits'],
  eng: ['Petrol', 'Diesel', 'Other']
}

const availability = {
  ru: ['В наличии', 'Скоро', 'Под заказ'],
  lv: ['Uz vietas', 'Drīzumā', 'Pēc pasūtījuma'],
  eng: ['In stock', 'Soon', 'Per order']
}

for (let i = 1; i <= 30; i++) {
  const year = 2010 + (i % 13) // 2010-2022
  const price = 20000 + i * 2500
  const mileage = 5000 + i * 10000
  const isNew = i % 5 === 0
  const discount = isNew ? 0 : (i % 3 === 0 ? 1000 + i * 50 : 0)
  const brand = brands[i % brands.length]
  const fuelIndex = i % fuels.ru.length
  const transmissionIndex = i % 2
  const availabilityIndex = i % availability.ru.length

  // RU
  cars.ru.push({
    id: i,
    brand,
    year,
    price,
    mileage,
    fuel: fuels.ru[fuelIndex],
    transmission: transmissions.ru[transmissionIndex],
    availability: availability.ru[availabilityIndex],
    isNew,
    discount,
    mainImg: 'img/car-img.jpg',
    title: `${brand} ${5000 + i}`,
    article: `AP-${100 + i}`,
    mileage_text: mileage.toLocaleString('ru-RU'),
    engine: '2.0 дизель',
    leasing: 100 + i,
    leasing_text: 'Лизинг',
    leasing_month_text: 'мес',
    url: `/product/index.html?lang=ru&id=${i}`,
    imgs: ['../img/car-img.jpg', '../img/bg-1.jpg', '../img/bg-2.jpg'],
    vin: `VIN-RU-${i}`,
    linkVideo: 'https://youtube.com/embed/5MgBikgc0nY',
    linkReport: 'https://example.com',
    descr: `<p>${brand} ${5000 + i}, ${year} года, отличное состояние.</p>`
  })

  // LV
  cars.lv.push({
    ...cars.ru[i - 1],
    fuel: fuels.lv[fuelIndex],
    transmission: transmissions.lv[transmissionIndex],
    availability: availability.lv[availabilityIndex],
    leasing_text: 'Līzings',
    leasing_month_text: 'mēnesī',
    title: `${brand} ${5000 + i}`,
    url: `/product/lv.html?lang=lv&id=${i}`,
    vin: `VIN-LV-${i}`
  })

  // ENG
  cars.eng.push({
    ...cars.ru[i - 1],
    fuel: fuels.eng[fuelIndex],
    transmission: transmissions.eng[transmissionIndex],
    availability: availability.eng[availabilityIndex],
    leasing_text: 'Leasing',
    leasing_month_text: 'per month',
    title: `${brand} ${5000 + i}`,
    url: `/product/eng.html?lang=eng&id=${i}`,
    vin: `VIN-ENG-${i}`
  })
}

export default cars
