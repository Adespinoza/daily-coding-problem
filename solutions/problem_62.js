// https://leetcode.com/problems/unique-paths/description/
// Algorithmic Paradigm: Dynamic Programming
// O(NM) Time complexity
// O(NM) Space complexity

/**
* Count number of paths using right & down
* @param {number} N
* @param {number} M
* @return {number}
*/
function findPathCount(n, m) {
  if (n <= 0 || m <= 0) return 0;
  if (n === 1 || m === 1) return 1;

  const filledArray = new Array(n).fill(0).map(() => Array(m).fill(0));

  for (let r = 0; r < filledArray.length; r++) {
    filledArray[0][r] = 1;
  }

  for (let c = 0; c < filledArray[0].length; c++) {
    filledArray[c][0] = 1;
  }

  for (let r = 1; r < filledArray.length; r++) {
    for (let c = 1; c < filledArray[r].length; c++) {
      filledArray[r][c] = filledArray[r - 1][c] + filledArray[r][c - 1];
    }
  }

  return filledArray[n - 1][m - 1];
}

console.log(findPathCount(10, 10));	// 48620
console.log(findPathCount(5, 5));	// 70
console.log(findPathCount(2, 2));	// 2
console.log(findPathCount(1, 2));	// 1
