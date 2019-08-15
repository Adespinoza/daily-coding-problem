/**
* Returns the encoding of string
*	@param {String} string
* @return {String}
*/
function runEncoding(string) {
	if(string.length === 0) return ''

  let count = 0;
  let encoded = '';
  let letter = string[0];

  for (let i = 0; i < string.length; i++) {
    currLetter = string[i];
		// Check current index vs letter
    if(string[i] !== letter) {
      encoded = encoded + count + letter;
      letter = string[i];
      count = 1;
    } else {
      count += 1;
    }
  }
  // Last pass
  encoded = encoded + count + letter;
  return encoded;
}


/**
* Returns the decoding of string
*	@param {String} string
* @return {String}
*/
function runDecoding(string) {
	let decoded = '';
  let index = 0;

  while(index < string.length) {
    decoded = decoded + string[index + 1].repeat(string[index]);
    index += 2;
  }
  return decoded;
}


console.log(runEncoding('')); // ''
console.log(runEncoding('AAA'));  // '3A'
console.log(runEncoding('AAAABBBCCDAA')); // '4A3B2C1D2A'

console.log(runDecoding(''));
console.log(runDecoding('3A'));	// 'AAA'
console.log(runDecoding('4A3B2C1D2A')); // 'AAAABBBCCDAA'
