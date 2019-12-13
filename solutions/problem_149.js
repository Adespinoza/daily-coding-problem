const list = [1, 2, 3, 4, 5];

/**
 * Returns the sum from the sublist
 * @param  {number} i
 * @param  {number} j
 * @return {number}
 */
function sum(i, j) {
  return list.slice(i, j).reduce((acc, x) => acc + x, 0);
}

console.log(sum(1, 3));
