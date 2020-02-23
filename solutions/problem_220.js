/**
 * Returns the max amount of money you can win with certainty
 * @param {number[]} coins
 */
function playCoinGame(coins) {
  const coinLength = coins.length;
  const game = new Array(coinLength)
    .fill(0)
    .map(() => Array(coinLength).fill(0));

  for (let interval = 0; interval < game.length; interval++) {
    for (let i = 0, j = interval; j < game.length; i++, j++) {
      // a = game[i + 2, j] - Alice chooses i Bob chooses i + 1
      const a = i + 2 <= j ? game[i + 2][j] : 0;

      // b = game[i + 1, j - 1] - Alice chooses i , Bob chooses j OR
      // Alice chooses j , Bob chooses i
      const b = i + 1 <= j - 1 ? game[i + 1][j - 1] : 0;

      // c = game[i, j - 2] - Alice chooses j , Bob chooses j - 1
      const c = i <= j - 2 ? game[i][j - 2] : 0;

      // chose max play
      game[i][j] = Math.max(
        coins[i] + Math.min(a, b),
        coins[j] + Math.min(b, c)
      );
    }
  }

  return game[0][game.length - 1];
}

// Game 1
let coins = [6, 9, 1, 2, 16, 8];
console.log(playCoinGame(coins)); // 23

// Game 2
coins = [4, 6, 2, 3];
console.log(playCoinGame(coins)); // 9

// Game 3
coins = [1, 99, 1, 99];
console.log(playCoinGame(coins)); // 198
