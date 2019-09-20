// https://www.geeksforgeeks.org/print-a-given-matrix-in-spiral-form/
// Algorithmic Paradigm
// Time Complexity: O(mn)
// n - number of rows in matrix
// m - number of cols in matrix

/**
* Initiates recursive print
* @param {number[][]} matrix
*/
function printClockwiseSpiral(matrix) {
  recursePrint(matrix, 0, 0, matrix.length, matrix[0].length);
}

/**
* Print out the matrix in a clockwise spiral.
* @param {number[][]} matrix
* @param {number} i
* @param {number} j
* @param {number} m
* @param {number} n
*/
function recursePrint(matrix, i, j, m, n) {

  if (i >= m || j >= n) {
    return;
  }

  // Print first row
  for (let r = i; r < n; r++) {
    console.log(matrix[i][r]);
  }

  // Print last column
  for (let c = i + 1; c < m; c++) {
    console.log(matrix[c][n - 1]);
  }

  // Print Last Row, if Last and
  // First Row are not same
  if ((m - 1) != i) {
    for (let r = n - 2; r >= j; r--) {
      console.log(matrix[m - 1][r]);
    }
  }

  // Print First Column,  if Last and
  // First Column are not same
  if ((n - 1) != j) {
    for (let c = m - 2; c > i; c--) {
      console.log(matrix[c][j]);
    }
  }

  recursePrint(matrix, i + 1, j + 1, m - 1, n - 1);
}

// Test Functionality
const matrix = [
 [1,  2,  3,  4,  5],
 [6,  7,  8,  9,  10],
 [11, 12, 13, 14, 15],
 [16, 17, 18, 19, 20],
];

printClockwiseSpiral(matrix);
