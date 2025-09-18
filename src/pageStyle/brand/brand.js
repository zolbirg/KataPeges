
const Brand320px = `
                    <!-- Slider main container -->
        <div class="swiper swiper--brand">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="card">
                <span class="card__img card__img--lenovo"></span>
                <button class="btn btn--circle btn--bdr-pink btn--bg btn--bg-size--s btn--arrow-pink "></button>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="card">
                <span class="card__img card__img--samsung"></span>
                <button class="btn btn--circle btn--bdr-pink btn--bg btn--bg-size--s btn--arrow-pink "></button>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="card">
                <span class="card__img card__img--apple"></span>
                <button class="btn btn--circle btn--bdr-pink btn--bg btn--bg-size--s btn--arrow-pink "></button>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="card">
                <span class="card__img card__img--viewSonic"></span>
                <button class="btn btn--circle btn--bdr-pink btn--bg btn--bg-size--s btn--arrow-pink "></button>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="card">
                <span class="card__img card__img--bosch"></span>
                <button class="btn btn--circle btn--bdr-pink btn--bg btn--bg-size--s btn--arrow-pink "></button>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="card">
                <span class="card__img card__img--hp"></span>
                <button class="btn btn--circle btn--bdr-pink btn--bg btn--bg-size--s btn--arrow-pink "></button>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <span class="card__img card__img--acer"></span>
                <button class="btn btn--circle btn--bdr-pink btn--bg btn--bg-size--s btn--arrow-pink "></button>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <span class="card__img card__img--sony"></span>
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

const Brand720px = `
 <div class="card">
            <span class="card__img card__img--lenovo"></span>
            <button class="btn btn--circle btn--bdr-pink btn--bg btn--bg-size--s btn--arrow-pink "></button>
          </div>
          <div class="card">

            <span class="card__img card__img--samsung"></span>
            <button class="btn btn--circle btn--bdr-pink btn--bg btn--bg-size--s btn--arrow-pink "></button>
          </div>
          <div class="card">

            <span class="card__img card__img--apple"></span>
            <button class="btn btn--circle btn--bdr-pink btn--bg btn--bg-size--s btn--arrow-pink "></button>
          </div>
          <div class="card">

            <span class="card__img card__img--viewSonic"></span>
            <button class="btn btn--circle btn--bdr-pink btn--bg btn--bg-size--s btn--arrow-pink "></button>
          </div>
          <div class="card">

            <span class="card__img card__img--bosch"></span>
            <button class="btn btn--circle btn--bdr-pink btn--bg btn--bg-size--s btn--arrow-pink "></button>
          </div>
          <div class="card">

            <span class="card__img card__img--hp"></span>
            <button class="btn btn--circle btn--bdr-pink btn--bg btn--bg-size--s btn--arrow-pink "></button>
          </div>
          <div class="card">

            <span class="card__img card__img--acer"></span>
            <button class="btn btn--circle btn--bdr-pink btn--bg btn--bg-size--s btn--arrow-pink "></button>
          </div>
          <div class="card">

            <span class="card__img card__img--sony"></span>
            <button class="btn btn--circle btn--bdr-pink btn--bg btn--bg-size--s btn--arrow-pink "></button>
          </div> 


`

const brand__block = document.querySelector('.brand__block')

let mySwiper = null

// Функция для проверки и добавления контента
function addContentAtWidth() {
  if (mySwiper) {
    mySwiper.destroy(true, true)
    mySwiper = null
  }
  // Очищаем контейнер перед добавлением
  brand__block.innerHTML = ''

  // Проверяем ширину viewport
  if (window.innerWidth <= 767) {
    brand__block.innerHTML = Brand320px
    
    // Инициализируем swiper--brand 
    const container = document.querySelector('.swiper--brand')
    if (container) {
      import('../../js/swiper.js').then(({ default: initSwiper }) => {
        mySwiper = initSwiper('brand') 
      })
    }
  } else if (window.innerWidth >= 768) {
    brand__block.innerHTML = Brand720px;
  }
}

// Запускаем при загрузке страницы
addContentAtWidth()

// Запускаем при изменении размера окна
window.addEventListener('resize', addContentAtWidth)

// изменение контента при нажитии на кнопку показать все
const showAllBtn = document.querySelector('.brand > button');
if (showAllBtn) {
  showAllBtn.addEventListener('click', () => {
    brand__block.classList.toggle('show-all');
    showAllBtn.textContent = brand__block.classList.contains('show-all') ? 'Скрыть' : 'Показать все';
  });
}