// https://leetcode.com/problems/binary-tree-paths/
//
// O(N) Time complexity
// O(H) Space complexity
// N is the nodes in the tree and H is the height of the tree

/**
 * Return all baths from root to leaves
 * @param  {TreeNode} root
 * @return {number[][]}
 */
function findRootPaths(root) {
  const finalList = [];
  backtrack(root, finalList, []);
  return list;
}

/**
 * Backtracking algorithm
 * @param  {TreeNode} root
 * @param  {number[][]} finalList
 * @param  {number[]} currList
 */
function backtrack(root, finalList, currList) {
  // Base case
  if (root === null) return [];

  // Current node value
  currList.push(root.val);

  // No child nodes
  if (root.left === null && root.right === null) {
    finalList.push([...currList]);
    currList.pop();
    return;
  }

  // Search for other routes
  backtrack(root.left, finalList, currList);
  backtrack(root.right, finalList, currList);

  // Remove final
  currList.pop();
}
