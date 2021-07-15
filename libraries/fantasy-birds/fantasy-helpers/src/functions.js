'use strict';

//
//  ## functionLength(f)
//
//  Returns the arity of function `f`.
//
function functionLength(f) {
    return f._length || f.length;
}

//
//  ## functionName(f)
//
//  Returns the name of function `f`.
//
function functionName(f) {
    return f._name || f.name;
}

module.exports = { functionLength
                 , functionName
                 };
