/* eslint max-classes-per-file: ["error", 2] */

class Iterator {
  constructor(iterable = []) {
    this.iterable = iterable;
    this.index = 0;
  }

  next() {
    const result = this.iterable[this.index];
    this.index += 1;
    return result;
  }

  hasNext() {
    return this.iterable[this.index + 1] !== undefined;
  }
}

class PeekableInterface extends Iterator {
  constructor(iterable) {
    super(iterable);
    this.current = super.next();
  }

  peek() {
    return this.current;
  }

  next() {
    const prev = this.current;
    this.current = super.next();
    return prev;
  }
}

// const peek1 = new PeekableInterface([1, 2, 3]);
// console.log(peek1);
// console.log(peek1.peek()); // 1
// console.log(peek1.hasNext()); // true
// console.log(peek1.next()); // 1
// console.log(peek1.peek()); // 2
// console.log(peek1.peek()); // 2
// console.log(peek1.next()); // 2
