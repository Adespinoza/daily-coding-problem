/**
 * Return first recurring character
 * @param  {string} str
 * @return {string}
 */
function findRepetition(str) {
  const obj = {};
  const strArr = str.split('');

  // iterate until repetition
  for (let i = 0; i < strArr.length; i++) {
    if (!obj[strArr[i]]) obj[strArr[i]] = 1;
    else obj[strArr[i]] += 1;

    // check if char has repeated
    if (obj[strArr[i]] === 2) return strArr[i];
  }

  return null;
}

console.log(findRepetition('acbbac')); // b
console.log(findRepetition('acbabc')); // a
console.log(findRepetition('ezcdczg')); // c
console.log(findRepetition('abcdef')); // null
