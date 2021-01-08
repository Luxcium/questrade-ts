'use strict';

const bind = require('./bind');
const { functionLength, functionName } = require('./functions');

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
function curry(f) {
    const a = function() {
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

module.exports = curry;
