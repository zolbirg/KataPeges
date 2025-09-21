// логика для модального окна
const modal = document.querySelector('.modal');
export function modalIsActive(value) {

// добавляем/удаляем класс для блокировки скролла
  if (value === "message" || value === "call") {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }
  
// основная логика для модального окна
  if (value === "message") {
    modal.classList.add("open");
    modal.classList.remove("close");

    const title = document.querySelector('.title__text--modal');
    const content = document.querySelector('.modal__content');

    title.textContent = 'Обратная связь';
    content.innerHTML = `
      <div class="modal__feedback">
      <form class="modal__form" action="#" method="get" >
        <input class="input input--custom" type="text" name="name" placeholder="Имя" required>
        <input class="input input--custom" type="text" name="phone" placeholder="Телефон" required>
        <input class="input input--custom" type="text" name="mail" placeholder="Электронная почта" required>
        <textarea class="input input--custom" placeholder="Сообщение" cols="10" rows="10" maxlength="500" required></textarea>
      </form>
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
       <form class="modal__form" action="#" method="get" >
        <input class="input input--custom" type="text"  name="name" placeholder="Телефон" required>
        </form>
      </div>
    `;
  } else {
    modal.classList.add("close");
    modal.classList.remove("open");
  }
}

// Закрытие модального окна при клике на overlay
const modalLayout = modal.querySelector('.modal__layout');
modalLayout.addEventListener('click', (e) => {
  if (e.target === modalLayout) {
    modalIsActive(); // Вызов функции закрытия
  }
});