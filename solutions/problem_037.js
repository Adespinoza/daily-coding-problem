/**
* Returns powerset of array
* @param {string[]} mainSet
* @return {number[]}
*/
function powerSet(mainSet) {
	mainSet.sort((a,b)=>a-b);
	return mainSet.reduce(
  	(subsets, value) => subsets.concat(
    										subsets.map(set => [value,...set].sort((a,b)=>a-b))
                        ),
    [[]]);
}

console.log(powerSet([1,2,3]));
console.log(powerSet([8,7,6]));
