/**
 * Find all starting indicies where a pattern appears in a string
 * @param  {string} str
 * @param  {string} pattern
 * @return {number[]}
 */
function matchPattern(str, pattern) {
  let startIndex = 0;
  const patternLen = pattern.length;

  // Keepp track of each occurrence of the pattern
  let index;
  const indices = [];

  // Keeps going as long as an instance of the pattern in found in the genome
  while (str.indexOf(pattern, startIndex) !== -1) {
    // Push the current index for the instance of pattern
    indices.push(str.indexOf(pattern, startIndex));

    // Move the starting point forward
    startIndex = str.indexOf(pattern, startIndex) + 1;
  }

  return indices;
}

console.log(matchPattern('abracadabra', 'abr')); // [0, 7]
