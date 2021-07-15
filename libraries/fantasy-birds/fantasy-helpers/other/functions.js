'use strict';

const λ = require('../fantasy-helpers');

exports.functionName = {
    'when calling functionName with a named function should return correct name' : (test) => {
        test.equals(λ.functionName(function a(){}), 'a');
        test.done();
    },
    'when calling functionName with a unnamed function should return correct name': (test) => {
        test.equals(λ.functionName(function (){}), '');
        test.done();
    },
    'when calling functionName with a const named function should return correct name': (test) => {
        const b = function a(){};
        test.equals(λ.functionName(b), 'a');
        test.done();
    },
    'when calling functionName with a named function which is over written should return correct name': (test) => {
        const b = function c(){};
        b._name = 'a';
        test.equals(λ.functionName(b), 'a');
        test.done();
    }
};

exports.functionLength = {
    'when calling functionLength with no parameters should return correct length': (test) => {
        test.equals(λ.functionLength(function (){}), 0);
        test.done();
    },
    'when calling functionLength with one parameter should return correct length': (test) => {
        test.equals(λ.functionLength(function (a){}), 1);
        test.done();
    },
    'when calling functionLength with multiple parameters should return correct length': (test) => {
        test.equals(λ.functionLength(function (a, b, c, d){}), 4);
        test.done();
    },
    'when calling functionLength with over written parameters should return correct length': (test) => {
        const b = function c(x, y, z){};
        b._length = 5;
        test.equals(λ.functionLength(b), 5);
        test.done();
    },
    'when calling functionLength with no parameters, but over written parameters should return correct length': (test) => {
        const b = function c(){};
        b._length = 5;
        test.equals(λ.functionLength(b), 5);
        test.done();
    }
};
