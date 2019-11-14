const Singleton = (function() {
  let instance1;
  let instance2;
  let count = 0;

  function createInstance() {
    const object = {};
    return object;
  }

  return {
    getInstance() {
      if (!instance1) instance1 = createInstance();
      if (!instance2) instance2 = createInstance();

      // Switches instance based on even/odd calls
      count += 1;
      return count % 2 === 0 ? instance1 : instance2;
    }
  };
})();

function run() {
  const instance1 = Singleton.getInstance();
  const instance2 = Singleton.getInstance();

  console.log(`Same instance(?) - ${instance1 === instance2}`);
}
