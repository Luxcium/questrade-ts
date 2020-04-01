"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var __1 = require("../..");
var utils_1 = require("../../utils");
var dateRange30Days = utils_1.setDateRange(30);
var qtApi;
var credentials;
var account;
var market;
var getQuotes;
var getOptionsQuotes;
var getSymbols;
var getOptionChains;
var search;
beforeAll(function (done) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var qtApiAndCredentials;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, __1.redeemToken('MOCK')];
            case 1:
                qtApiAndCredentials = _a.sent();
                qtApi = qtApiAndCredentials.qtApi;
                credentials = qtApiAndCredentials.credentials;
                account = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
                    return [2 /*return*/, qtApi.account];
                }); }); };
                market = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
                    return [2 /*return*/, qtApi.market];
                }); }); };
                getQuotes = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
                    return [2 /*return*/, qtApi.getQuotes];
                }); }); };
                getOptionsQuotes = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
                    return [2 /*return*/, qtApi.getOptionsQuotes];
                }); }); };
                search = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
                    return [2 /*return*/, qtApi.search];
                }); }); };
                getSymbols = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
                    return [2 /*return*/, qtApi.getSymbols];
                }); }); };
                getOptionChains = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
                    return [2 /*return*/, qtApi.getOptionChains];
                }); }); };
                utils_1.void0({
                    dateRange30Days: dateRange30Days,
                    market: market,
                    getQuotes: getQuotes,
                    search: search,
                    getSymbols: getSymbols,
                });
                done();
                return [2 /*return*/];
        }
    });
}); });
// # QtAPI PROPERTIES
describe('QtAPI PROPERTIES will test all properties and methods on qtApi', function () {
    it('should validate credentials toValue', function (done) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            utils_1.void0(credentials.toValue());
            done();
            return [2 /*return*/];
        });
    }); });
    it('should credentials toString', function (done) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            utils_1.void0(credentials.toString());
            done();
            return [2 /*return*/];
        });
    }); });
    it('should validate qtApi myBalances', function (done) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = expect;
                    return [4 /*yield*/, qtApi.myBalances()];
                case 1:
                    _a.apply(void 0, [(_b.sent()).CAD.combined.current.buyingPower]).not.toBeNaN();
                    done();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should validate qtApi myBalances', function (done) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            utils_1.void0(qtApi.serverTime);
            done();
            return [2 /*return*/];
        });
    }); });
    it('should validate qtApi myBalances', function (done) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = utils_1.void0;
                    return [4 /*yield*/, qtApi.myBalances()];
                case 1:
                    _a.apply(void 0, [(_b.sent()).CAD.combined.current.buyingPower]);
                    done();
                    return [2 /*return*/];
            }
        });
    }); });
});
// # ACCOUNT METHODS
describe('ACCOUNT METHODS will test all methods on get.account', function () {
    it('should validate activities', function (done) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var activities30Days, _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    activities30Days = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () { var _a; return tslib_1.__generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = dateRange30Days;
                                return [4 /*yield*/, account()];
                            case 1: return [2 /*return*/, _a.apply(void 0, [(_b.sent()).getActivities])];
                        }
                    }); }); };
                    _a = utils_1.void0;
                    return [4 /*yield*/, activities30Days()];
                case 1:
                    _a.apply(void 0, [_b.sent()]);
                    done();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should validate balances', function (done) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = utils_1.void0;
                    return [4 /*yield*/, account()];
                case 1: return [4 /*yield*/, (_b.sent()).getBalances()];
                case 2:
                    _a.apply(void 0, [_b.sent()]);
                    done();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should validate allAccount', function (done) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = utils_1.void0;
                    return [4 /*yield*/, account()];
                case 1: return [4 /*yield*/, (_b.sent()).getAllAccounts()];
                case 2:
                    _a.apply(void 0, [_b.sent()]);
                    done();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should validate executions', function (done) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var executions30Days, _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    executions30Days = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () { var _a; return tslib_1.__generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = dateRange30Days;
                                return [4 /*yield*/, account()];
                            case 1: return [2 /*return*/, _a.apply(void 0, [(_b.sent()).getExecutions])];
                        }
                    }); }); };
                    _a = utils_1.void0;
                    return [4 /*yield*/, executions30Days()];
                case 1:
                    _a.apply(void 0, [_b.sent()]);
                    done();
                    return [2 /*return*/];
            }
        });
    }); });
    it("should validate orders 'All' state filter", function (done) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var orders30Days, _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    orders30Days = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () { var _a; return tslib_1.__generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = dateRange30Days;
                                return [4 /*yield*/, account()];
                            case 1: return [2 /*return*/, _a.apply(void 0, [(_b.sent()).getOrders('All')])];
                        }
                    }); }); };
                    _a = utils_1.void0;
                    return [4 /*yield*/, orders30Days()];
                case 1:
                    _a.apply(void 0, [_b.sent()]);
                    done();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should validate orders default state filter', function (done) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var orders30Days, _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    orders30Days = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () { var _a; return tslib_1.__generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = dateRange30Days;
                                return [4 /*yield*/, account()];
                            case 1: return [2 /*return*/, _a.apply(void 0, [(_b.sent()).getOrders()])];
                        }
                    }); }); };
                    _a = utils_1.void0;
                    return [4 /*yield*/, orders30Days()];
                case 1:
                    _a.apply(void 0, [_b.sent()]);
                    done();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should validate orders Open state filter', function (done) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var orders30Days, _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    orders30Days = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () { var _a; return tslib_1.__generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = dateRange30Days;
                                return [4 /*yield*/, account()];
                            case 1: return [2 /*return*/, _a.apply(void 0, [(_b.sent()).getOrders('Open')])];
                        }
                    }); }); };
                    _a = utils_1.void0;
                    return [4 /*yield*/, orders30Days()];
                case 1:
                    _a.apply(void 0, [_b.sent()]);
                    done();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should validate orders Closed state filter', function (done) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var orders30Days, _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    orders30Days = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () { var _a; return tslib_1.__generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = dateRange30Days;
                                return [4 /*yield*/, account()];
                            case 1: return [2 /*return*/, _a.apply(void 0, [(_b.sent()).getOrders('Closed')])];
                        }
                    }); }); };
                    _a = utils_1.void0;
                    return [4 /*yield*/, orders30Days()];
                case 1:
                    _a.apply(void 0, [_b.sent()]);
                    done();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should validate ordersByIds', function (done) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = utils_1.void0;
                    return [4 /*yield*/, account()];
                case 1:
                    _a.apply(void 0, [(_b.sent()).getOrdersByIds([123])]);
                    done();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should validate positions', function (done) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = utils_1.void0;
                    return [4 /*yield*/, account()];
                case 1: return [4 /*yield*/, (_b.sent()).getPositions()];
                case 2:
                    _a.apply(void 0, [_b.sent()]);
                    done();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should validate serverTime', function (done) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = utils_1.void0;
                    return [4 /*yield*/, account()];
                case 1: return [4 /*yield*/, (_b.sent()).getServerTime()];
                case 2:
                    _a.apply(void 0, [_b.sent()]);
                    done();
                    return [2 /*return*/];
            }
        });
    }); });
});
// # MARKET METHODS
describe('MARKET METHODS will test all methods on get.market', function () {
    it('should validate allMarkets', function (done) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = utils_1.void0;
                    return [4 /*yield*/, market()];
                case 1: return [4 /*yield*/, (_b.sent()).getAllMarkets()];
                case 2:
                    _a.apply(void 0, [_b.sent()]);
                    done();
                    return [2 /*return*/];
            }
        });
    }); });
    it("should validate candlesByStockId with 'OneDay' interval", function (done) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var candel30Day, _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    candel30Day = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () { var _a; return tslib_1.__generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = dateRange30Days;
                                return [4 /*yield*/, market()];
                            case 1: return [2 /*return*/, _a.apply(void 0, [(_b.sent()).getCandlesByStockId(8049)('OneDay')])];
                        }
                    }); }); };
                    _a = utils_1.void0;
                    return [4 /*yield*/, candel30Day()];
                case 1:
                    _a.apply(void 0, [_b.sent()]);
                    done();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should validate candlesByStockId with default interval', function (done) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var candel30Day, _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    candel30Day = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () { var _a; return tslib_1.__generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = dateRange30Days;
                                return [4 /*yield*/, market()];
                            case 1: return [2 /*return*/, _a.apply(void 0, [(_b.sent()).getCandlesByStockId(8049)()])];
                        }
                    }); }); };
                    _a = utils_1.void0;
                    return [4 /*yield*/, candel30Day()];
                case 1:
                    _a.apply(void 0, [_b.sent()]);
                    done();
                    return [2 /*return*/];
            }
        });
    }); });
});
// # QUOTES METHODES
describe('QUOTES METHODES will test all methods on get.quotes', function () {
    var demoRequestVariants = {
        variants: [
            {
                variantId: 1,
                strategy: 'Custom',
                legs: [
                    {
                        symbolId: 27244725,
                        ratio: 1000,
                        action: 'Buy',
                    },
                    {
                        symbolId: 27244738,
                        ratio: 1001,
                        action: 'Sell',
                    },
                ],
            },
        ],
    };
    it('should validate get quotes byStockIds', function (done) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = utils_1.void0;
                    return [4 /*yield*/, getQuotes()];
                case 1: return [4 /*yield*/, (_b.sent()).byStockIds([8049])];
                case 2:
                    _a.apply(void 0, [_b.sent()]);
                    done();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should validate get quotes byStrategies', function (done) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = utils_1.void0;
                    return [4 /*yield*/, getQuotes()];
                case 1: return [4 /*yield*/, (_b.sent()).byStrategies(demoRequestVariants)];
                case 2:
                    _a.apply(void 0, [_b.sent()]);
                    done();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should validate that can get optionsQuotes fromFilter', function (done) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = utils_1.void0;
                    return [4 /*yield*/, getOptionsQuotes()];
                case 1: return [4 /*yield*/, (_b.sent()).fromFilter({
                        expiryDate: '2019-10-18T00:00:00.000000-05:00',
                        underlyingId: 27426,
                    })];
                case 2:
                    _a.apply(void 0, [_b.sent()]);
                    done();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should validate that can get optionsQuotes byOptionsIds', function (done) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = utils_1.void0;
                    return [4 /*yield*/, getOptionsQuotes()];
                case 1: return [4 /*yield*/, (_b.sent()).byOptionsIds([27244725])];
                case 2:
                    _a.apply(void 0, [_b.sent()]);
                    done();
                    return [2 /*return*/];
            }
        });
    }); });
});
// # SEARCH METHODES
describe('SEARCH METHODES will test all methods on get.search', function () {
    it('should validate countResults ', function (done) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var _a, _b;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _a = utils_1.void0;
                    return [4 /*yield*/, search()];
                case 1: return [4 /*yield*/, (_c.sent()).stock('aapl')];
                case 2:
                    _a.apply(void 0, [_c.sent()]);
                    _b = utils_1.void0;
                    return [4 /*yield*/, search()];
                case 3: return [4 /*yield*/, (_c.sent()).stock('aapl', 0)];
                case 4:
                    _b.apply(void 0, [_c.sent()]);
                    done();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should validate allStocks ', function (done) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var _a, _b;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _a = utils_1.void0;
                    return [4 /*yield*/, search()];
                case 1: return [4 /*yield*/, (_c.sent()).allStocks('aapl')];
                case 2:
                    _a.apply(void 0, [_c.sent()]);
                    _b = utils_1.void0;
                    return [4 /*yield*/, search()];
                case 3: return [4 /*yield*/, (_c.sent()).allStocks('aapl', 0)];
                case 4:
                    _b.apply(void 0, [_c.sent()]);
                    done();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should validate countResults ', function (done) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = utils_1.void0;
                    return [4 /*yield*/, search()];
                case 1: return [4 /*yield*/, (_b.sent()).countResults('aapl')];
                case 2:
                    _a.apply(void 0, [_b.sent()]);
                    done();
                    return [2 /*return*/];
            }
        });
    }); });
});
// # SYMBOLS METHODS
describe('SYMBOLS METHODS will test all methods on get.symbols', function () {
    it('should validate optionChains byStockId', function (done) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = utils_1.void0;
                    return [4 /*yield*/, getOptionChains()];
                case 1: return [4 /*yield*/, (_b.sent()).byStockId(8049)];
                case 2:
                    _a.apply(void 0, [_b.sent()]);
                    done();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should validate symbols byStockIds', function (done) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = utils_1.void0;
                    return [4 /*yield*/, getSymbols()];
                case 1: return [4 /*yield*/, (_b.sent()).byStockIds([8049])];
                case 2:
                    _a.apply(void 0, [_b.sent()]);
                    done();
                    return [2 /*return*/];
            }
        });
    }); });
});
utils_1.void0(utils_1.log);
//# sourceMappingURL=_getQuestradeApi.spec.js.map