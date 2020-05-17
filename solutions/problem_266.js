const ALPHABET_SIZE = 26;
const ALPHABET_SIZE_OFFSET = 65;

class WordDictionary {
  constructor(word) {
    this.word = word;
    this.list = new Array(ALPHABET_SIZE).fill(0);

    for (let i = 0; i < word.length; i++) {
      const index = word.charCodeAt(i) - ALPHABET_SIZE_OFFSET;
      this.list[index] += 1;
    }
  }
}

/**
 * Calculates number difference of two lists
 * @param {number[]} list1
 * @param {number[]} list2
 * @return {number[]}
 */
function calculateDiff(list1, list2) {
  const result = [];
  for (let i = 0; i < ALPHABET_SIZE; i++) {
    result.push(Math.max(0, list1[i] - list2[i]));
  }
  return result;
}

/**
 * Finds all valid step words
 * @param {string} word
 * @param {string[]} dictionary
 * @return {Set<string>}
 */
function getStepWords(word, dictionary) {
  const stepWords = new Set();
  const wordDict = new WordDictionary(word);

  dictionary.forEach(currWord => {
    const currDictionary = new WordDictionary(currWord);
    const difference = calculateDiff(currDictionary.list, wordDict.list);
    if (difference.reduce((a, b) => a + b, 0) === 1) stepWords.add(currWord);
  });

  return stepWords;
}

console.log(getStepWords('APPLE', ['APPEAL'])); // { 'APPEAL' }
console.log(getStepWords('APPLE', ['APPEAL', 'APPLICT'])); // { 'APPEAL' }
console.log(getStepWords('APPLE', ['APPEAL', 'APPLICT', 'APPLES'])); // { 'APPEAL', 'APPLES' }
