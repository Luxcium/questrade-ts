'use strict';

const randomRange = require('./random-range');

//
//  ## oneOf
//
//  Selects one of the values at random.
//
function oneOf(a) {
    return a[Math.floor(this.randomRange(0, a.length))];
}

module.exports = oneOf;
