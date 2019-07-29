const autocomplete = (arr, s) => {
  return arr.filter(el => el.startsWith(s), arr);
}

var set = ['dog', 'deer', 'deal', 'doe', 'dox', 'dager', 'cat', 'cat']

console.log(autocomplete(set, 'de')); // ["deer", "deal"]
console.log(autocomplete(set, 'do')); // ["dog", "doe", "dox"]
console.log(autocomplete(set, 'ca')); // ["cat", "cat"]
console.log(autocomplete(set, ' '));  // []
