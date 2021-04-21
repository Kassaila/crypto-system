import preloading from '@js/modules/preloader';
import headerMenu from '@js/modules/header-menu';
import details from '@js/modules/details';
import dropdown from '@js/modules/dropdown';
import colorTheme from '@js/modules/color-theme';

window.addEventListener('load', () => {
  preloading();
  headerMenu();
  details();
  dropdown();
  colorTheme();
});
