/**
 * Determine if a 32-bit integer is a power of four
 * https://stackoverflow.com/a/19611541/8650340
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfFour(n) {
  return (n & -n & 0x55555554) === n;
}

console.log(isPowerOfFour(1)); // false
console.log(isPowerOfFour(4)); // true
console.log(isPowerOfFour(16)); // true
console.log(isPowerOfFour(64)); // true
console.log(isPowerOfFour(256)); // true
