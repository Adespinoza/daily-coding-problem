/**
* @param {*} message
* @return number of ways message can be decoded
*/
const getMessageCount = (message) => {
  var messageString = message.toString();

  if(messageString.length == 1) {
    count = 1;
  } else if (messageString.length == 2) {
    count = 1 + isValid(message);
  } else {
    count = getMessageCount(messageString.slice(1));
    if(isValid(messageString.slice(-2))) {
      count += getMessageCount(messageString.slice(2));
    }
  }
  return count;
}

/**
* Checks if character is in alphabet range
* @param {*} char
*/
const isValid = char => {
	if(char > 26 || char < 1) return 0;
  return 1;
}

console.log(getMessageCount(81), 1);
console.log(getMessageCount(11), 2);
console.log(getMessageCount(111), 3);
console.log(getMessageCount(1111), 5);
