// https://leetcode.com/problems/reverse-words-in-a-string/
//
// O(N) Time complexity
// O(N) Space complexity
// N is the number of words in the phrase

/**
 * Given string of words, reverse words
 * @param  {string} phrase
 * @return {string}
 */
function reverseString(phrase) {
  const forward = phrase.split(' ');
  const reverse = [];

  // Base case
  if (forward.length < 1) return phrase;

  // Add to front of array
  for (let i = 0; i < forward.length; i++) {
    if (forward[i]) reverse.unshift(forward[i]);
  }

  return reverse.join(' ');
}

console.log(reverseString('hello world here')); // 'here world hello'
console.log(reverseString('hello world i am here')); // 'here am i world hello'
console.log(reverseString('hello')); // 'hello'
console.log(reverseString(' ')); // ' '
