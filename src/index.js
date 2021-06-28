import items from '../menu.json';
import makeMarkup from '../src/templates/menu.hbs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  bodyEl: document.querySelector('body'),
  menuEl: document.querySelector('.js-menu'),
  inputEl: document.querySelector('#theme-switch-toggle'),
};
refs.inputEl.addEventListener('change', onCheckBoxChange);

// Создание меню
function markupMenu() {
  const markup = items.map(makeMarkup).join(' ');
  refs.menuEl.insertAdjacentHTML('beforeend', markup);
}
markupMenu();

// Изменение цвета темы
function onCheckBoxChange(e) {
  const themeName = e.target.checked ? Theme.DARK : Theme.LIGHT;
  const themeNameLight = e.target.checked ? Theme.LIGHT : Theme.DARK;
  refs.bodyEl.classList.add(themeName);
  refs.bodyEl.classList.remove(themeNameLight);
  localStorage.setItem('Theme', themeName);
}
function initTheme() {
  const currentTheme = localStorage.getItem('Theme') || Theme.LIGHT;
  refs.bodyEl.classList.add(currentTheme);
  if (currentTheme === Theme.DARK) refs.inputEl.checked = true;
}
initTheme();
