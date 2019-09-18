// Algorithmic Paradigm:
// O(MN) Time complexity
// O(1) Space complexity
// M is number of rows in board and N is the number of columns in board

/**
 * Returns whether the word can be found in the matrix by going left to right or up to down
 * @param {char[][]} board
 * @param {string} word
 * @return {boolean}
*/
function findWord(board, word) {
  if (word.length > board.length && word.length > board[0].length) return false;

  let index = 0;

  // Iterate through board (ROW check)
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      if (index  === word.length) return true;

      const currLetter = board[r][c];

      // Check currLetter vs word index
      if (currLetter === word.charAt(index)) {
        index += 1;
      } else {
        index = 0;
        if (currLetter === word.charAt(index)) {
          index = 1;
        }
      }
    }

    // Check word count + reset counter to move to next row
    if (index === word.length) return true;
    index = 0;
  }

  index = 0;

  // Iterate through board (COL check)
  for (let c = 0; c < board[0].length; c++) {
    for (let r = 0; r < board.length; r++) {
      if (index  === word.length) return true;

      const currLetter = board[r][c];

      // Check currLetter vs word index
      if (currLetter === word.charAt(index)) {
        index += 1;
      } else {
        index = 0;
        if (currLetter === word.charAt(index)) {
          index = 1;
        }
      }
    }
  }

  return false;
}

const board = [
 ['F', 'A', 'C', 'I'],
 ['O', 'B', 'Q', 'P'],
 ['A', 'N', 'O', 'B'],
 ['M', 'A', 'S', 'S'],
];

console.log(findWord(board, 'FOAM')); // True
console.log(findWord(board, 'MASS')); // True
console.log(findWord(board, 'Potato')); // False
console.log(findWord(board, 'PA')); // False
console.log(findWord(board, '')); // True
