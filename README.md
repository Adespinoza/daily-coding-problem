# Daily Coding Problem
### [Problem 1](solutions/problem_001.js)
#### Difficulty: `Easy`

This problem was recently asked by Google.

Given a list of numbers and a number `k`, return whether any two numbers from the list add up to `k`.

For example, given `[10, 15, 3, 7]` and `k` of `17`, return true since `10 + 7` is `17`.

Bonus: Can you do this in one pass?

---
### [Problem 2](solutions/problem_002.js)
#### Difficulty: `Hard`

This problem was asked by Uber.

Given an array of integers, return a new array such that each element at index `i` of the new array is the product of all the numbers in the original array except the one at `i`.

For example, if our input was `[1, 2, 3, 4, 5]`, the expected output would be `[120, 60, 40, 30, 24]`. If our input was `[3, 2, 1]`, the expected output would be `[2, 3, 6]`.

Follow-up: what if you can't use division?

---
### [Problem 3](solutions/problem_003.js)
#### Difficulty: `Medium`

This problem was asked by Google.

Given the root to a binary tree, implement `serialize(root)`, which serializes the tree into a string, and `deserialize(s)`, which deserializes the string back into the tree.

For example, given the following `Node` class:

```javascript
class Node {
  constructor(val, left=null, right=null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
```

The following test should pass:
```javascript
const node = new Node('root', new Node('left', new Node('left.left')), new  Node('right'));
console.log(deserialize(serialize(node)).left.left.val === 'left.left');
```

---
### [Problem 4](solutions/problem_004.js)
#### Difficulty: `Hard`

This problem was asked by Stripe.

Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

For example, the input `[3, 4, -1, 1]` should give `2`. The input `[1, 2, 0]`should give `3`.

You can modify the input array in-place.

---
### [Problem 5](solutions/problem_005.js)
#### Difficulty: `Medium`

This problem was asked by Jane Street.

`cons(a, b)` constructs a pair, and `car(pair)` and `cdr(pair)` returns the first and last element of that pair. For example, `car(cons(3, 4))` returns `3`, and `cdr(cons(3, 4))` returns `4`.

Given this implementation of cons:

```javascript
const cons = (a, b) => {
  const pair = (f) => {
    return f(a,b);
  }
  return pair;
}
```
