/**
 * This function returns the given array padded with the given fill element until
 * the array has the given minimum size.
 *
 * @param {Array} array The array to pad.
 * @param {Integer} minSize The minimum size of the array.
 * @param {Any} value The value to pad with.
 * @returns {Array} The padded array.
 */
const pad = (array, minSize, value = null) => {
  if (minSize <= array.length) return array;

  return array.concat(Array(minSize - array.length).fill(value));
};

module.exports = { pad };
