/**
 * Generates one of the numbers with its corresponding probability.
 * @param  {number[]} results
 * @param  {number[]} weights
 * @return {number}
 */
function generateNums(results, weights) {
  const r = Math.random();
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += weights[i];
    if (r < sum) {
      return results[i];
    }
  }

  return weights[weights.length - 1];
}

console.log(generateNums([1, 2, 3, 4], [0.1, 0.5, 0.2, 0.2]));
