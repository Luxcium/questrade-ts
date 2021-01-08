'use strict';

const λ = require('../fantasy-helpers');

exports.strictEquals = {
    'when calling strictEquals with numbers should return correct value': (test) => {
        test.ok(λ.strictEquals(1)(1));
        test.done();
    },
    'when calling strictEquals with strings should return correct value': (test) => {
        test.ok(λ.strictEquals('ab')('ab'));
        test.done();
    },
    'when calling strictEquals with objects should return correct value': (test) => {
        const obj = {};
        test.ok(λ.strictEquals(obj)(obj));
        test.done();
    },
    'when calling strictEquals with different objects should return correct value': (test) => {
        test.ok(!λ.strictEquals({})({}));
        test.done();
    }
};
