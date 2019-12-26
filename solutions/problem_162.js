const { Trie } = require('../data-structures/Trie');

/**
 * Find shortet unique prefix of each word
 * @param  {string[]} words
 * @return {string[]}
 */
function shortestUniquePrefix(words) {
  const trie = new Trie();
  trie.init(words);
  return trie.searchUniquePrefix();
}

console.log(shortestUniquePrefix(['dog', 'cat', 'apple', 'apricot', 'fish']));
console.log(shortestUniquePrefix(['zebra', 'dog', 'duck', 'dove']));
console.log(shortestUniquePrefix(['geeksgeeks', 'geeksquiz', 'geeksforgeeks']));
