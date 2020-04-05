/**
 * Print string in zigzag form
 * Time Complexity: O(len)
 * len - length of phrase
 * @param {string} phrase
 * @param {number} k
 */
function convertToZigZag(phrase, k) {
  if (k === 1) return phrase;

  const arr = [...Array(k)].map(r => []);

  for (let i = 0; i < phrase.length; i++) {
    const pos = i % (2 * k - 2);
    const ii = pos < k ? pos : 2 * k - 2 - pos;
    arr[ii].push(phrase[i]);
  }

  return arr.map(r => r.join('')).join('');
}

console.log(convertToZigZag('thisisazigzag', 4));
