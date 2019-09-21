// https://en.wikipedia.org/wiki/Fair_coin#Fair_results_from_a_biased_coin
// Algorithmic Paradigm: Probability Theory

/**
* Simulate an unbiased coin toss.
* @return {number}
*/
function tossBiased() {
  const biased = Math.random();
  return biased < 0.65 ? 0 : 1;
}

/**
* Simulates Unbiased coin toss.
* @return {number}
*/
function simulateTosses() {
  let coin1 = null;
  let coin2 = null;

  do {
    coin1 = tossBiased();
    coin2 = tossBiased();
  } while (coin1 !== coin2);
  return coin1;
}
