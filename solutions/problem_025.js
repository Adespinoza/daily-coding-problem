/**
 * Returns whether the text matches the pattern
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const regexMatching = (s, p) => {
  if(s.match(new RegExp('^' + p + '$' , 'g')))  return true;
  return false;
}

console.log(isMatch("ray","ra."));	// true
console.log(isMatch("raymond","ra.")); // false
console.log(isMatch("chat",".*at")); // true
console.log(isMatch("chats",".*at")); // false

// Dyanmic Programming Solution:
// https://leetcode.com/problems/regular-expression-matching/discuss/142237/JavaScript-dynamic-programming-solution
