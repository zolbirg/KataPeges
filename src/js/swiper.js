// Импортируем Swiper и нужные модули (если используются)
import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'

// Импортируем стили Swiper
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// Инициализация слайдера
export default function initSwiper(val) {

  const container = document.querySelector(`.swiper--${val}`)
  
  if (!container) return null

  // Удаление старого Swiper (если существует)
  if (container.swiper) {
    container.swiper.destroy(true, true)
  }

  switch (val) {
    case 'brand': {
      return new Swiper(container, {
        modules: [Navigation, Pagination],
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        }
      })
    }
    case 'service': {
      return new Swiper(container, {
        modules: [Navigation, Pagination],
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        }
      })
    }
  }
}
