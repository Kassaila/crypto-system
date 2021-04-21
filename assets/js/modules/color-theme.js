const $colorThemeBtn = document.querySelector('[data-color-theme-toggler]');
const $html = document.querySelector('html');

function _eventListener() {
  $colorThemeBtn.addEventListener('click', () => {
    const colorTheme = $html.getAttribute('data-color-theme');
    switch (colorTheme) {
      case 'dark':
        $html.setAttribute('data-color-theme', 'light');
        break;
      case 'light':
         $html.setAttribute('data-color-theme', 'dark');
        break;
      default:
        break;
    }
  ;
  });
}

function init() {
  if (!$colorThemeBtn) return;

  _eventListener();
}

export default init;
