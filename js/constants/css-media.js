import { getCssValueNum } from '@js/helpers/get-css-vars';

const media = {
  xlg: getCssValueNum('--xlg', 'px'),
  lg: getCssValueNum('--lg', 'px'),
  md: getCssValueNum('--md', 'px'),
  sm: getCssValueNum('--sm', 'px'),
  xs: getCssValueNum('--xs', 'px'),
};

export default media;
