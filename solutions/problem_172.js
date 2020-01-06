/* eslint no-restricted-syntax: [2, "FunctionExpression", "WithStatement"] */

/**
 * Find all starting indices of substrings in s that is a
 * concatenation of every word in words exactly once.
 * @param  {string} s
 * @param  {string[]} words
 * @return {number[]}
 */
function findConcatenation(s, words) {
  // base case
  if (!words || words.length === 0) return [];

  const m = words.length;
  const n = words[0].length;
  const len = m * n;
  const result = [];

  const map = {};
  for (const word of words) map[word] = ~~map[word] + 1;

  // Try every possible start position i
  for (let i = 0; i < s.length - len + 1; i++) {
    // Make a copy of the hash map
    const temp = { ...map };

    for (let j = i; j < i + len; j += n) {
      const str = s.substr(j, n);
      // Cannot find the word in hash map (words list), try another position
      if (!(str in temp)) break;
      // All the same word str are found, remove it from the hash map
      if (--temp[str] === 0) delete temp[str];
    }

    // We have gone through the whole s and used all our words in the list
    if (Object.keys(temp).length === 0) result.push(i);
  }
  return result;
}

console.log(findConcatenation('dogcatcatcodecatdog', ['cat'])); // [3, 6, 13]
console.log(findConcatenation('dogcatcatcodecatdog', ['cat', 'dog'])); // [0, 13]
console.log(findConcatenation('barfoobazbitbyte', ['dog', 'cat'])); // []
