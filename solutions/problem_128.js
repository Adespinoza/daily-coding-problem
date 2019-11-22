/**
 * Prints steps to complete Tower of Hanoi
 * @param  {number} n - number of disks
 */
function towerOfHanoi(n) {
  if (n === 0) return null;
  // Calculate moves
  return executeHanoi(n, '1', '3', '2');
}

/**
 * Excutes Tower of Hanoi prints;
 * @param  {number} n
 * @param  {string} from
 * @param  {string} to
 * @param  {string} aux
 */
function executeHanoi(n, from, to, aux) {
  if (n === 1) {
    console.log(`Move ${from} to rod ${to}`);
    return;
  }

  executeHanoi(n - 1, from, aux, to);
  console.log(`Move ${from} to rod ${to}`);
  executeHanoi(n - 1, aux, to, from);
}

// towerOfHanoi(3);
