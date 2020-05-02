const SEPARATORS = [',', ';', ':'];
const TERM_MARKS = ['.', '?', '!'];

const isUpperCase = string => /^[A-Z]*$/.test(string);

/**
 *
 * @param {string} stream
 */
function sentenceChecker(stream) {
  const isValid = (context, char, nextChar) => {
    const currValid = true;

    if (!context && !isUpperCase(char)) return false;

    if (context.length === 1 && (char !== ' ' || isUpperCase(char))) {
      return false;
    }

    if (TERM_MARKS.includes(char))
      return (
        SEPARATORS.includes(context[context.length - 1]) ||
        TERM_MARKS.includes(context[context.length - 1])
      );

    if (!nextChar) return TERM_MARKS.includes(char) && currValid;

    context += nextChar;

    return currValid
      ? isValid(context, nextChar[0], nextChar.substring(1))
      : false;
  };

  return isValid('', stream[0], stream.substring(1)) ? stream : '';
}

console.log(sentenceChecker('This is a valid sentence.')); // This is a valid sentence.
console.log(sentenceChecker('This is a invalid sentence')); // ''
console.log(sentenceChecker('This is a INvalid sentence')); // ''
