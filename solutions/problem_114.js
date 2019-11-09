/**
 * Reverse words in string and maintain delims
 * @param  {string} phrase
 * @return {string}
 */
function reverseDelimString(phrase) {
  const delims = new Set();
  delims.add(':').add('/');

  const reverse = string => {
    const words = [];
    const seperators = [];

    let word = '';
    [...string].forEach(char => {
      if (!delims.has(char)) word += char;
      else {
        words.push(word);
        if (word.length) seperators.push(char);
        else seperators[seperators.length - 1] += char;
        word = '';
      }
    });

    if (word.length) words.push(word);
    words.reverse();
    let output = '';

    [...words].forEach(w => {
      output += w;
      output += seperators.length ? seperators.shift() : '';
    });

    return output;
  };

  return reverse(phrase);
}

console.log(reverseDelimString('hello/world:here')); // here/world:hello
console.log(reverseDelimString('hello/world:here/')); // here/world:hello/
console.log(reverseDelimString('hello//world:here')); // here//world:hello
