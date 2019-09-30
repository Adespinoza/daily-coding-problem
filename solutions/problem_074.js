// https://www.geeksforgeeks.org/search-in-row-wise-and-column-wise-sorted-matrix/
// Algoritmic Paradigm: Mathematics
// O(N) Time complexity
// O(1) Space complexity

/**
 * Returns the number of times x appears as a value in an N by N multipliation table
 * @param {number} n
 * @param {number} x
 * @return {number}
 */
function multiplicationTable(n, x) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (x % i === 0 && x / i <= n) {
      count++;
    }
  }

  return count;
}
