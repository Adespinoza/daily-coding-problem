/**
 * Returns a possible reconstruction of a string with a word set.
 * @param {string[]} array
 * @return {string[]}
 */
const getReconstruction = (array) => {
	const length = array.length;
	let orderedList = {}
  let orderedWord = array[length-1];

  // Iterate until length - 1
  for(let i = 0; i < length-1; i++) {
    let indexOf = orderedWord.indexOf(array[i]);
    let wordLength = array[i].length
    // Places in order
    orderedList[indexOf] = array[i];
    // Removes word from string / duplicates
    orderedWord = orderedWord.replace(array[i], ' '.repeat(wordLength));
  }

  let orderedArr = []
  // Add to orderedArr, removing nonexistent values
	for (var property in orderedList) {
		if(property > -1) {
    	orderedArr.push(orderedList[property]);
    }
	}
  return orderedArr;
}

getReconstruction(['quick', 'brown', 'the', 'fox', 'thequickbrownfox']); // ["the", "quick", "brown", "fox"]
getReconstruction(['bed', 'bath', 'bedbath', 'and', 'beyond', 'bedbathandbeyond']);	// ["bed", "bath", "and", "beyond"]
getReconstruction(['home', 'best', 'buy', 'mart', 'bestbuy', 'bestbuy']);	// ["best", "buy"]
getReconstruction(['quick', 'quick', 'the', 'brown', 'the', 'thequickbrown']); // ["the", "quick", "brown"]
