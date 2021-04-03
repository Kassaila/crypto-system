import preloading from '@js/modules/preloader';
import headerMenu from '@js/modules/header-menu';
import details from '@js/modules/details';

window.addEventListener('load', () => {
  preloading();
  headerMenu();
  details();
});
