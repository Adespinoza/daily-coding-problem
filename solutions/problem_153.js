/**
 * Find smallest distance between two given words (brute force)
 * @param  {string} w1
 * @param  {string} w2
 * @param  {string} phrase
 * @return {number}
 */
function smallestDistance(w1, w2, phrase) {
  if (w1 === w2) return 'assuming words are different';
  let tempHolder = [];
  let minDist = Number.MAX_VALUE;

  phrase.split(' ').forEach(word => {
    if (word === w1) {
      if (tempHolder.includes(w1)) {
        tempHolder = [];
        tempHolder.push(word);
      } else {
        tempHolder.push(word);
      }
    } else if (word === w2) {
      minDist = Math.min(minDist, tempHolder.length - 1);
    } else if (tempHolder.includes(w1)) {
      tempHolder.push(word);
    }
  });

  return minDist;
}

console.log(
  smallestDistance(
    'hello',
    'world',
    'dog cat hello cat dog dog hello cat world'
  )
); // 1

console.log(
  smallestDistance('hello', 'world', 'dog cat hello hello hello cat cat world')
); // 2

console.log(
  smallestDistance('dog', 'cat', 'dog cat hello hello hello cat cat world')
); // 0
