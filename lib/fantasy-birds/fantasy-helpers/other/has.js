'use strict';

const λ = require('../fantasy-helpers');

const Point = function(){
    return λ.getInstance(this, Point);
};
Point.prototype.method = function() {};

exports.has = {
    'when testing has returns correct value for existing method': (test) => {
        const point = Point();
        test.ok(λ.hasMethod('method')(point));
        test.done();
    },
    'when testing has returns correct value for missing method': (test) => {
        const point = Point();
        test.ok(!λ.hasMethod('notamethod')(point));
        test.done();
    }
};