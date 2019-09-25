// https://www.geeksforgeeks.org/n-th-number-whose-sum-of-digits-is-ten/
// Algorithmic Paradigm: Mathematical
// O(1) Time complexity
// O(1) Space complexity

/**
* Given a positive integer n, return the n-th perfect number.
* @param {number} n
* @return {number}
*/
function findPerfectNum(n) {
  let nElement = 19 + (n - 1) * 9;
  let outliersCount = Math.floor(Math.log10(nElement)) - 1;

  // Find perfect number
  nElement += 9 * outliersCount;
  return nElement;
}

console.log(findPerfectNum(1)); // 19
console.log(findPerfectNum(2)); // 28
console.log(findPerfectNum(3)); // 37
console.log(findPerfectNum(10)); // 109
