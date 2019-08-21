
/**
 * Segregates the values of the array so that all the Rs come first, Gs second, and Bs last
 * @param {string[]} colors
 */
function sortColors(colors) {
  let low = 0; // index of where 'R' should be replaced
  let high = colors.length - 1; // index of where 'B' should be replaced
  let curr = 0;

  while (curr <= high) {
    if (colors[curr] === 'R') {
      swap(colors, curr, low);
      low++;
      curr++;
    } else if (colors[curr] === 'B') {
      swap(colors, curr, high);
      high--;
    } else {
      curr++;
    }
  }
}

/**
 * Segregates the values of the array so that all the Rs come first, Gs second, and Bs last
 * @param {string[]} colors
 * @param {string} index1
 * @param {string} index2
 */
function swap(colors, index1, index2) {
  const temp = colors[index1];
  colors[index1] = colors[index2];
  colors[index1] = temp;
}
