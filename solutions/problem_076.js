// O(NM) Time complexity
// O(1) Space complexity

/**
 * Returns the minimum number of columns that can be removed to ensure that each row is ordered from top to bottom lexicographically
 * @param {char[][]} matrix
 */
function colRemoved(matrix) {
  if (matrix.length === 0 || matrix.length === 1) return 0;
  let count = 0;
  for (let c = 0; c < matrix[0].length; c++) {
    for (let r = 0; r < matrix.length - 1; r++) {
      const char = matrix[r][c];
      const nextChar = matrix[r + 1][c];
      if (char.localeCompare(nextChar) > 0) {
        count++;
        break;
      }
    }
  }
  return count;
}