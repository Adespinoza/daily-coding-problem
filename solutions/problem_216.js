/**
 * Converts roman numerals to decimal
 * @param  {string} numeral
 * @return {number}
 */
function formatRomanNumerals(numeral) {
  let res = 0;
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900
  };

  for (let i = 0; i < numeral.length; i++) {
    if (i === numeral.length) {
      res += romanMap[numeral[i]];
      break;
    }
    const combine = numeral[i] + numeral[i + 1];
    if (romanMap[combine]) {
      res += romanMap[combine];
      i++;
      continue;
    }
    res += romanMap[numeral[i]];
  }
  return res;
}

console.log(formatRomanNumerals('XIV')); // 14
console.log(formatRomanNumerals('IV')); // 4
console.log(formatRomanNumerals('XL')); // 40
