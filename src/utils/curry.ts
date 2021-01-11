/* eslint-disable fp/no-arguments */
// https://github.com/fantasyland/fantasy-helpers
//
//  ## functionLength(f)
//
//  Returns the arity of function `f`.
//
export function functionLength(f: any) {
  return f._length || f.length;
}

//
//  ## functionName(f)
//
//  Returns the name of function `f`.
//
export function functionName(f: any) {
  return f._name || f.name;
}

//
//  ## bind(f)(o)
//
//  Makes `this` inside of `f` equal to `o`:
//
//       bind(function() { return this; })(a)() == a
//
//  Also partially applies arguments:
//
//       bind(add)(null, 10)(32) == 42
//
export function bind(this: any, f: any) {
  function curriedBind(o: any) {
    /* If native bind doesn't exist, use a polyfill. */
    const args = [].slice.call(arguments, 1);
    const g = f.bind.apply(f, [o].concat(args));

    /*
           Let's try and associate all curried functions with the same name as the originator.
           Can't override length but can set _length for currying
        */
    g._name = functionName(f);
    g._length = Math.max(functionLength(f) - args.length, 0);

    return g;
  }

  /* Manual currying since `curry` relies in bind. */
  return arguments.length <= 1
    ? curriedBind
    : curriedBind.apply(this, [].slice.call(arguments, 1) as any);
}

//
//  ## curry(f)
//
//  Takes a normal function `f` and allows partial application of its
//  named arguments:
//
//       var add = fantasy.curry(function(a, b) {
//              return a + b;
//          }),
//          add15 = add(15);
//
//       add15(27) == 42;
//
//  Retains ability of complete application by calling the function
//  when enough arguments are filled:
//
//       add(15, 27) == 42;
//
export function curry(f: any) {
  const a = function (this: any) {
    const g = bind(f).apply(f, [this].concat([].slice.call(arguments)));
    return !functionLength(g) ? g() : curry(g);
  };

  /*
       Let's try and associate all curried functions with the same name as the originator.
       Can't override length but can set _length for currying
    */
  a._name = functionName(f);
  a._length = functionLength(f);

  return a;
}

/*
    "author": "Simon Richardson <stickupkid@gmail.com> (https://github.com/SimonRichardson)",
    "homepage": "https://github.com/SimonRichardson/fantasy-helpers",
    "license": "MIT",
 */
