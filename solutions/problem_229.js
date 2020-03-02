/**
 * Smallest number of turns it takes to play Snakes & Ladders
 * Time Complexity: O(n^2)
 * @param {number[]} board
 * @return {number}
 */
function snakesAndLadders(board) {
  const N = board.length;
  const minDistance = { 1: 0 };
  const queue = [1];

  while (queue.length) {
    const currentPosition = queue.shift();

    if (currentPosition === N * N) {
      return minDistance[currentPosition];
    }

    const nextPossibleMoves = Math.min(6, N * N - currentPosition) + 1;

    for (let roll = 1; roll < nextPossibleMoves; roll++) {
      let nextPosition = currentPosition + roll;

      const [r, c] = getBoardCoordinates(nextPosition, N);

      if (board[r][c] !== -1) {
        nextPosition = board[r][c];
      }

      if (!(nextPosition in minDistance)) {
        minDistance[nextPosition] = minDistance[currentPosition] + 1;
        queue.push(nextPosition);
      }
    }
  }
  return -1;
}

/**
 * Returns board coordinates
 * @param {number} boardPosition
 * @param {number} N
 * @return {number}
 */
function getBoardCoordinates(boardPosition, N) {
  const end = N - 1;

  const quotient = Math.trunc((boardPosition - 1) / N);
  const remainder = (boardPosition - 1) % N;
  const row = end - quotient;

  let col;

  if (row % 2 !== N % 2) {
    col = remainder;
  } else {
    col = end - remainder;
  }

  return [row, col];
}

/**
 * Creates a board for Snakes and Ladders.
 * Time Complexity: O(n^2)
 * @param {Object} snakes  direction of snakes
 * @param {Object} ladders direction of ladders
 * @return {number[][]}
 */
function constructBoard(snakes, ladders) {
  // create board with -1 indicies
  const board = new Array(10).fill(-1).map(() => Array(10).fill(-1));

  // update snakes and ladder positions
  let count = 1;
  for (let i = board.length - 1; i > 0; i--) {
    for (let j = 0; j < board[0].length; j++) {
      if (snakes[count]) board[i][j] = snakes[count];
      if (ladders[count]) board[i][j] = ladders[count];
      count += 1;
    }
  }

  return board;
}

const snakes = {
  16: 6,
  48: 26,
  49: 11,
  56: 53,
  62: 19,
  64: 60,
  87: 24,
  93: 73,
  95: 75,
  98: 78
};

const ladders = {
  1: 38,
  4: 14,
  9: 31,
  21: 42,
  28: 84,
  36: 44,
  51: 67,
  71: 91,
  80: 100
};

const board = constructBoard(snakes, ladders);

// [
//     [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
//     [-1, -1, -1, -1, -1, -1, 24, -1, -1, -1],
//     [91, -1, -1, -1, -1, -1, -1, -1, -1, 100],
//     [-1, 19, -1, 60, -1, -1, -1, -1, -1, -1],
//     [67, -1, -1, -1, -1, 53, -1, -1, -1, -1],
//     [-1, -1, -1, -1, -1, -1, -1, 26, 11, -1],
//     [-1, -1, -1, -1, -1, 44, -1, -1, -1, -1],
//     [42, -1, -1, -1, -1, -1, -1, 84, -1, -1],
//     [-1, -1, -1, -1, -1, 6, -1, -1, -1, -1],
//     [38, -1, -1, 14, -1, -1, -1, -1, 31, -1]
// ]

console.log(snakesAndLadders(board)); // 7
