const Price320px = `

        <div class="swiper swiper--price">
          <div class="swiper-wrapper">

            <div class="swiper-slide">
                <div class="card card--price">
            <div class="card__block card__block--price">
              <p class="card__text table__head--text  ">
                Ремонтные услуги
              </p>
               <p class="card__text table__body--text  card__text--price">
                Диагностика
              </p>
               <p class="card__text table__head--text ">
               Цена
              </p>
               <p class="card__text table__body--text card__text--price">
                Бесплатно
              </p>
               <p class="card__text table__head--text ">
                Срок
              </p>
               <p class="card__text table__body--text card__text--price">
               30 мин	
              </p>

            </div>

            <button class=" btn btn--pink btn--oval btn--oval-arrow">Заказать</button>
              </div>
            </div>

            <div class="swiper-slide">
                <div class="card card--price">
            <div class="card__block card__block--price">
              <p class="card__text table__head--text  ">
                Ремонтные услуги
              </p>
               <p class="card__text table__body--text  card__text--price">
                Замена дисплея	
              </p>
               <p class="card__text table__head--text ">
               Цена
              </p>
               <p class="card__text table__body--text card__text--price">
                1 000 ₽	
              </p>
               <p class="card__text table__head--text ">
                Срок
              </p>
               <p class="card__text table__body--text card__text--price">
                30-120 мин
              </p>

            </div>

            <button class=" btn btn--pink btn--oval btn--oval-arrow">Заказать</button>
              </div>
            </div>

            <div class="swiper-slide">
                <div class="card card--price">
            <div class="card__block card__block--price">
              <p class="card__text table__head--text  ">
                Ремонтные услуги
              </p>
               <p class="card__text table__body--text  card__text--price">
               Замена полифонического динамика	
              </p>
               <p class="card__text table__head--text ">
               Цена
              </p>
               <p class="card__text table__body--text card__text--price">
                1 000 ₽	
              </p>
               <p class="card__text table__head--text ">
                Срок
              </p>
               <p class="card__text table__body--text card__text--price">
                30-120 мин
              </p>

            </div>

            <button class=" btn btn--pink btn--oval btn--oval-arrow">Заказать</button>
              </div>
            </div>

            <div class="swiper-slide">
                <div class="card card--price">
            <div class="card__block card__block--price">
              <p class="card__text table__head--text  ">
                Ремонтные услуги
              </p>
               <p class="card__text table__body--text  card__text--price">
                Тестирование с выдачей технического заключения
              </p>
               <p class="card__text table__head--text ">
               Цена
              </p>
               <p class="card__text table__body--text card__text--price">
                Бесплатно
              </p>
               <p class="card__text table__head--text ">
                Срок
              </p>
               <p class="card__text table__body--text card__text--price">
                30-120 мин
              </p>

            </div>

            <button class=" btn btn--pink btn--oval btn--oval-arrow">Заказать</button>
              </div>
            </div>


         

          </div>
          <!-- Элементы управления -->
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-pagination"></div>
        </div>

`
const Price720px = `
  <table class="table table--price">

          <thead class="table__head table__head--text">

            <tr class="table__row  ">
              <td class="table__repair">Ремонтные услуги</td>
              <td class="table__price">Цена</td>
              <td class="table__date">Срок</td>
              <td class="table__btn"></td>
            </tr>
          </thead>
          <tbody class="table__body table__body--text">

            <tr class="table__row">
              <td class="table__repair">Диагностика</td>
              <td class="table__price">Бесплатно</td>
              <td class="table__date">30 мин</td>
              <td class="table__btn">
                <button class=" btn btn--pink btn--oval btn--oval-arrow">Заказать</button>
              </td>
            </tr>
            <tr class="table__row">
              <td class="table__repair">Замена дисплея</td>
              <td class="table__price">1 000 ₽</td>
              <td class="table__date">30-120 мин</td>
              <td class="table__btn">
                 <button class=" btn btn--pink btn--oval btn--oval-arrow">Заказать</button>
              </td>
            </tr>
            <tr class="table__row">
              <td class="table__repair">Замена полифонического динамика</td>
              <td class="table__price">1 000 ₽</td>
              <td class="table__date">30-120 мин</td>
              <td class="table__btn"> 
                <button class=" btn btn--pink btn--oval btn--oval-arrow">Заказать</button>
              </td>
            </tr>
            
            <tr class="table__row">
              <td class="table__repair">Тестирование с выдачей технического заключения</td>
              <td class="table__price">1 000 ₽</td>
              <td class="table__date">30-120 мин</td>
              <td class="table__btn">
                 <button class=" btn btn--pink btn--oval btn--oval-arrow">Заказать</button>
              </td>
            </tr>

            <tr class="table__row">
              <td class="table__repair">Замена программного обеспечения</td>
              <td class="table__price">1 000 ₽</td>
              <td class="table__date">30-120 мин</td>
              <td class="table__btn"> 
                <button class=" btn btn--pink btn--oval btn--oval-arrow">Заказать</button>
              </td>
            </tr>

          </tbody>
        </table>
       
`

const price__block = document.querySelector('.price__block')

let mySwiper = null

// Функция для проверки и добавления контента
function addContentAtWidth() {
  if (mySwiper) {
    mySwiper.destroy(true, true)
    mySwiper = null
  }
  // Очищаем контейнер перед добавлением
  price__block.innerHTML = ''

  // Проверяем ширину viewport
  if (window.innerWidth <= 767) {
    price__block.innerHTML = Price320px

    // Инициализируем swiper--price
    const container = document.querySelector('.swiper--price')
    if (container) {
      import('../../js/swiper.js').then(({ default: initSwiper }) => {
        mySwiper = initSwiper('price')
      })
    }
  } else if (window.innerWidth >= 768) {
    price__block.innerHTML = Price720px
  }
}

// Запускаем при загрузке страницы
addContentAtWidth()

// Запускаем при изменении размера окна
window.addEventListener('resize', addContentAtWidth)
