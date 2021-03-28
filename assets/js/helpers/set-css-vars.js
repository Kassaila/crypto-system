/**
 * @function setCssValue
 * @description Set value to CSS custom property
 */
function setCssValue(variable, value, unit, el = document.documentElement) {
  el.style.setProperty(variable, `${value}${unit}`);
}

export default setCssValue;
