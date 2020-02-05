/**
 * [isNumPalindrome description]
 * @param  {num}  num
 * @return {boolean}
 */
function isNumPalindrome(num) {
  let rem;
  const temp = num;
  let final = 0;

  while (num > 0) {
    rem = num % 10;
    num = Number.parseInt(num / 10, 10);
    final = final * 10 + rem;
  }

  return final === temp;
}

console.log(isNumPalindrome(121)); // true
console.log(isNumPalindrome(888)); // true
console.log(isNumPalindrome(678)); // false
