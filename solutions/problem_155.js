/* eslint consistent-return: ["error", { "treatUndefinedAsUnspecified": true }] */

/**
 * Find majority elements that appear more than half the time
 * @param  {number[]} lst
 * @return {number[]}
 */
function findMajorityElement(lst) {
  const map = new Map();
  const limit = Math.floor(lst.length / 2);
  const finalValues = [];

  [...lst].forEach(x => {
    if (!map.has(x)) map.set(x, 0);
    map.set(x, map.get(x) + 1);
  });

  map.forEach((value, key) => {
    if (value >= limit) finalValues.push(key);
    return false;
  });

  return finalValues;
}

console.log(findMajorityElement([1, 2, 1, 1, 3, 4, 0])); // [ 1 ]
console.log(findMajorityElement([1, 1, 1, 3, 3, 3, 3])); // [ 1, 3 ]
console.log(findMajorityElement([5])); // [ 5 ]
console.log(findMajorityElement([])); // []
