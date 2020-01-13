// It doesn't matter which game Alice elects to play because her probability of
// rolling die1 and landing on 5 is independent from wether she lands on 5 or 6
// on die2.

/**
 * Stop rolling once you get a five followed by a six.
 * @return {number} count of rolls/dues
 */
function rollDifferentNums() {
  let count = 0;
  let die1;
  let die2;

  while (die1 !== 5 && die2 !== 6) {
    // roll dice
    die1 = Math.floor(1 + Math.random() * 6);
    die2 = Math.floor(1 + Math.random() * 6);
    // increase count
    count += 1;
  }

  return count;
}

/**
 * Stop rolling once you get a five followed by a five.
 * @return {number} count of rolls/dues
 */
function rollSameNums() {
  let count = 0;
  let die1;
  let die2;

  while (die1 !== 5 && die2 !== 5) {
    // roll dice
    die1 = Math.floor(1 + Math.random() * 6);
    die2 = Math.floor(1 + Math.random() * 6);
    // increase count
    count += 1;
  }

  return count;
}

console.log(rollDifferentNums());
console.log(rollSameNums());
