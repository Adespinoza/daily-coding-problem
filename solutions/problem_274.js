/**
 * Convert and calculate a mathematical string
 * @param {string} str
 */
function calculate(str) {
  return new Function(`return ${str.split('').join('')}`)();
}

console.log(calculate('-1 + (2 + 3)')); // 4
console.log(calculate('-1 + ((2 + 3) - 3)')); // 1
console.log(calculate('5 + 4 - 3 + 2')); // 8
