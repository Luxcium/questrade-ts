'use strict';

const λ = require('../fantasy-helpers');

exports.getInstance = {
    'when testing getInstance with function call should return correct instance': (test) => {
        const Point = function(){
            return λ.getInstance(this, Point);
        };
        const point = Point();
        test.ok(λ.getInstance(point, Point) instanceof Point);
        test.done();
    },
    'when testing getInstance with new call should return correct instance': (test) => {
        const Point = function(){
            return λ.getInstance(this, Point);
        };
        const point = new Point();
        test.ok(λ.getInstance(point, Point) instanceof Point);
        test.done();
    },
    'when testing getInstance with function call with arguments should return correct instance': (test) => {
        const Point = function(x){
            const a = λ.getInstance(this, Point);
            a.x = x;
            return a;
        };
        const random = Math.random();
        const point = Point(random);
        test.ok(λ.getInstance(point, Point).x, random);
        test.done();
    },
    'when testing getInstance with new call with arguments should return correct instance': (test) => {
        const Point = function(x){
            const a = λ.getInstance(this, Point);
            a.x = x;
            return a;
        };
        const random = Math.random();
        const point = new Point(random);
        test.ok(λ.getInstance(point, Point).x, random);
        test.done();
    }
};