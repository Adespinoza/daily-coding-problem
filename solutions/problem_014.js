/**
 * Returns an estimate of PI.
 * @param {number} numTests
 * @return {number}
 */
const estimatePI = (numTests) => {
  let circleValues = 0;
  let squareValues = 0;

  for (var i = 0; i < numTests; i++) {
    var randX = Math.random();
    var randY = Math.random();

    squareValues++; // Included in square space

    // Falls in range of circle
    if (randX * randX + randY * randY <= 1) circleValues++;
  }

  // https://www.geeksforgeeks.org/estimating-value-pi-using-monte-carlo/
  return (4 * circleValues) / squareValues;
}

console.log(estimatePI(10));  // 4
console.log(estimatePI(100)); // 2.92
console.log(estimatePI(1000));  // 3.18
console.log(estimatePI(10000)); // 3.14172
