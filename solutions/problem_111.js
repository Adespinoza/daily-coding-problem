/**
 * Find all starting anagram indicies
 * @param  {string} word
 * @param  {string} string
 * @return {number[]}
 */
function findAnagrams(word, string) {
  const indicies = [];
  if (string.length > word.length) return indicies;

  // build a frequence count for string
  const freqCount = new Map();
  for (let i = 0; i < string.length; i++) {
    const char = string.charAt(i);
    if (freqCount.has(char)) {
      freqCount.set(char, freqCount.get(char) + 1);
    } else {
      freqCount.set(char, 1);
    }
  }

  let counter = string.length;

  let start = 0;
  let end = 0;

  while (end < word.length) {
    const endChar = word.charAt(end);
    if (freqCount.has(endChar)) {
      // we decrement, and can have negative count
      if (freqCount.get(endChar) >= 1) counter--;
      freqCount.set(endChar, freqCount.get(endChar) - 1);
    }

    while (counter === 0) {
      const startChar = word.charAt(start);

      // two seperate conditions
      // 1. for incrementing counter for extending the window size
      // 2. Since our counter is 0 and the window length is the correct length, push the start index

      if (freqCount.has(startChar)) {
        freqCount.set(startChar, freqCount.get(startChar) + 1);

        // when the start count for character is positive, we can break out our loop
        if (freqCount.get(startChar) > 0) counter++;
      }

      // check window size
      if (end - start + 1 === string.length) {
        indicies.push(start);
      }

      start++;
    }

    end++;
  }

  return indicies;
}
