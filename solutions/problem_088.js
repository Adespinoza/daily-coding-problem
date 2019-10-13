/**
* Returns quotient (ignoring remainder)
* @param {number} a
* @param {number} b
* @return {number}
*/
function division(a, b) {
  if (b === 0) return null;
  if (a === 1 || a === 0) return a;

  let sign = (a > 0 && b < 0 || a < 0 && b > 0);

  let count = 0;
  a = Math.abs(a);
  b = Math.abs(b);

  while (a >= b) {
    count++;
    a -= b;
  }

  return sign ? -1 * count : count;
}
