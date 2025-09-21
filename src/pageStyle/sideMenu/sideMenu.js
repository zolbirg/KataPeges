
const sideMenu = document.querySelector('.side-menu');

// Логика для сайд-меню
export function sideMenuIsActive(value) {
  if (value) {
    sideMenu.classList.add("open");
    sideMenu.classList.remove("close");
  } else {
    sideMenu.classList.add("close");
    sideMenu.classList.remove("open");
  }
}
