/**
* Return x if b is 1 and y if b is 0
* @param {number} x
* @param {number} y
* @param {number} b
* @return {number}
*/
function oneOrZeroB(x, y, b) {
  const mask = -b;
  return (x & mask) | (y & ~mask);
}
