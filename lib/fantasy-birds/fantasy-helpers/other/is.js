'use strict';

const λ = require('../fantasy-helpers');

exports.isTypeOf = {
    'when testing isTypeOf with valid values should return correct value': (test) => {
        test.ok(λ.isTypeOf('string', 'hello'));
        test.done();
    },
    'when testing isTypeOf with invalid values should return correct value': (test) => {
        test.notEqual(λ.isTypeOf('function', 2));
        test.notEqual(λ.isTypeOf('number', function() {}));
        test.expect(2);
        test.done();
    }
};

exports.isBoolean = {
    'when testing isBoolean with valid values should return correct value': (test) => {
        test.ok(λ.isBoolean(true));
        test.ok(λ.isBoolean(false));
        test.expect(2);
        test.done();
    },
    'when testing isBoolean with invalid values should return correct value': (test) => {
        test.notEqual(λ.isBoolean('string'));
        test.notEqual(λ.isBoolean(function() {}));
        test.expect(2);
        test.done();
    }
};

exports.isFunction = {
    'when testing isFunction with valid values should return correct value': (test) => {
        test.ok(λ.isFunction(function() {}));
        test.done();
    },
    'when testing isFunction with invalid values should return correct value': (test) => {
        test.notEqual(λ.isFunction('string'));
        test.notEqual(λ.isFunction(2));
        test.expect(2);
        test.done();
    }
};

exports.isNumber = {
    'when testing isNumber with valid values should return correct value': (test) => {
        test.ok(λ.isNumber(2));
        test.ok(λ.isNumber(2.2));
        test.ok(λ.isNumber(-2.2));
        test.expect(3);
        test.done();
    },
    'when testing isNumber with invalid values should return correct value': (test) => {
        test.notEqual(λ.isNumber('string'));
        test.notEqual(λ.isNumber([]));
        test.expect(2);
        test.done();
    }
};

exports.isObject = {
    'when testing isObject with valid values should return correct value': (test) => {
        test.ok(λ.isObject({}));
        test.ok(λ.isObject([]));
        test.expect(2);
        test.done();
    },
    'when testing isObject with invalid values should return correct value': (test) => {
        test.notEqual(λ.isObject('string'));
        test.notEqual(λ.isObject(function() {}));
        test.expect(2);
        test.done();
    }
};

exports.isString = {
    'when testing isString with valid values should return correct value': (test) => {
        test.ok(λ.isString('string'));
        test.ok(λ.isString(''));
        test.expect(2);
        test.done();
    },
    'when testing isString with invalid values should return correct value': (test) => {
        test.notEqual(λ.isString(3));
        test.notEqual(λ.isString(function() {}));
        test.expect(2);
        test.done();
    }
};

exports.isArray = {
    'when testing isArray with valid values should return correct value': (test) => {
        test.ok(λ.isArray([]));
        test.ok(λ.isArray([1, 2, 3]));
        test.expect(2);
        test.done();
    },
    'when testing isArray with invalid values should return correct value': (test) => {
        test.notEqual(λ.isArray({0: 1, length: 1}));
        test.notEqual(λ.isArray(function() {}));
        test.expect(2);
        test.done();
    }
};

exports.isInstanceOf = {
    'when testing isInstanceOf with valid values should return correct value': (test) => {
        const Point = function() {};
        test.ok(λ.isInstanceOf(Point)(new Point()));
        test.done();
    },
    'when testing isInstanceOf with invalid values should return correct value': (test) => {
        const Point = function() {};
        test.notEqual(λ.isInstanceOf(Point)({}));
        test.notEqual(λ.isInstanceOf(Point)(function() {}));
        test.expect(2);
        test.done();
    }
};
