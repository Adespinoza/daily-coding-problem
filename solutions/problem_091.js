const functions = [];
for (var i = 0; i < 10; i++) {
  (j => {
    functions.push(() => j);
  })(i);
}

functions.forEach(f => console.log(f()));
