/**
* Gereates a random (uniform) number from 0 to n-1
* @param {number} n
* @param {number[]} list
*/
function generateRandom(n, list) {
  const set = new Set(list);
  const finalList = [];

  for (let i = 0; i < n; i++) {
    if (!set.has(i)) finalList.push(i);
  }

  if (n === 0) return set.has(0) ? -1 : 0;
  const randomIndex = Math.floor(Math.random() * n);
  return finalList[randomIndex];
}
