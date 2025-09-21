import { modalIsActive } from '../../pageStyle/modal/modal.js';
import { sideMenuIsActive } from '../../pageStyle/sideMenu/sideMenu.js';


// Обработка событий через data-атрибуты
document.querySelectorAll('[data-action]').forEach(element => {
  element.addEventListener('click', (e) => {
    e.preventDefault();
    const action = e.currentTarget.getAttribute('data-action');
    const type = e.currentTarget.getAttribute('data-type');

    switch (action) {
      case 'open-modal':
        modalIsActive(type);
        break;
      case 'close-modal':
        modalIsActive(); 
        break;
      case 'open-side-menu':
        sideMenuIsActive(true);
        break;
      case 'close-side-menu':
        sideMenuIsActive(false);
        break;
    }
  });
});



