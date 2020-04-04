/**
 * Turn ordinary fractions into Egyptian fraction (a < b)
 * @param {string} exp - string representation of a fraction
 */
function printEgyptianNum(exp) {
  let [numerator, denominator] = exp.split('/');
  const denomList = [];

  while (numerator !== 0) {
    const x = Math.ceil(denominator / numerator);
    denomList.push(x);
    numerator = x * numerator - denominator;
    denominator *= x;
  }

  return formStr(denomList);
}

/**
 * Helper function to form Egyptian fraction
 * @param {string[]} list
 */
function formStr(list) {
  let str = '';
  for (let i = 0; i < list.length - 1; i++) {
    str += `1 / ${list[i]} + `;
  }
  str += `1 / ${list[list.length - 1]}`;
  return str;
}

console.log(printEgyptianNum('1 / 2')); // 1 / 2
console.log(printEgyptianNum('4 / 13')); // 1 / 4 + 1 / 18 + 1 / 468
console.log(printEgyptianNum('6 / 14')); // 1 / 3 + 1 / 11 + 1 / 231
console.log(printEgyptianNum('2 / 3')); // 1 / 2 + 1 / 6
console.log(printEgyptianNum('12 / 13')); // 1 / 2 + 1 / 3 + 1 / 12 + 1 / 156
