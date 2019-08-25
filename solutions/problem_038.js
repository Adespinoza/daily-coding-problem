/**
 * @param {number} n
 * @return {string[][]}
 */
function solveNQueens(n) {
  const solutions = [];
  explore(n, solutions, 0, []);
  return solutions.map(solution =>
    solution.map(col => '.'.repeat(col) + 'Q' + '.'.repeat(n - col - 1))
  );
}

/**
 * @param {number[]} colPlacements
 * @param {number} col
 * @return {boolean}
 */
function isValid(colPlacements, col) {
  for (let row = 0; row < colPlacements.length; row++) {
    const diffX = Math.abs(colPlacements[row] - col);
    const diffY = colPlacements.length - row;

    if (!diffX || diffX === diffY) { // same column or diagonal
      return false;
    }
  }

  return true;
}

/**
 * @param {number} n
 * @param {number[][]} solutions
 * @param {number} row
 * @param {number[]} colPlacements
 * @return {void}
 */
function explore(n, solutions, row, colPlacements) {
  if (row === n) {
    return solutions.push(colPlacements.slice());
  }

  for (let col = 0; col < n; col++) {
    if (!isValid(colPlacements, col)) {
      continue;
    }

    colPlacements.push(col);
    explore(n, solutions, row + 1, colPlacements);
    colPlacements.pop();
  }
}