/**
* NOT USING DYNAMIC PROGRAMMING
* Computes edit distance between two strings
* @param {String} string1
* @param {String} string2
* @return {Number}
*/
function getEditDist(string1, string2) {
  // Base case
  if(string1 === string2) return 0;
  if(string1.length === 0) return string2.length;
  if(string2.length === 0) return string1.length;

  //
  let editDist = 0;
  let length = string1.length > string2.length ? string1.length : string2.length;

  for(let i = 0; i < length; i++) {
    if(string1[i] !== string2[i]) {
      editDist += 1;
    }
  }

  return editDist;
}

console.log(getEditDist("kitten", "")); // 6
console.log(getEditDist("kitten", "sitting"));  // 3
console.log(getEditDist("kitten", "kittens"));  // 1
console.log(getEditDist("kitten", "kit")); // 3
