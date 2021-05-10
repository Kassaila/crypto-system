import media from '@js/constants/css-media';
import setCssValue from '@js/helpers/set-css-vars';

const $expander = document.querySelector('[data-landing-expander]');
const $menu = document.querySelector('[data-landing-menu]');
const $header = document.querySelector('[data-landing-header]');
const $body = document.querySelector('body');

function updateHeaderSize() {
  setCssValue('--landing-header-width', $header.clientWidth, 'px');
  setCssValue('--landing-header-height', $header.clientHeight, 'px');
}

function toggleMenu() {
  if ($expander.attributes['aria-expanded']?.value === 'false') {
    $expander.setAttribute('aria-expanded', 'true');
    $menu.setAttribute('data-expanded', 'true');
    $body.classList.add('fixed');
  } else {
    $expander.setAttribute('aria-expanded', 'false');
    $menu.setAttribute('data-expanded', 'false');
    $body.classList.remove('fixed');
  }
}

const resizeObserver = new ResizeObserver(() => {
  updateHeaderSize();

  if ($header.clientWidth >= media.md && $menu.attributes['data-expanded']?.value === 'true') {
    toggleMenu();
  }
});

function listeners() {
  $expander.addEventListener('click', () => {
    toggleMenu();
  });

  resizeObserver.observe($header);
}

function init() {
  if (!$expander) return;

  updateHeaderSize();
  listeners();
}

export default init;
