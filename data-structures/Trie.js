/* eslint max-classes-per-file: ["error", 2] */
/* eslint "no-restricted-syntax": ["error", "ForInStatement", "LabeledStatement", "WithStatement"]
 */

class TrieNode {
  constructor(parent) {
    this.parent = parent;
    this.children = {};
    this.endOfWord = false;
    this.visited = 1;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode('root');
  }

  init(words) {
    for (const word of words) {
      this.insert(word);
    }
  }

  insert(word) {
    let current = this.root;

    for (let i = 0; i < word.length; i++) {
      const char = word.charAt(i);

      if (current.children[char]) {
        current.children[char].visited++;
        if (i === word.length - 1) {
          current.endOfWord = true;
        } else {
          current = current.children[char];
        }
      } else {
        const newNode = new TrieNode(char);

        if (i === word.length - 1) {
          newNode.endOfWord = true;
        }

        current.children[char] = newNode;
        current = current.children[char];
      }
    }

    return this.root;
  }

  searchWithPrefixHelper(node, current, result) {
    if (node.endOfWord) {
      result.push(current.join(''));
    }

    const { children } = node;
    for (const key of Object.keys(children)) {
      this.searchWithPrefixHelper(children[key], [...current, key], result);
    }

    return result;
  }

  searchWithPrefix(prefix) {
    let current = this.root;
    const result = [];

    for (let i = 0; i < prefix.length; i++) {
      const char = prefix.charAt(i);
      const children = current.children[char];

      if (children) {
        if (children.endOfWord) {
          result.push(prefix);
        }
        current = current.children[char];
      } else {
        console.log('Cannot find the result');
        return null;
      }
    }

    this.searchWithPrefixHelper(current, prefix.split(''), result);

    return result;
  }

  searchUniquePrefixHelper(currentNode, currentPath, result) {
    if (currentNode.visited <= 1) {
      result.push(currentPath.join(''));
      return result;
    }

    if (currentNode.endOfWord) return result;

    const keys = Object.keys(currentNode.children);
    for (const key of keys) {
      this.searchUniquePrefixHelper(
        currentNode.children[key],
        [...currentPath, key],
        result
      );
    }

    return result;
  }

  searchUniquePrefix() {
    const result = [];
    const keys = Object.keys(this.root.children);

    for (const key of keys) {
      const node = this.root.children[key];
      if (node.visited <= 1) {
        result.push(key);
      } else {
        this.searchUniquePrefixHelper(node, [key], result);
      }
    }

    return result;
  }

  toString() {
    const queue = [this.root];
    while (queue.length) {
      const allChild = [];
      const node = queue.shift();
      const { children } = node;

      for (const key of Object.keys(children)) {
        queue.push(children[key]);
        allChild.push(`${key} is end of word ${children[key].endOfWord}`);
      }

      if (allChild.length) {
        console.log(`${node.parent}'s children are ${allChild.join(', ')}`);
      }
    }
  }
}

module.exports = { TrieNode, Trie };
