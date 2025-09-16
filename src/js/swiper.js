// Импортируем Swiper и нужные модули (если используются)
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

// Импортируем стили Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Инициализация слайдера
const swiper = new Swiper('.swiper--brand', {
  modules: [Navigation, Pagination],
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
});
