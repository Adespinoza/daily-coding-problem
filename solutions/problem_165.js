class BST {
  constructor(v, s = 0) {
    this.value = v;
    this.left = null;
    this.right = null;
    this.size = s;
  }

  insert(v, s = 0) {
    if (v > this.value) {
      if (this.right) {
        return this.right.insert(v, s + this.size + 1);
      }
      this.right = new BST(v);
      return this.size + s + 1;
    }
    this.size++;
    if (this.left) {
      return this.left.insert(v, s);
    }
    this.left = new BST(v);
    return s;
  }
}

/**
 * Creates an array of elements smaller than arr at any index
 * @param  {number[]} arr
 * @return {number[]}
 */
function findLargerElements(arr) {
  // return findLargerIterative(arr);
  return findLargerBST(arr);
}

/**
 * Binary Search Tree Approach
 * Time Complexity: O(nlogn)
 * Auxiliary Space: O(n)
 * @param  {number[]} arr
 * @return {number[]}
 */
function findLargerBST(arr) {
  const bst = new BST(arr[arr.length - 1]);
  const output = new Array(arr.length);

  output[output.length - 1] = 0;

  // Check for indicies using tree
  for (let i = arr.length - 2; i >= 0; i--) {
    output[i] = bst.insert(arr[i]);
  }

  return output;
}

/**
 * Iterative approach to problem
 * Time Complexity: O(n^2) - n: number of elemnts
 * Auxiliary Space: O(n)
 * @param  {number[]} arr
 * @return {number[]}
 */
function findLargerIterative(arr) {
  const final = [];

  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = i; j < arr.length; j++) {
      if (arr[i] > arr[j]) count += 1;
    }
    final.push(count);
  }

  return final;
}

console.log(findLargerElements([3, 4, 9, 6, 1])); // [ 1, 1, 2, 1, 0 ]
console.log(findLargerElements([5, 4, 3, 2, 1])); // [ 4, 3, 2, 1, 0 ]
