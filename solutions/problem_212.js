/**
 * Given a column number, return its alphabetical column id
 * @param  {number} num
 * @return {string}
 */
function columnNum(num) {
  // shift indicies by 1
  num -= 1;

  // Generate an uppercase alphabet using corresponding ascii values
  const upperCase = [];
  const letterToNumber = digit => String.fromCharCode(digit + 65);
  for (let i = 0; i < 26; i++) upperCase.push(letterToNumber(i));

  // Calculate how many times a character has to be repeated
  const repetitions = Math.floor(num / upperCase.length);

  // Find the corresponding index of column numbers greater than 26
  const index = num % upperCase.length;

  return upperCase[index] + upperCase[index].repeat(repetitions);
}

console.log(columnNum(1)); // A
console.log(columnNum(27)); // AA
console.log(columnNum(53)); // AAA
console.log(columnNum(100)); // VVV
