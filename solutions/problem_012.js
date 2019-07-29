/**
* @param {*} numSteps
* @param {*} climbSet
* @return list of unique arrays
*/
const stairClimber = (numSteps, climbSet) => {
  var uniqueList = [];

  // Base case
  if(numSteps < Math.min(...climbSet)) {
    return  uniqueList;
  }

  for(let step in climbSet) {
  	var currStep = climbSet[step];
    if(numSteps === currStep) {
    	uniqueList.push(currStep);
    } else if(numSteps > currStep) {
    	var childCombos = stairClimber(numSteps - currStep, climbSet);
      for (let combo in childCombos) {
      	var currCombo = childCombos[combo];
        uniqueList.push([currStep].concat(currCombo));
      }
    }
  }

  return uniqueList;
}

console.log(stairClimber(4, [1, 2]));
// [[1, 1, 1, 1], [1, 1, 2], [1, 2, 1], [2, 1, 1], [2, 2]]

console.log(stairClimber(4, [1, 2, 3]));
// [[1, 1, 1, 1], [1, 1, 2], [1, 2, 1], [1, 3], [2, 1, 1], [2, 2], [3, 1]]
