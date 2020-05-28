/**
 * Given an integer N, print the Nth term
 * @param {number} n
 * @return {number}
 */
function lookAndSay(n) {
  let str = '1';

  while (n > 1) {
    let newStr = '';
    let count = 0;
    let say = str[0];

    for (let i = 0; i < str.length; i++) {
      if (str[i] === say) count += 1;
      else {
        newStr += count + say;
        count = 1;
        say = str[i];
      }
    }

    str = newStr + count + say;
    n -= 1;
  }

  return str;
}

console.log(lookAndSay(1)); // 1
console.log(lookAndSay(2)); // 11
console.log(lookAndSay(3)); // 21
console.log(lookAndSay(4)); // 1211
console.log(lookAndSay(5)); // 111221
