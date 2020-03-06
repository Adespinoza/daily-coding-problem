/**
 * Find min number of trial drops in worst case
 * Time Complexity: O(nk^2)
 * Auxiliary Space: O(nk)
 * @param {number} N number of eggs
 * @param {number} K number of floors
 */
function minEggDrop(N, K) {
  const eggFloor = new Array(N + 1).fill(0).map(() => Array(K + 1).fill(0));

  // 1st floor
  for (let i = 0; i <= N; i++) {
    eggFloor[i][1] = 1;
  }

  // Need j trials for one egg and j floors.
  for (let j = 1; j <= K; j++) eggFloor[1][j] = j;

  // Rest of floors and eggs
  for (let i = 2; i <= N; i++) {
    for (let j = 2; j <= K; j++) {
      eggFloor[i][j] = Number.MAX_VALUE;
      for (let x = 1; x <= j; x++) {
        const res = 1 + Math.max(eggFloor[i - 1][x - 1], eggFloor[i][j - x]);
        if (res < eggFloor[i][j]) eggFloor[i][j] = res;
      }
    }
  }

  return eggFloor[N][K];
}

console.log(minEggDrop(1, 5)); // 5
console.log(minEggDrop(2, 36)); // 8
