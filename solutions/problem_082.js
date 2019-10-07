// Algorithmic Paradigm: I/O File Stream
// O(1) Time complexity
// O(1) Space complexity
class FileReader {
  /**
  * Initializs a file reader
  */
  constructor(file) {
    this.file = file;
    this.offset = 0;
    this.buffer = '';
  }

  /**
  * Reads 7 characters from the file
  * @return {string}
  */
  read7() {
    const start = this.offset;
    const end = Math.min(this.offset + 7, this.file.length);

    // Update the offset
    this.offset = end;
    return this.file.substring(start, end);
  }

  /**
  * Reads N characters using read7
  * @param {number} n
  * @return {string}
  */
  readN(n) {
    while (this.buffer.length < n) {
      const extra = this.read7();
      if (extra.length === 0) break;
      this.buffer += extra;
    }

    // Update buffer
    const readResult = this.buffer.substring(0, n);
    this.buffer = this.buffer.substring(n);
    return readResult;
  }
}
