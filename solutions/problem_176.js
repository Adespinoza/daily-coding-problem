/**
 * Determines if there exists a one-to-one character map
 * @param  {string} s1
 * @param  {string} s2
 * @return {boolean}
 */
function oneToOneMap(s1, s2) {
  // base case
  if (s1.length !== s2.length) return false;

  const map = new Map();

  for (let i = 0; i < s1.length; i++) {
    // add to map if not already
    if (!map.has(s1[i])) {
      map.set(s1[i], s2[i]);
    }
    // check if character properly matches
    if (map.get(s1[i]) !== s2[i]) {
      return false;
    }
  }

  return true;
}

console.log(oneToOneMap('abc', 'bcd')); // { 'a' => 'b', 'b' => 'c', 'c' => 'd' } ; true
console.log(oneToOneMap('foo', 'bar')); // { 'f' => 'b', 'o' => 'a' } ; false
console.log(oneToOneMap('foo', 'brr')); // { 'f' => 'b', 'o' => 'r' } ; true
console.log(oneToOneMap('foop', 'brr')); // false
