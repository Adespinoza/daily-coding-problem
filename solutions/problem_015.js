/**
 * Returns a random element from the stream with uniform probability.
 * @param {number[]} stream
 * @return {number}
 */
const selectElement = (stream) => {
  let streamCounter = 0;
  let selected = 0;

  for (var i = 0; i < stream.length; i++) {
    streamCounter++;
    if(streamCounter === 0) return selected = stream[i];
    else if (Math.random() <= 1 / streamCounter) {
      selected = stream[i];
    }
  }

  return selected;
}
