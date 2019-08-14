/**
 *  Returns a list of strings which represents each line, fully justified
 *  @param {String[]} wordList
 *  @param {Number} k
 *  @return {String[]}
*/
function justifyText(wordlist, k) {
    const justifiedList = [];
    let currLength = -1;
    let currWords = [];

    for(let i = 0; i < wordList.length; i++) {
      const word = wordList[i];

      if(currLength + word.length + 1 > k) {
        // Add justified line
        const justifiedLine = justify(currWords, currLength, k);
        justifiedList.push(justifiedLine);

        // reset values
        currLength = -1;
        currWords = [];
      }
      currLength += word.length + 1;
      currWords.push(word);
    }

    // Last check
    if (currWords.length > 0) {
      const justifiedLine = justify(currWords, currLength, k);
      justifiedList.push(justifiedLine);
    }

    return justifiedList;
}

/**
 * Returns the justified line based on the current words, current length, and the max length of the line
 * @param {string[]} currWords
 * @param {number} currLength
 * @param {number} k
 * @return {string}
 */
function justify(currWords, currLength, k) {
  const spacesToAdd = k - currLength;
  const guaranteedSpaces = 1 + Math.floor(spacesToAdd / (currWords.length - 1));
  const bonusSpaceRecipients = spacesToAdd % (currWords.length - 1);

  let line = '';
  // not include the last word
  for (let i = 0; i < currWords.length - 1; i++) {
    const word = currWords[i];
    line += word;

    for (let j = 0; j < guaranteedSpaces; j++) {
      line += ' ';
    }

    if (i < bonusSpaceRecipients) line += ' ';
  }

  line += currWords[currWords.length - 1]; // add the last word

  return line;
}

console.log(justifyText(["the", "quick", "brown", "fox", "jumps",
                     "over", "the", "lazy", "dog"], 16));
                     // ['the  quick brown',
                     // 'fox  jumps  over',
                    //  'the   lazy   dog']

console.log(justifyText(["the", "quick"], 16)); // ['the        quick']
