// https://leetcode.com/problems/implement-queue-using-stacks/description/
// Algorithmic Paradigm: Data Structures 
// Enqueue: O(1) Time complexity
// Dequeue: Amortized O(1) Time complexity

class Queue {
	/**
	* Initialize an empty queue, with two stacks. FIFO(first-in, first-out)
	* Enqueue all items on stack1, stack2 gets used in dequeue
	*/
	constructor() {
		this.stack1 = [];
		this.stack2 = [];
	}

	/**
	*	Inserts an element into the queue
	*	@param {*} value
	*/
	enqueue(value) {
		this.stack1.push(value);
	}

	/**
	*	Removes an element into the queue
	*	@return {*}
	*/
	dequeue() {
		if(this.stack1.length === 0 && this.stack2.length === 0) return null;

		// Push contents into stack2
		if(this.stack2.length === 0) {
			while(this.stack1.length !== 0) {
				let num = this.stack1.pop();
				this.stack2.push(num);
			}
		}

		return this.stack2.pop();
	}
}