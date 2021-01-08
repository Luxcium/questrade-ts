'use strict';

const λ = require('../fantasy-helpers');

exports.singleton = {
    'when testing singleton with string keys should return correct value': (test) => {
        test.deepEqual(λ.singleton('a', '1'), {'a': 1});
        test.done();
    },
    'when testing singleton with object keys should return correct value': (test) => {
        test.deepEqual(λ.singleton({a: 1}, '1'), {'[object Object]': 1});
        test.done();
    }
};
