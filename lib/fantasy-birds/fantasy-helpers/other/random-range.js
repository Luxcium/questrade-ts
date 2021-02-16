'use strict';

const λ = require('../fantasy-helpers');

exports.randomRange = {
    'when testing randomRange value should be within correct range': (test) => {
        const a = λ.randomRange(10, 100);
        test.ok(a >= 10 && a <= 100);
        test.done();
    }
};