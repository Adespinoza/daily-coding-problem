// https://leetcode.com/problems/sudoku-solver/description/
// Algorithmic Paradigm: Backtracking
// O(9 ^ M) Time complexity
// O(M) Space complixity
// M is the number of empty squares in the sudoku board

/**
* Soduku Solver
* @param {number[][]} board
*/
function solve(board) {
  calculate(board);
}

/**
* Calculates possible outcomes on board
* @param {number[][]} board
*/
function calculate(board) {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (board[row][col] !== '.') continue;

      // Check possible layout
      for(let i = 1; i <= 9; i++) {
        const num = String(i);
        // Check validity
        if(isValid(board, row, col, num)) {
          board[row][col] = num;

          if(calculate(board)) return true;
          board[row][col] = '.';
        }
      }
      return false;
    }
  }
  return true;
}

/**
* Checks if 3x3 subgrid contains all digits from 1 to 9
* @param {number[][]} board
* @param {number} row
* @param {number} col
* @param {number} num
*/
function isValid(board, row, col, num) {
  let regionRow = 3 * Math.floor(row / 3);
  let regionCol = 3 * Math.floor(col / 3);

  for(let i = 0; i < 9; i++) {
    if(board[i][col] === num) return false;
    if(board[row][i] === num) return false;

    let squareRow = regionRow + Math.floor(i / 3);
    let squareCol = regionCol + (i % 3);
    // Check before moving on
    if(board[squareRow][squareCol] === num) return false;
  }
  return true;
}

const sudoku = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]

solve(sudoku);
console.log(sudoku);
