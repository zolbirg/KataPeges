import './btn.scss'

const modal = document.querySelector('.modal');
const sideMenu = document.querySelector('.side-menu');

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

// Логика для модального окна
function modalIsActive(value) {
  if (value === "rep") {
    modal.classList.add("open");
    modal.classList.remove("close");

    const title = document.querySelector('.title__text--modal');
    const content = document.querySelector('.modal__content');

    title.textContent = 'Обратная связь';
    content.innerHTML = `
      <div class="modal__feedback">
        <input class="input input--custom" type="text" placeholder="Имя">
        <input class="input input--custom" type="text" placeholder="Телефон">
        <input class="input input--custom" type="text" placeholder="Электронная почта">
        <textarea class="input input--custom" placeholder="Сообщение" cols="10" rows="10" maxlength="500" required></textarea>
      </div>
    `;
  } else if (value === "call") {
    modal.classList.add("open");
    modal.classList.remove("close");

    const title = document.querySelector('.title__text--modal');
    const content = document.querySelector('.modal__content');

    title.textContent = 'Заказать звонок';
    content.innerHTML = `
      <div class="modal__call">
        <input class="input input--custom" type="text" placeholder="Телефон">
      </div>
    `;
  } else {
    modal.classList.add("close");
    modal.classList.remove("open");
  }
}

// Логика для сайд-меню
function sideMenuIsActive(value) {
  if (value) {
    sideMenu.classList.add("open");
    sideMenu.classList.remove("close");
  } else {
    sideMenu.classList.add("close");
    sideMenu.classList.remove("open");
  }
}
