/**
* Breaks up string across lines to have max
* @param {string} s - input string
* @param {number} k - length of string
* @return {string[]}
*/
function breakString(s, k) {
  const splitWords = s.split(' ');
  const returnWords = [];
  let currWords = [];
  let currLength = -1;

  for (let i = 0; i < splitWords.length; i++) {
    const word = splitWords[i];

    if (word.length > k) return null;

    // Add word to list if less than/equal to k
    if (currLength + word.length + 1 <= k) {
      currWords.push(word);
      currLength += word.length + 1;
    } else {
      returnWords.push(currWords.join(' '));
      currWords = [word];
      currLength = word.length;
    }
  }

  returnWords.push(currWords.join(' '));
  return returnWords;
}

console.log(breakString('the quick brown fox jumps over the lazy dog', 10)); // ["the quick", "brown fox", "jumps over", "the lazy", "dog"]
console.log(breakString('the quick brown fox jumps over the lazy dog', 15)); // ["the quick brown", "fox jumps over", "the lazy dog"]
console.log(breakString('the quick brown fox jumps over the lazy dog', 1)); // null
