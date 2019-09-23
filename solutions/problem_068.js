/**
* Finds total attack count
* @param {number[][]} boardSize
* @param {number[][]} positions
* @return {number}
*/
function findTotalAttack(boardSize, positions) {

  let attackPositions = [];
  let totalCount = 0;

  // Iterate through each section
  for (let location in positions) {
    let countAndAttack = addBishop(position[location], attackPositions, boardSize);

    // Increase count and attack positions
    totalCount += countAndAttack[0];
    attackPositions.add(countAndAttack[1]);
  }

  return totalCount;
}

/**
* Adds Bishop and totals count
* @param {number[][]} location
* @param {number[][]} attackPositions
* @param {number} boardSize
* @return {*}
*/
function addBishop(location, attackPositions, boardSize) {
  let currCount = 0;
  let currAttackPositions = [];

  // Adding bishop to existing location
  if (attackPositions.includes(location)) count += 1;

  // Check Diagonal
  let i = location[0];
  let j = location[1];
  while (i > 0 && j > 0) {
    i -= 1;
    j -= 1;
    currAttackPositions.push([i, j]);
  }

  // Check Diagonal
  i = location[0];
  j = location[1];
  while (i > 0 && j < boardSize - 1) {
    i -= 1;
    j += 1;
    currAttackPositions.push([i, j]);
  }

  // Check Diagonal
  i = location[0];
  j = location[1];
  while (i < boardSize - 1 && j > 0) {
    i += 1;
    j -= 1;
    currAttackPositions.push([i, j]);
  }

  // Check Diagonal
  i = location[0];
  j = location[1];
  while (i < boardSize - 1 && j < boardSize - 1) {
    i += 1;
    j += 1;
    currAttackPositions.push([i, j]);
  }

  attackPositions.push(currAttackPositions);
  return [totalCount, attackPositions];
}

const boardSize = 5;

const positions = [
  [0, 0],
  [1, 2],
  [2, 2],
  [4, 0],
];
