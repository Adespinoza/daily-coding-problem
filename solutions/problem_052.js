class DLLNode {
  /**
  * Creates Doubly Linked List
  * @param {*} key - key stored within node
  * @param {*} value - value stored
  */
  constructor(key, value) {
    this.key = key;
    this.value = value;
    // Connection between nodes
    this.next = null;
    this.prev = null;
  }
}

class LRUCache {
  /**
  * Initializes LRUCache
  * @param {number} limit - cache size of n
  */
  constructor(limit) {
    this.limit = limit;

    // Stored map value
    this.map = new Map();

    // Create doubly linked list
    this.head = new DLLNode(0, 0);
    this.tail = new DLLNode(0, 0);

    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  /**
  * Returns a value at key
  * @param {*} key
  * @param {*} value
  */
  set(key, value) {
    if(this.map.has(key)) {
      let addedNode = this.map.get(key);
      addedNode.value = value;

      // Update current list
      this.remove(addedNode);
      this.add(addedNode);
    } else {
      // Add new node to running list
      let addedNode = new DLLNode(key, value);
      this.map.set(key, addedNode);
      this.add(addedNode);

      // Check if new node goes over limit
      if(this.map.size > this.limit) {
        let lastNode = this.tail.prev;
        this.remove(lastNode);
        this.map.delete(lastNode.key);
      }
    }
  }

  /**
  * Returns a value at key
  * @param {*} key
  * @return {*}
  */
  get(key) {
    if (!this.map.has(key)) return null;

    // Retrieve/update recently used
    let node = this.map.get(key);
    this.remove(node);
    this.add(node);

    return node.value;
  }

  /**
  * Inserts node after the head. Adds the node to most recently used
  * @param {DLLNode} node
  */
  add(node) {
    node.prev = this.head;
    node.next = this.head.next;

    this.head.next.prev = node;
    this.head.next = node;
  }

  /**
  * Removes the given node from the cache
  * @param {DLLNode} node
  */
  remove(node) {
    const { prev, next } = node;
    prev.next = next;
    next.prev = prev;
  }
}
