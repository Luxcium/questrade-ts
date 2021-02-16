'use strict';

//
//  ## strictEquals(a)(b)
//
//  Curried function for `===`.
//
function strictEquals(a) {
    return b => a === b;
}

module.exports = strictEquals;
