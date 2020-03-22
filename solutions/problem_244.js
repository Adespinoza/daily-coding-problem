/**
 * Generate all prime numbers smaller than N
 * @param {number} n
 * @return {number[]}
 */
function getNextPrime(n) {
  const sieve = new Array(n).fill(true);

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (sieve[i]) {
      for (let j = i ** 2; j < n; j += i) {
        sieve[j] = false;
      }
    }
  }

  return sieve.reduce((primes, isPrime, i) => {
    if (isPrime && i > 1) primes.push(i);
    return primes;
  }, []);
}

console.log(getNextPrime(100));
// [
//   2,  3,  5,  7, 11, 13, 17, 19,
//  23, 29, 31, 37, 41, 43, 47, 53,
//  59, 61, 67, 71, 73, 79, 83, 89,
//  97
// ]
