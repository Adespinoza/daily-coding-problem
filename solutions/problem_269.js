/**
 * Changes orientation of dominos when they fall
 * @param {string} dominos
 * @return {string}
 */
function changeOrientation(dominos) {
  let changes = 0;
  const newDominos = [...dominos];

  for (let i = 0; i < dominos.length; i++) {
    if (
      dominos[i] === 'L' &&
      i > 0 &&
      dominos[i - 1] === '.' &&
      dominos[i - 2] !== 'R'
    ) {
      newDominos[i - 1] = 'L';
      changes += 1;
    } else if (
      dominos[i] === 'R' &&
      i < dominos.length - 1 &&
      dominos[i + 1] === '.' &&
      dominos[i + 2] !== 'L'
    ) {
      newDominos[i + 1] = 'R';
      changes += 1;
    }
  }

  return changes > 0 ? changeOrientation(newDominos) : dominos;
}

/**
 * Determines orientation of dominos when they stop falling
 * @param {string} dominos
 * @return {string}
 */
function getOrientation(dominos) {
  if (!dominos) return '';
  const dominoArr = [...dominos];
  return changeOrientation(dominoArr).join('');
}

console.log(getOrientation('')); // ''
console.log(getOrientation('.')); // '.'
console.log(getOrientation('L')); // 'L'
console.log(getOrientation('R')); // 'R'
console.log(getOrientation('.L.R....L')); // 'LL.RRRLLL'
console.log(getOrientation('..R...L.L')); // '..RR.LLLL'
