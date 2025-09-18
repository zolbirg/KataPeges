const Service320px = `

        <div class="swiper swiper--service">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
             <div class="card card--service">
              <p class="card__text">
                Ремонт ноутбуков
              </p>
              <button class="btn btn--circle btn--bdr-pink btn--bg btn--bg-size--s btn--arrow-pink "></button>
            </div>
            </div>
            <div class="swiper-slide">
             <div class="card card--service">
              <p class="card__text">
                Ремонт планшетов 
              </p>
              <button class="btn btn--circle btn--bdr-pink btn--bg btn--bg-size--s btn--arrow-pink "></button>
            </div>
            </div>
            <div class="swiper-slide">
             <div class="card card--service">
              <p class="card__text">
               Ремонт ПК 
              </p>
              <button class="btn btn--circle btn--bdr-pink btn--bg btn--bg-size--s btn--arrow-pink "></button>
            </div>
            </div>
            <div class="swiper-slide">
             <div class="card card--service">
              <p class="card__text">
                Ремонт  мониторов 
              </p>
              <button class="btn btn--circle btn--bdr-pink btn--bg btn--bg-size--s btn--arrow-pink "></button>
            </div>
            </div>
            
          </div>
          <!-- Элементы управления -->
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-pagination"></div>
        </div>

`
const Service720px = `
    <div class="card card--service">
              <p class="card__text">
                Ремонт ноутбуков
              </p>
              <button class="btn btn--circle btn--bdr-pink btn--bg btn--bg-size--s btn--arrow-pink "></button>
            </div>
            <div class="card card--service">
              <p class="card__text">
                Ремонт планшетов
              </p>
              <button class="btn btn--circle btn--bdr-pink btn--bg btn--bg-size--s btn--arrow-pink "></button>
            </div>
            <div class="card card--service">
              <p class="card__text">
                Ремонт ПК
              </p>
              <button class="btn btn--circle btn--bdr-pink btn--bg btn--bg-size--s btn--arrow-pink "></button>
            </div>
            <div class="card card--service">
              <p class="card__text">
                Ремонт  мониторов
              </p>
              <button class="btn btn--circle btn--bdr-pink btn--bg btn--bg-size--s btn--arrow-pink "></button>
            </div>
            
            
`

const service__block = document.querySelector('.service__block')

let mySwiper = null

// функция для проверки и добавления контента
function addContentAtWidth() {
  if (mySwiper) {
    mySwiper.destroy(true, true)
    mySwiper = null
  }
  // очищаем контейнер перед добавлением
  service__block.innerHTML = ''

  // проверяем ширину viewport
  if (window.innerWidth <= 767) {
    service__block.innerHTML = Service320px

    // инициализируем swiper--service
    const container = document.querySelector('.swiper--service')
    if (container) {
      import('../../js/swiper.js').then(({ default: initSwiper }) => {
        mySwiper = initSwiper('service') 
      })
    }
  } else if (window.innerWidth >= 768) {
    service__block.innerHTML = Service720px
  }
}

// запускаем при загрузке страницы
addContentAtWidth()

// запускаем при изменении размера окна
window.addEventListener('resize', addContentAtWidth)


// изменение контента при нажитии на кнопку показать все
const showAllBtn = document.querySelector('.service > button');
if (showAllBtn) {
  showAllBtn.addEventListener('click', () => {
    service__block.classList.toggle('show-all');
    showAllBtn.textContent = service__block.classList.contains('show-all') ? 'Скрыть' : 'Показать все';
  });
}