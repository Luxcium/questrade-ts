'use strict';

const { functionLength, functionName } = require('./functions');

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
function bind(f) {
    function curriedBind(o) {
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
    return (arguments.length > 1) 
        ? curriedBind.apply(this, [].slice.call(arguments, 1))
        : curriedBind;
}

module.exports = bind;
