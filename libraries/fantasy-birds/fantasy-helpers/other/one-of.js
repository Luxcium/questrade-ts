'use strict';

const λ = require('../fantasy-helpers');
const isAnyOf = (a) => {
    return (b) => {
        var i;

        for(i = 0; i < a.length; i++) {
            if(λ.strictEquals(a[i])(b)) {
                return true;
            }
        }

        return false;
    };
};

exports.oneOf = {
    'when testing oneOf should return one of the values': (test) => {
        var a = ['boolean', 'number', 'string'];
        test.ok(isAnyOf(a)(λ.oneOf(a)));
        test.done();
    }
};