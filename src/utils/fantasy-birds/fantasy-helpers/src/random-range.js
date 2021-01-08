'use strict';

//
//  ## randomRange(a, b)
//
//  Returns a random number between the range.
//
function randomRange(a, b) {
    return Math.random() * (b - a) + a;
}

module.exports = randomRange;
