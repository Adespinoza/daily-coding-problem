/**
* Retrieves all possible permutations
* @param {number[]} list
* @return {number[][]}
*/
function getPermutations(list) {
  if (list.length === 0) return [];
  const combinations = [];
  backtrack(list, combinations, [], new Set());
  return combinations;
}

/**
*
* @param {number[]} list
* @param {number[][]} combinations
* @param {number[]} listSoFar
* @param {Set<number>} set
*/
function backtrack(list, combinations, listSoFar, set) {
  if (listSoFar.length === list.length) {
    combinations.push([...listSoFar]);
    return;
  }

  for (let i = 0; i < list.length; i++) {
    const num = list[i];
    if (set.has(num)) continue;

    listSoFar.push(num);
    set.add(num);

    backtrack(nums, combinations, listSoFar, set);

    listSoFar.pop();
    set.delete(num);
  }
}
