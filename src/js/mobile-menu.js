const headerRefs = {
  body:document.querySelector('body'),
  menuBtn: document.querySelector('[data-menu-btn]'),
  menu: document.querySelector('[data-menu]'),
  logo: document.querySelector('.site-header__logo'),
  iconClose: document.querySelector('#icon-close'),
  iconMenu: document.querySelector('#icon-menu'),
};

headerRefs.menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  Object.values(headerRefs)
    .slice(0, 4)
    .forEach(el => el.classList.toggle('is-open'));

  headerRefs.iconClose.classList.toggle('visually-hidden');
  headerRefs.iconMenu.classList.toggle('visually-hidden');
}
