/**
 * Find the h-index of a researcher's paper
 * @param {number} citations number of citations
 * @return {number}
 */
function hIndex(citations) {
  const pass = [];

  for (let i = 0; i < citations.length; i++) {
    if (citations[i] > pass.length) {
      pass.push(citations[i]);

      if (Math.min(...pass) < pass.length) {
        pass.splice(pass.indexOf(Math.min(...pass)), 1);
      }
    }
  }

  return pass.length;
}

console.log(hIndex([4, 3, 0, 1, 5])); // 3
