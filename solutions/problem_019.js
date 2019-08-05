/**
 * Given an N by K matrix, returns minimum cost
 * O(NK) Time Complexity
 * @param {number[]} costs
 * @return {number}
 */
const minColorCost = (costs) => {
  // Base case
  if(costs.length === 0) return 0;

  const n = costs.length;
  const k = costs[0].length;

  let min1 = 0;
  let min2 = 0;
  let index1 = -1;

  for (let i = 0; i < n; i++) {
    let m1 = Number.MAX_SAFE_INTEGER;
    let m2 = Number.MAX_SAFE_INTEGER;
    let index2 = -1;

    for(let j = 0; j < k; j++) {
      let cost = costs[i][j];
      cost += j === index1 ? min2 : min1;

      if(cost < m1) {
        m2 = m1;
        m1 = cost;
        index2 = j;
      } else if(cost < m2){
        m2 = cost;
      }
    }
    min1 = m1;
    min2 = m2;
    index1 = index2;
  }
  return min1;
}
