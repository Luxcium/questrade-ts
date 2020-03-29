"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path_1 = require("path");
var _axios = jest.fn();
var introspect = { onOff: false };
var path = function (s) { return path_1.resolve(__dirname + "/sample/" + s + ".json"); };
_axios.mockName('axios');
_axios.mockImplementation(function (config) {
    var url = !!config && !!config.url ? config.url : '';
    // console.log('url', url);
    var data = [
        'balances',
        'token',
        'candles',
        'activities',
        'orders',
        'positions',
        'executions',
        'options',
        'quotes',
        'markets',
        'search',
        'accounts',
        'symbols',
        'time',
        'ERROR',
    ].reduce(function (previous, dir) {
        if (!previous) {
            if (url.indexOf("/" + dir) !== -1) {
                if (dir === 'ERROR') {
                    var errMessage = 'Testing Errors';
                    console.warn(errMessage);
                    throw new Error(errMessage);
                }
                return JSON.parse(fs_1.readFileSync(path(dir), 'utf8'));
            }
        }
        return previous;
    }, '');
    var resp = !!data ? data : null;
    return { data: resp, introspect: introspect };
});
var axios = _axios;
module.exports = axios;
//# sourceMappingURL=axios.js.map