/**
 * Debounce function, f function will not be called for N milliseconds
 * @param  {Function} func
 * @param  {number} N
 * @return {Function}
 */
function debounce(func, N) {
  let debounceTimer = null;

  return function debounceFunction(...args) {
    const context = this;

    const functionCall = () => {
      debounceTimer = null;
      f.apply(context, args);
    };

    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(functionCall, N);
  };
}
