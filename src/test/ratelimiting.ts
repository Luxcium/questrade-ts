function limiter(fn, wait) {
  let isCalled = false,
    calls = [];

  const caller = function() {
    if (calls.length && !isCalled) {
      isCalled = true;
      calls.shift().call();
      setTimeout(function() {
        isCalled = false;
        caller();
      }, wait);
    }
  };

  return function() {
    calls.push(fn.bind(this, ...arguments));
    // let args = Array.prototype.slice.call(arguments);
    // calls.push(fn.bind.apply(fn, [this].concat(args)));

    caller();
  };
}
