/**
 * @function getCssValue
 * @param {string} variable
 * @param {HTMLElement} el
 * @returns {string}
 * @description get CSS custom property and return value
 */
function getCssValue(variable, el = document.documentElement) {
  return window.getComputedStyle(el).getPropertyValue(variable);
}

/**
 * @function getCssValueNum
 * @param {string} variable
 * @param {string} units
 * @returns {number}
 * @description get CSS custom property and return value as number
 */
function getCssValueNum(variable, units, el) {
  return Number(getCssValue(variable, el).replace(units, ''));
}

export { getCssValue, getCssValueNum };
