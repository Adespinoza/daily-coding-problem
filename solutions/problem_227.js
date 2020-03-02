/* eslint no-restricted-syntax: ["error", "FunctionExpression", "WithStatement", "BinaryExpression[operator='in']"] */

/**
 * Implementation of a Boggle Solver
 * @param {string[][]} board
 * @param {string[]} words
 */
function boggleSolver(board, words) {
  const root = {};
  const result = [];

  for (const word of words) {
    let node = root;
    word.split('').forEach(val => {
      if (!node[val]) node[val] = {};
      node = node[val];
    });
    node.word = word;
  }

  const backtracking = (row, col, node) => {
    const dRow = [+1, 0, -1, 0];
    const dCol = [0, +1, 0, -1];

    if (node.word) {
      result.push(node.word);
      node.word = null;
    }

    const backup = board[row][col];
    board[row][col] = '#';
    for (let i = 0; i < dRow.length; i++) {
      const nextR = row + dRow[i];
      const nextC = col + dCol[i];
      if (
        nextR >= 0 &&
        nextR < board.length &&
        nextC >= 0 &&
        nextC < board[0].length
      ) {
        const c = board[nextR][nextC];
        if (node[c]) {
          backtracking(nextR, nextC, node[c]);
        }
      }
    }
    board[row][col] = backup;
  };

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      const char = board[r][c];
      if (root[char]) {
        backtracking(r, c, root[char]);
      }
    }
  }

  return result;
}

const boggleBoard = [
  ['o', 'a', 'a', 'n'],
  ['e', 't', 'a', 'e'],
  ['i', 'h', 'k', 'r'],
  ['i', 'f', 'l', 'v']
];

const dictionary = ['oath', 'pea', 'eat', 'rain'];

console.log(boggleSolver(boggleBoard, dictionary)); // ['eat', 'oath']
