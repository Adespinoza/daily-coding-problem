/**
 * Given a NxN matrix, rotate it by 90 degrees clockwise
 * @param  {number[][]} matrix
 * @return {number[][]}
 */
function rotateMatrix(matrix) {
  // base case
  if (matrix.length === 0 || matrix[0].length === 0) return [];

  const n = matrix.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      // swap elements
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
    matrix[i] = matrix[i].reverse();
  }

  return matrix;
}

const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(rotateMatrix(matrix));
