/**
 * @function setCssValue
 * @param {string} variable
 * @param {number|string} value
 * @param {string} unit
 * @param {HTMLElement} el
 * @returns {void}
 * @description Set value to CSS custom property
 */
function setCssValue(variable, value, unit, el = document.documentElement) {
  el.style.setProperty(variable, `${value}${unit}`);
}

export default setCssValue;
