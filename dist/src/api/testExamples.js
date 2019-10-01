"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var _1 = require(".");
var testing = false;
exports.testExamples = function (yourRefreshToken, startTime, endTime, optionExpiryDate, optionNumericID, stockNumericID, stockStringID) {
    return (function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var log, _a, qt, credentials, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, error_1;
        return tslib_1.__generator(this, function (_w) {
            switch (_w.label) {
                case 0:
                    log = console.log;
                    _w.label = 1;
                case 1:
                    _w.trys.push([1, 22, , 23]);
                    return [4, _1.redeemToken(yourRefreshToken)];
                case 2:
                    _a = _w.sent(), qt = _a.qtApi, credentials = _a.credentials;
                    _b = log;
                    return [4, qt.get.accounts.activities(startTime)(endTime)];
                case 3:
                    _b.apply(void 0, [_w.sent()]);
                    _c = log;
                    return [4, qt.get.accounts.orders(startTime)(endTime)('All')];
                case 4:
                    _c.apply(void 0, [_w.sent()]);
                    _d = log;
                    return [4, qt.get.accounts.executions(startTime)(endTime)];
                case 5:
                    _d.apply(void 0, [_w.sent()]);
                    _e = log;
                    return [4, qt.get.accounts.balances()];
                case 6:
                    _e.apply(void 0, [_w.sent()]);
                    _f = log;
                    return [4, qt.get.accounts.positions()];
                case 7:
                    _f.apply(void 0, [_w.sent()]);
                    _g = log;
                    return [4, qt.get.accounts.allAccounts()];
                case 8:
                    _g.apply(void 0, [_w.sent()]);
                    _h = log;
                    return [4, qt.get.accounts.time()];
                case 9:
                    _h.apply(void 0, [_w.sent()]);
                    _j = log;
                    return [4, qt.get.markets.candlesById(startTime)(endTime)('OneDay')(stockNumericID)];
                case 10:
                    _j.apply(void 0, [_w.sent()]);
                    log('NO IMPLEMENTATION AT HIS TIME');
                    _k = log;
                    return [4, qt.get.markets.quotes.options({
                            underlyingId: stockNumericID,
                            expiryDate: optionExpiryDate,
                        })];
                case 11:
                    _k.apply(void 0, [_w.sent()]);
                    _l = log;
                    return [4, qt.get.markets.quotes.options.byIds([optionNumericID])];
                case 12:
                    _l.apply(void 0, [_w.sent()]);
                    _m = log;
                    return [4, qt.get.markets.quotes.byIds([stockNumericID])];
                case 13:
                    _m.apply(void 0, [_w.sent()]);
                    _o = log;
                    return [4, qt.get.markets.allMarkets()];
                case 14:
                    _o.apply(void 0, [_w.sent()]);
                    _p = log;
                    return [4, qt.get.symbols.optionsById(stockNumericID)];
                case 15:
                    _p.apply(void 0, [_w.sent()]);
                    _q = log;
                    return [4, qt.get.symbols.search(stockStringID)];
                case 16:
                    _q.apply(void 0, [_w.sent()]);
                    _r = log;
                    return [4, qt.get.symbols.search(stockStringID)];
                case 17:
                    _r.apply(void 0, [(_w.sent()).count]);
                    _s = log;
                    return [4, qt.get.symbols.search.count(stockStringID)];
                case 18:
                    _s.apply(void 0, [_w.sent()]);
                    _t = log;
                    return [4, qt.get.symbols.searchCount(stockStringID)];
                case 19:
                    _t.apply(void 0, [_w.sent()]);
                    _u = log;
                    return [4, qt.get.symbols.searchAll(stockStringID)];
                case 20:
                    _u.apply(void 0, [_w.sent()]);
                    _v = log;
                    return [4, qt.get.symbols.byIds([stockNumericID])];
                case 21:
                    _v.apply(void 0, [_w.sent()]);
                    console.dir(_1.Enumerations.Currency);
                    console.dir(_1.Enumerations.ListingExchange);
                    console.dir(_1.Enumerations.AccountType);
                    console.dir(_1.Enumerations.ClientAccountType);
                    console.dir(_1.Enumerations.AccountStatus);
                    console.dir(_1.Enumerations.TickType);
                    console.dir(_1.Enumerations.OptionType);
                    console.dir(_1.Enumerations.OptionDurationType);
                    console.dir(_1.Enumerations.OptionExerciseType);
                    console.dir(_1.Enumerations.SecurityType);
                    console.dir(_1.Enumerations.OrderStateFilterType);
                    console.dir(_1.Enumerations.OrderAction);
                    console.dir(_1.Enumerations.OrderSide);
                    console.dir(_1.Enumerations.OrderType);
                    console.dir(_1.Enumerations.OrderTimeInForce);
                    console.dir(_1.Enumerations.OrderState);
                    console.dir(_1.Enumerations.HistoricalDataGranularity);
                    console.dir(_1.Enumerations.OrderClass);
                    console.dir(_1.Enumerations.StrategyTypes);
                    log(credentials);
                    return [3, 23];
                case 22:
                    error_1 = _w.sent();
                    console.error(error_1.message);
                    return [3, 23];
                case 23: return [2];
            }
        });
    }); })();
};
function runExamples(isTesting) {
    if (isTesting === void 0) { isTesting = false; }
    if (!isTesting)
        return;
    var toISOStringDate = function (dateTime) {
        return new Date(dateTime).toISOString();
    };
    var tenDays = _1.day(10);
    var timeNow = Date.now();
    var start = timeNow - tenDays;
    var end = timeNow;
    var exampleStartTime = toISOStringDate(start);
    var exampleEndTime = toISOStringDate(end);
    var exampleOptionExpiryDate = '2019-10-04T05:37:30.053Z';
    var exampleOptionNumericID = 27003348;
    var exampleStockNumericID = 8049;
    var exampleStockStringID = 'aapl';
    var refreshToken = 'G0DpF1a5ANONc1kgkC5aOuoMUMrW0X0l0';
    exports.testExamples(refreshToken, exampleStartTime, exampleEndTime, exampleOptionExpiryDate, exampleOptionNumericID, exampleStockNumericID, exampleStockStringID);
    return;
}
runExamples(testing);
//# sourceMappingURL=testExamples.js.map