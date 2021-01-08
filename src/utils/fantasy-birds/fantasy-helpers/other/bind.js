'use strict';

const λ = require('../fantasy-helpers');

exports.bind = {
    'when testing bind should return correct value': (test) => {
        const x = λ.bind((a, b, c) => a + b + c);

        test.equal(x()(1, 2, 3), 1 + 2 + 3);
        test.done();
    },
    'when testing bind with an argument should return correct value': (test) => {
        const x = λ.bind((a, b, c) => a + b + c, null, 1);

        test.equal(x(2, 3), 1 + 2 + 3);
        test.done();
    },
    'when testing bind with an argument and binding should return correct value': (test) => {
        const x = λ.bind((a, b, c) => a + b + c, null, 1);
        const y = λ.bind(x, null, 2);

        test.equal(y(3), 1 + 2 + 3);
        test.done();
    },
    'when testing function name with bind should return correct value': (test) => {
        const a = λ.bind(function namedFunction(a, b, c) {})();

        test.equal(λ.functionName(a), 'namedFunction');
        test.done();
    },
    'when testing function length with bind should return correct value': (test) => {
        const a = λ.bind((a, b, c) => {})();

        test.equal(λ.functionLength(a), 3);
        test.done();
    }
};