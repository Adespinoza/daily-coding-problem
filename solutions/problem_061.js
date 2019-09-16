// https://www.geeksforgeeks.org/write-a-c-program-to-calculate-powxn/
// Time Complexity: O(n)
// Space Complexity: O(1)
// Algorithmic Paradigm: Divide and conquer.

/**
* Integer exponentiation w/o pow(...)
* @param {number} x
* @param {number} y
* @return {number}
*/
function power(x, y) {
  let temp = 0;

  if (x === 1) return y;
  if (x === 0) return 0;
  if (y === 0) return 1;
  if (y === 1) return x;
  if (y === -1) return 1 / x;

  // Recurse for half of y
  if (y < 0) temp = power(x, Math.round(y / 2));
  if (y > 0) temp = power(x, Math.floor(y / 2));

  if (y % 2 === 0) {
    return temp * temp;
  } else {
    if (y > 0) {
      return x *  temp * temp;
    } else {
      return (temp * temp) / x;
    }
  }
}

console.log(power(2, 10));	// 1024
console.log(power(2, -10));	// 0.009765
console.log(power(2, 0));	// 1
console.log(power(2, 1));	// 2
console.log(power(2, -1)); // 0.5
