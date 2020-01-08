/**
 * Flatten nested dictionary, namespace keys with period
 * Time Complexity: O(n)
 * n - number of keys in object
 * @param  {Object} obj
 * @return {Object}
 */
function flattenObject(obj, fullKey = '') {
  const consolidated = {};

  Object.keys(obj).forEach(key => {
    const propName = fullKey ? `${fullKey}.${key}` : key;
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      Object.assign(consolidated, flattenObject(obj[key], propName));
    } else {
      consolidated[propName] = obj[key];
    }
  });

  return consolidated;
}

const obj = {
  key: 3,
  foo: {
    a: 5,
    bar: {
      baz: 8
    }
  }
};

console.log(flattenObject(obj));
