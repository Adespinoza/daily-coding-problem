/**
 * Split string into strings such that they're palindrome
 * Time Complexity: O(n^2)
 * @param  {string} string
 * @return {string[]}
 */
function minPalindrome(string) {
  // base case
  if (string.length <= 3 && !isPalindrome(string)) return string.split('');

  const palindromes = [];
  let temp = '';

  // iterate through string until palindrome
  for (let i = 0; i < string.length; i++) {
    // push into palindromes if temp string isPalindrome
    if (isPalindrome(temp)) {
      palindromes.push(temp);
      temp = '';
    }
    // keep adding characters
    temp += string[i];
  }

  // final check
  if (isPalindrome(temp)) palindromes.push(temp);
  else palindromes.push(...temp);
  return palindromes;
}

/**
 * Determines if a string is a palindrome
 * @param  {string}  string
 * @return {boolean}
 */
function isPalindrome(string) {
  if (string.length <= 1) return false;
  const backward = string
    .split('')
    .reverse()
    .join('');
  return string === backward;
}

console.log(minPalindrome('racecarannakayak')); // [ 'racecar', 'anna', 'kayak' ]
console.log(minPalindrome('racecarannakaya')); // [ 'racecar', 'anna', 'k', 'a', 'y', 'a' ]
console.log(minPalindrome('racecaranna')); // [ 'racecar', 'anna' ]
console.log(minPalindrome('racecar')); // [ 'racecar' ]
console.log(minPalindrome('raceca')); // [ 'r', 'a', 'c', 'e', 'c', 'a' ]
console.log(minPalindrome('abc')); // [ 'a', 'b', 'c' ]
console.log(minPalindrome('ab')); // [ 'a', 'b' ]
console.log(minPalindrome('a')); // [ 'a' ]
console.log(minPalindrome('')); // []
