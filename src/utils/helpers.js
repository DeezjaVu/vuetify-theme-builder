/**
 * HELPER FUNCTIONS
 *
 * Code borrowed from Vuetify to prevent things from braking
 * when the Vuetify repo gets updated.
 *
 * Original code: node_modules\vuetify\lib\util\helpers.js
 * Github: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/util/helpers.ts
 */

/**
 * Checks if an object has a specified key path.
 *
 * @param {Object} obj The object to check.
 * @param {Array<string>} key The key path to check.
 * @returns {boolean} True if the object has the specified key path.
 */
export function has(obj, key) {
  // Using Object.prototype.hasOwnProperty may break reactivity in Vue.
  // So to avoid that, keep the original obj.hasOwnProperty here and ignore the eslint error.
  // return key.every((k) => Object.prototype.hasOwnProperty.call(obj, k));
  return key.every((k) => obj.hasOwnProperty(k));
}

/**
 * Pads the given string with a character until it reaches the specified length.
 *
 * @param {string} str The string to pad.
 * @param {number} length The desired length of the string.
 * @param {string} [char="0"] The character used to pad the string.
 * @returns {string} The padded string.
 */
export function padEnd(str, length) {
  let char = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "0";
  return str + char.repeat(Math.max(0, length - str.length));
}

/**
 * Chunks a given string into an array of substrings of a specified size.
 *
 * @param {string} str The string to chunk.
 * @param {number} [size=1] The size of each chunk.
 * @returns {string[]} An array of substrings.
 */
export function chunk(str) {
  let size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  const chunked = [];
  let index = 0;
  while (index < str.length) {
    chunked.push(str.substr(index, size));
    index += size;
  }
  return chunked;
}

/**
 * Clamps the given value between a minimum and maximum value.
 *
 * @param {number} value The value to clamp.
 * @param {number} [min=0] The minimum value.
 * @param {number} [max=1] The maximum value.
 * @returns {number} The clamped value.
 */
export function clamp(value) {
  let min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  let max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  return Math.max(min, Math.min(max, value));
}
