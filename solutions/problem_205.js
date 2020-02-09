/**
 * Given an number, find the next permutation
 * @param  {number} num
 * @return {number}
 */
function permutation(num) {
  const findAllPermutations = perm => {
    const results = [];
    const permString = String(perm);

    if (permString.length === 1) return [perm];

    for (let i = 0; i < permString.length; i++) {
      const firstDigit = permString[i];
      const remaining =
        permString.substring(0, i) + permString.substring(i + 1);

      const innerPerm = findAllPermutations(remaining);
      for (let j = 0; j < innerPerm.length; j++) {
        results.push(firstDigit + innerPerm[j]);
      }
    }

    return results;
  };

  const permArr = findAllPermutations(String(num));
  const numPermArr = permArr.map(el => Number(el)).sort();

  for (let i = 0; i < numPermArr.length; i++) {
    if (Number(num) === numPermArr[i]) {
      return numPermArr[i + 1];
    }
  }
}

console.log(permutation(48975)); // 49578
