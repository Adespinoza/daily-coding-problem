/**
 * Finds if permutation of a string is a palindrome
 * @param  {string}  str
 * @return {boolean}
 */
function isPalindromePerm(str) {
  // base case
  if (str.length === 1) return false;

  const obj = {};
  const strArr = str.split('');
  let flagCount = 0;

  // count occurence of each character
  strArr.forEach(char => {
    if (!obj[char]) {
      obj[char] = 1;
    } else {
      obj[char] += 1;
    }
  });

  // check number of odd occurences
  Object.values(obj).forEach(value => {
    if (value % 2 === 1) flagCount += 1;
  });

  return flagCount <= 1;
}

console.log(isPalindromePerm('carrace')); // true
console.log(isPalindromePerm('daily')); // false
console.log(isPalindromePerm('tacocat')); // true
console.log(isPalindromePerm('pap')); // true
console.log(isPalindromePerm('p')); // false
console.log(isPalindromePerm('pa')); // false
console.log(isPalindromePerm('aa')); // true
console.log(isPalindromePerm('aaa')); // true
console.log(isPalindromePerm('bub')); // true
