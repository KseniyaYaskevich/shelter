const menu = () => {
  const pageBody = document.querySelector('.page__body');
  const navMain = pageBody.querySelector('.main-nav');
  const navToggle = navMain.querySelector('.main-nav__toggle');
  const mainNavList = navMain.querySelector('.main-nav__list');

  const closeMenu = () => {
    pageBody.classList.remove('page__body--lock');
    navMain.classList.remove('main-nav--opened');
  };

  const onNavToggleClick = () => {
    pageBody.classList.toggle('page__body--lock');
    navMain.classList.toggle('main-nav--opened');
  };

  const onMainNavListClick = (evt) => {
    const id = evt.target.getAttribute('href');
    const section = document.querySelector(id);

    if (id != null && id.startsWith('#')) {
      evt.preventDefault();
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      closeMenu();
    }
  };

  navToggle.addEventListener('click', onNavToggleClick);
  mainNavList.addEventListener('click', onMainNavListClick);

  document.addEventListener('click', (evt) => {
    if (navMain.classList.contains('main-nav--opened')) {
      if (evt.target.classList.contains('main-nav--opened')) {
        closeMenu();
      }
    }
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 27 || evt.key === "Escape" || evt.key === "Esc") {
      closeMenu();
    }
  });
};

export default menu;
