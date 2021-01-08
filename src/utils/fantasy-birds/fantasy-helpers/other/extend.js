'use strict';

const λ = require('../fantasy-helpers');

exports.extend = {
    'when testing extend with object should create a new object': (test) => {
        test.deepEqual(λ.extend({a: 1}, {b: 2}), {a: 1, b: 2});
        test.done();
    },
    'when testing extend with object should create a new object without modifying new object': (test) => {
        const a = {a: 1};
        const b = {b: 2};
        const c = λ.extend(a, b);

        test.deepEqual(a, {a: 1});
        test.deepEqual(b, {b: 2});
        test.done();
    },
    'when extending a a object should override property correctly from the right biased': (test) => {
        test.deepEqual(λ.extend({a: 1}, {a: 2}), {a: 2});
        test.done();
    }
};
