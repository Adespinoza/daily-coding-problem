/**
* Finds palindrome with fewest insertions (Brute Force).
* @param {String} word
* @return {String}
*/
function findMinInsertions(word) {
  let s0 = word;
  let s1 = word.split('').reverse().join('');
  let index = 0;
  // Iterate forward
  for (let i = 0; i < s0.length; i++) {
      cut0 = s0.substr(0, s0.length - i);
      cut1 = s1.substr(i, s1.length - i);
      index = i;
      if (cut0 == cut1) break;
  }
  return s1.substr(0, index) + s0;
}

console.log(shortestPalindrome("race"));  // "ecarace"
console.log(shortestPalindrome("google"));	// "elgoogle"
