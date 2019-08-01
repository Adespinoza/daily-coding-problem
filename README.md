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
---
### [Problem 6](solutions/problem_006.js)
#### Difficulty: `Hard`

This problem was asked by Google.

An XOR linked list is a more memory efficient doubly linked list. Instead of each node holding `next` and `prev` fields, it holds a field named `both`, which is an XOR of the next node and the previous node. Implement an XOR linked list; it has an `add(element)` which adds the element to the end, and a `get(index)` which returns the node at index.

If using a language that has no pointers (such as Python), you can assume you have access to `get_pointer` and `dereference_pointer` functions that converts between nodes and memory addresses.

---
### [Problem 7](solutions/problem_007.js)
#### Difficulty: `Medium`

This problem was asked by Facebook.

Given the mapping `a = 1, b = 2, ... z = 26`, and an encoded message, count the number of ways it can be decoded.

For example, the message `111` would give `3`, since it could be decoded as `aaa`, `ka`, and `ak`.

You can assume that the messages are decodable. For example, `001` is not allowed.

---
### [Problem 8](solutions/problem_008.js)
#### Difficulty: `Easy`

This problem was asked by Google.

A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value.

Given the root to a binary tree, count the number of unival subtrees.

For example, the following tree has `5` unival subtrees:

```
  0
 / \
1   0
   / \
  1   0
 / \
1   1
```

---
### [Problem 9](solutions/problem_009.js)
#### Difficulty: `Hard`

This problem was asked by Airbnb.

Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be `0` or `negative`.

For example, `[2, 4, 6, 8]` should return `12`, since we pick `4` and `8`. `[5, 1, 1, 5]` should return `10`, since we pick `5` and `5`.

Follow-up: Can you do this in `O(N)` time and constant space?

---
### [Problem 10](solutions/problem_010.js)
#### Difficulty: `Medium`

This problem was asked by Apple.

  Implement a job scheduler which takes in a function `f` and an integer `n`, and calls `f` after `n` milliseconds.

---
### [Problem 11](solutions/problem_011.js)
#### Difficulty: `Medium`

This problem was asked by Twitter.

Implement an autocomplete system. That is, given a query string `s` and a set of all possible query strings, return all strings in the set that have `s` as a prefix.

For example, given the query string `de` and the set of strings [`dog`, `deer`, `deal`], return [`deer`, `deal`].

Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.

---
### [Problem 12](solutions/problem_012.js)
#### Difficulty: `Hard`

This problem was asked by Amazon.

There exists a staircase with `N` steps, and you can climb up either `1` or `2` steps at a time. Given `N`, write a function that returns the number of unique ways you can climb the staircase. The order of the steps matters.

For example, if `N` is `4`, then there are `5` unique ways:
- `1, 1, 1, 1`
- `2, 1, 1`
- `1, 2, 1`
- `1, 1, 2`
- `2, 2`

What if, instead of being able to climb 1 or 2 steps at a time, you could climb any number from a set of positive integers X? For example, if X = `{1, 3, 5}`, you could climb `1`, `3`, or `5` steps at a time.

---
### [Problem 13](solutions/problem_013.js)
#### Difficulty: `Hard`

This problem was asked by Amazon.

Given an integer `k` and a string `s`, find the length of the longest substring that contains at most `k` distinct characters.

For example, given `s` = `abcba` and `k` = `2`, the longest substring with k distinct characters is `bcb`.

---
### [Problem 14](solutions/problem_014.js)
#### Difficulty: `Medium`

This problem was asked by Google.

The area of a circle is defined as `πr²`. Estimate `π` to `3` decimal places using a `Monte Carlo` method. Hint: The basic equation of a circle is `x² + y² = r²`.

---
### [Problem 15](solutions/problem_015.js)
#### Difficulty: `Medium`

This problem was asked by Facebook.

Given a stream of elements too large to store in memory, pick a random element from the stream with uniform probability.

---
