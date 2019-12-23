/**
 * Return num ways to reach the bottom right corner
 * @param  {number[][]} matrix
 * @return {number}
 */
function countNumPaths(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 1) {
        matrix[i][j] = 0;
      } else if (i === 0 && j === 0) {
        matrix[0][0] = 1;
      } else {
        matrix[i][j] =
          (i > 0 ? matrix[i - 1][j] : 0) + (j > 0 ? matrix[i][j - 1] : 0);
      }
    }
  }

  return matrix[m - 1][n - 1];
}

const matrix = [[0, 0, 1], [0, 0, 1], [1, 0, 0]];

console.log(countNumPaths(matrix)); // 2
