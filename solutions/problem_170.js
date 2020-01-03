/**
 * Find the shortest transformation sequence between 2 words
 * @param  {string[]} dict
 * @param  {string} word1
 * @param  {string} word2
 * @return {string[]}
 */
function shortestSeq(beginWord, endWord, wordList) {
  // base case
  if (beginWord.length !== endWord.length) return null;

  const seen = {};
  const queue = [beginWord];
  const final = [];

  while (queue.length) {
    // for every word in queue
    for (let i = 0; i < queue.length; i++) {
      const curr = queue.shift();
      // for every word in wordlist
      for (let j = 0; j < wordList.length; j++) {
        const word = wordList[j];
        // check if current word in queue is adjacent to word in word list
        if (isAdjacent(curr, word)) {
          // check if word in wordlist is endword
          if (word === endWord) {
            // add begining and start word
            final.unshift(beginWord);
            final.push(endWord);
            return final;
          }
          // mark words if you've seen them
          if (!seen[word]) {
            seen[word] = true;
            queue.push(word);
            final.push(word);
          }
        }
      }
    }
  }

  return [];
}

/**
 * Checks if words are adjacent to one another (1 away)
 * @param  {string}  w1
 * @param  {string}  w2
 * @return {boolean}
 */
function isAdjacent(w1, w2) {
  let count = 0;
  for (let i = 0; i < w1.length; i++) {
    if (w1[i] !== w2[i]) count++;
    if (count > 1) break;
  }
  return count === 1;
}

const wordList = ['dot', 'dop', 'dat', 'cat'];
const beginWord = 'dog';
const endWord = 'cat';

console.log(shortestSeq(beginWord, endWord, wordList));
