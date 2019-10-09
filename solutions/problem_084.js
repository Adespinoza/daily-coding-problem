// https://leetcode.com/problems/number-of-islands/
//
// O(MN) Time complexity
// O(P) Space complexity
// M is number of rows in matrix, N is the number of columns in matrix, P is the number of islands in matrix

/**
* Returns the number of islands in the matrix
* @param {number[][]} matrix
* @return {number}
*/
function countNumIsland(matrix) {
  return countIslandDFS(matrix);
}

/**
* Finds count using DFS
* @param {number[][]} matrix
* @return {number}
*/
function countIslandDFS(matrix) {
  let count = 0;
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < metrix[r].length; c++) {
      if (matrix[r][c] === 1) {
        islandCountHelper(matrix, r, c);
      }
    }
  }
}

/**
* Depth first search helper function
* @param {number[][]} matrix
* @param {number} r
* @param {number} c
* @return {number}
*/
function islandCountHelper(matrix, r, c) {
  if (r < 0 || c < 0 || r >= matrix.length || c >= matrix[0].length) return;
  if (matrix[r][c] === 0) return;

  // set to visited
  matrix[r][c] = 0;
  islandCountHelper(matrix, r - 1, c);
  islandCountHelper(matrix, r + 1, c);
  islandCountHelper(matrix, r, c - 1);
  islandCountHelper(matrix, r, c + 1);
}
