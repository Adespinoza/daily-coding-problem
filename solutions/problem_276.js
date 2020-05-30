// Referenced: https://github.com/morenoh149/rabin-karp-search/blob/master/index.js

const PRIME = 190011979;
const BASE = 16;

const mod = (n, m) => ((n % m) + m) % m;

// http://umaranis.com/2018/07/12/calculate-modular-exponentiation-powermod-in-javascript-ap-n/
const powerMod = (exponent, modulus) => {
  if (modulus === 1) return 0;
  let result = 1;
  let base = BASE % modulus;
  while (exponent > 0) {
    if (exponent % 2 === 1) result = (result * base) % modulus;
    exponent >>= 1;
    base = (base * base) % modulus;
  }
  return result;
};

/**
 * Precomutes a hash on a string
 * @param {string} str
 * @return {number}
 */
const precompute = str => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const magnitude = powerMod(str.length - i - 1, PRIME);
    hash = mod(hash + str.charCodeAt(i) * magnitude, PRIME);
  }
  return hash;
};

/**
 * Calculates rolling hash in a str
 * @param {string} str
 * @param {number} index
 * @param {number} window
 * @param {number} hash
 * @param {number} magnitude
 * @return {number}
 */
function rollingHash(str, index, window, hash, magnitude) {
  hash = mod(hash - str.charCodeAt(index - 1) * magnitude, PRIME);
  hash = mod(hash * BASE, PRIME);
  hash = mod(hash + str.charCodeAt(index + window - 1), PRIME);
  return hash;
}

/**
 * Matches indicies of a pattern in str, otherwise returns false
 * @param {string} str
 * @param {string} pattern
 * @return {string[] | boolean}
 */
function matchString(str, pattern) {
  // base case
  if (pattern.length > str.length) return false;

  // calculate pattern hash
  const patternHash = precompute(pattern);
  const result = [];

  // calculate substring hash
  let substr = str.slice(0, pattern.length);
  let substrHash = precompute(substr);

  // check if substring matches pattern at first index
  if (patternHash === substrHash && substr === pattern) result.push(0);

  // calculate hash for every index, using a rolling hash
  const magnitudePrecomputed = powerMod(pattern.length - 1, PRIME);
  for (let i = 1; i <= str.length - pattern.length; i++) {
    substrHash = rollingHash(
      str,
      i,
      pattern.length,
      substrHash,
      magnitudePrecomputed
    );

    // check if pattern and substring hash match
    if (patternHash === substrHash) {
      substr = str.slice(i, i + pattern.length);
      if (substr === pattern) result.push(i);
    }
  }

  return result.length > 0 ? result : false;
}

console.log(matchString('', 'apple')); // false
console.log(matchString('a', 'a')); // [ 0 ]
console.log(matchString('abc', 'b')); // [ 1 ]
console.log(matchString('adam', 'dam')); // [ 1 ]
console.log(matchString('damn fundamentalist adam', 'dam')); // [0, 8, 21]
console.log(matchString('AUGGCCUGGACUUCA', 'NO')); // false
console.log(matchString('The quick brown fox jumps over the lazy dog', 'fox')); // [16]
