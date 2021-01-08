'use strict';

const λ = require('../fantasy-helpers');
const sumOfThree = λ.curry(function sumOfThree(a, b, c) {
    return a + b + c;
});

exports.curry = {
    'when calling curry all at once should return correct value': (test) => {
        test.equal(sumOfThree(1, 2, 3), 6);
        test.done();
    },
    'when calling curry with first one should return correct value': (test) => {
        test.equal(sumOfThree(1)(2, 3), 6);
        test.done();
    },
    'when calling curry with first two should return correct value': (test) => {
        test.equal(sumOfThree(1, 2)(3), 6);
        test.done();
    },
    'when calling curry individually should return correct value': (test) => {
        test.equal(sumOfThree(1)(2)(3), 6);
        test.done();
    },
    'when calling functionName of curried function should return correct value': (test) => {
        test.equal(λ.functionName(sumOfThree(1)(2)), 'sumOfThree');
        test.done();
    },
    'when calling functionLength of curried function should return correct value': (test) => {
        test.equal(λ.functionLength(sumOfThree(1)(2)), 1);
        test.done();
    }
};
