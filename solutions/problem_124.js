/**
 * Determines number of rounds until one coin remains
 * @param  {number} coins
 * @return {number}
 */
function flipCoins(coins) {
  if (coins < 1) return null;

  if (coins === 1) return 1;

  return flipCoins(Math.floor(coins / 2)) + 1;
}

console.log(flipCoins(100)); // 7
console.log(flipCoins(50)); // 6
console.log(flipCoins(25)); // 5
console.log(flipCoins(0)); // null
