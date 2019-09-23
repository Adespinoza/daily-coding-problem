class LFUClass {
	constructor(limit) {
		this.min = 0;
		this.limit = limit;

		// Stored map value
		this.nodeMap = new Map(); //{{key, node}, {key, node}}
		this.freqMap = new Map(); //{{freq, DLLNode}, {freq, DLLNode}}

		// Create doubly linked list
		this.head = new DLLNode(0, 0);
		this.tail = new DLLNode(0, 0);

		this.head.next = this.tail;
		this.tail.prev = this.head;
	}

	/**
	* Sets key to value
	* @param {*} key
	* @param {*} value
	*/
	set(key, value) {
		if (this.capacity === 0) return;
		let node;

		if (this.nodeMap.has(key)) {
			node = this.nodeMap.get(key);
			node.value = value;
			let oldNode = this.freqMap.get(node.count);
			oldNode.remove(node);

			if (node.cnt === this.min && oldNode.size === 0) {
				this.min++;
			} 
			node.count++;

			if (this.freqMap.get(node.count)) {
				this.freqMap.get(node.count).add(node);
			} else {
				let newNode = new DLLNode();
				newNode.add(node);
				this.freqMap.set(node.count, newNode);
			}
		} else {
			node = new DLLNode(key, value);
			this.nodeMap.set(key, node);
			if (this.size === this.capacity) {

				let lastNode = this.freqMap.get(this.min);

				this.nodeMap.delete(lastNode.removeLast().key);
				this.size--;
			}

			this.size++;
			this.min = 1;

			if (this.freqMap.get(node.count)) {
				this.freqMap.get(node.count).add(node);
			} else {
				let newNode = new DLLNode();
				newNode.add(node);
				this.freqMap.set(node.count, newNode); 
			}
		}
	}

	/**
	* Returns a value at key
	* @param {*} key
	* @return {*}
	*/
	get(key) {
		const node = this.nodeMap.get(key);
		if (!node) return -1;

		let oldNode = this.freqMap.get(node.count);
		oldNode.remove(node);

		if (node.count === this.min && oldNode.size === 0) {
			this.min++;
		} 

		node.count++;

		if (this.freqMap.get(node.count)) {
			this.freqMap.get(node.count).add(node);
		} else {
			let newNode = new DLLNode();
			newNode.add(node);
			this.freqMap.set(node.count, newNode);
		}
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
		this.size++;
	}

	/**
	* Removes the given node from the cache
	* @param {DLLNode} node
	*/
	remove(node) {
		const { prev, next } = node;
		prev.next = next;
		next.prev = prev;
		this.size--;
	}
}

class DLLNode {
  /**
  * Creates Doubly Linked List
  * @param {*} key - key stored within node
  * @param {*} value - value stored
  */
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.count = 1;
    // Connection between nodes
    this.next = null;
    this.prev = null;
  }
}