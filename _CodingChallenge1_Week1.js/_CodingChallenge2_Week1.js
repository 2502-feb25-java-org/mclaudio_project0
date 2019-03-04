// challenge2

challenge2.fibon = function(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return challenge2.fiboni(n - 1) + challenge2.fibon(n - 2);
  }
};

// challenge 2 tests
//console.log(console.fibonacci(8));
//console.log(console.fibonacci(16));
//console.log(console.fibonacci(10));
