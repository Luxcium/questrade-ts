/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./build/src/get-token.js":
/*!********************************!*\
  !*** ./build/src/get-token.js ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getMyToken = void 0;
var dotenv_1 = __webpack_require__(/*! dotenv */ "./node_modules/dotenv/lib/main.js");
/** QuesTrade Token */
// in (dot).env file :
// QUESTRADE_API_TOKEN="PQHfjX1hPA-XXXXX_XXXXX-6vpDUDRHB0"
exports.getMyToken = function () {
    var _a;
    dotenv_1.config();
    return (_a = process.env.QUESTRADE_API_TOKEN) !== null && _a !== void 0 ? _a : '';
};
//# sourceMappingURL=get-token.js.map

/***/ }),

/***/ "./build/src/index.js":
/*!****************************!*\
  !*** ./build/src/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.introspect = exports.redeemToken = exports.getMyToken = void 0;
var get_token_1 = __webpack_require__(/*! ./get-token */ "./build/src/get-token.js");
Object.defineProperty(exports, "getMyToken", ({ enumerable: true, get: function () { return get_token_1.getMyToken; } }));
var public_1 = __webpack_require__(/*! ./public */ "./build/src/public/index.js");
Object.defineProperty(exports, "redeemToken", ({ enumerable: true, get: function () { return public_1.redeemToken; } }));
exports.introspect = { onOff: false };
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./build/src/private/api/AccountsCalls/_getAccounts/_getAccounts.js":
/*!**************************************************************************!*\
  !*** ./build/src/private/api/AccountsCalls/_getAccounts/_getAccounts.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._getAccounts = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var routes_1 = __webpack_require__(/*! ../../../routes */ "./build/src/private/routes/index.js");
// + _getAccounts
/** _getAccounts */
function _getAccounts(credentials, proxy) {
    var _this = this;
    //
    return function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var getAccounts, accounts, data, error_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    getAccounts = routes_1._axiosGetApi(credentials, proxy);
                    accounts = getAccounts('/accounts');
                    return [4 /*yield*/, accounts()];
                case 1:
                    data = _a.sent();
                    //
                    return [2 /*return*/, data.accounts];
                case 2:
                    error_1 = _a.sent();
                    console.error(error_1.message);
                    return [2 /*return*/, []];
                case 3: return [2 /*return*/];
            }
        });
    }); };
}
exports._getAccounts = _getAccounts;
// import { Credentials, IAccount, IAccounts } from '../../../../typescript';
// import { _axiosGetApi } from '../../../routes';
// // + _getAccounts
// /** _getAccounts */
// export function _getAccounts(credentials: Credentials) {
//   //
//   return async (): Promise<IAccount[]> => {
//     try {
//       const getAccounts = _axiosGetApi(credentials);
//       const accounts = await getAccounts<IAccounts>('/accounts')();
//       return accounts.accountList;
//     } catch (error) {
//       console.error(error);
//       console.log('CODE BROKE HERE');
//       return [];
//     }
//   };
// }
//# sourceMappingURL=_getAccounts.js.map

/***/ }),

/***/ "./build/src/private/api/AccountsCalls/_getActivities/_getActivities.js":
/*!******************************************************************************!*\
  !*** ./build/src/private/api/AccountsCalls/_getActivities/_getActivities.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._getActivities = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var utils_1 = __webpack_require__(/*! ../../../../utils */ "./build/src/utils/index.js");
var routes_1 = __webpack_require__(/*! ../../../routes */ "./build/src/private/routes/index.js");
// + _getActivities
/** PROVIDE: credentials, startTime string and endTime string THEN GET: a 'Promise<IAccountActivity[]>' */
exports._getActivities = function (credentials, proxy) {
    return function (startTime) {
        //
        return function (endTime) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
            var accountGetApi, dateTime, endpoint, accountGet, activities, error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        accountGetApi = routes_1._axiosAccountGetApi(credentials, proxy);
                        dateTime = utils_1.endpointFormatDateTool(startTime, endTime);
                        endpoint = "/activities?" + dateTime;
                        accountGet = accountGetApi(endpoint);
                        return [4 /*yield*/, accountGet()];
                    case 1:
                        activities = _a.sent();
                        return [2 /*return*/, activities.activities];
                    case 2:
                        error_1 = _a.sent();
                        console.error(error_1);
                        return [2 /*return*/, []];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
    };
};
//# sourceMappingURL=_getActivities.js.map

/***/ }),

/***/ "./build/src/private/api/AccountsCalls/_getBalances/_getBalances.js":
/*!**************************************************************************!*\
  !*** ./build/src/private/api/AccountsCalls/_getBalances/_getBalances.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._getBalances = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var routes_1 = __webpack_require__(/*! ../../../routes */ "./build/src/private/routes/index.js");
// + _getBalances
/** _getBalances */
exports._getBalances = function (credentials, proxy) { return function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        try {
            return [2 /*return*/, routes_1._axiosAccountGetApi(credentials, proxy)('/balances')()];
        }
        catch (error) {
            console.error(error);
            return [2 /*return*/, {
                    perCurrencyBalances: [],
                    combinedBalances: [],
                    sodPerCurrencyBalances: [],
                    sodCombinedBalances: [],
                }];
        }
        return [2 /*return*/];
    });
}); }; };
//# sourceMappingURL=_getBalances.js.map

/***/ }),

/***/ "./build/src/private/api/AccountsCalls/_getBalances/_myBalances.js":
/*!*************************************************************************!*\
  !*** ./build/src/private/api/AccountsCalls/_getBalances/_myBalances.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._myBalances = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var questrade_api_enumerations_1 = __webpack_require__(/*! questrade-api-enumerations */ "./node_modules/questrade-api-enumerations/qtEnumerations.js");
exports._myBalances = function (myBalances) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, perCADcurrent, perUSDcurrent, _b, combinedCADcurrent, combinedUSDcurrent, _c, perCADstartOfDay, perUSDstartOfDay, _d, combinedCADstartOfDay, combinedUSDstartOfDay, perCurrency, combined, CAD, USD, current, startOfDay;
    return tslib_1.__generator(this, function (_e) {
        try {
            _a = tslib_1.__read(myBalances.perCurrencyBalances, 2), perCADcurrent = _a[0], perUSDcurrent = _a[1];
            _b = tslib_1.__read(myBalances.combinedBalances, 2), combinedCADcurrent = _b[0], combinedUSDcurrent = _b[1];
            _c = tslib_1.__read(myBalances.sodPerCurrencyBalances, 2), perCADstartOfDay = _c[0], perUSDstartOfDay = _c[1];
            _d = tslib_1.__read(myBalances.sodCombinedBalances, 2), combinedCADstartOfDay = _d[0], combinedUSDstartOfDay = _d[1];
            perCurrency = {
                CAD: {
                    startOfDay: perCADstartOfDay,
                    current: perCADcurrent,
                },
                USD: {
                    startOfDay: perUSDstartOfDay,
                    current: perUSDcurrent,
                },
            };
            combined = {
                CAD: {
                    startOfDay: combinedCADstartOfDay,
                    current: combinedCADcurrent,
                },
                USD: {
                    startOfDay: combinedUSDstartOfDay,
                    current: combinedUSDcurrent,
                },
            };
            CAD = {
                perCurrency: {
                    startOfDay: perCADstartOfDay,
                    current: perCADcurrent,
                },
                combined: {
                    startOfDay: combinedCADstartOfDay,
                    current: combinedCADcurrent,
                },
            };
            USD = {
                combined: {
                    startOfDay: combinedUSDstartOfDay,
                    current: combinedUSDcurrent,
                },
                perCurrency: {
                    startOfDay: perUSDstartOfDay,
                    current: perUSDcurrent,
                },
            };
            current = {
                perCurrency: {
                    CAD: perCADcurrent,
                    USD: perUSDcurrent,
                },
                combined: {
                    CAD: combinedCADcurrent,
                    USD: combinedUSDcurrent,
                },
            };
            startOfDay = {
                combined: {
                    CAD: combinedCADstartOfDay,
                    USD: combinedUSDstartOfDay,
                },
                perCurrency: {
                    CAD: perCADstartOfDay,
                    USD: perUSDstartOfDay,
                },
            };
            return [2 /*return*/, { perCurrency: perCurrency, combined: combined, current: current, startOfDay: startOfDay, CAD: CAD, USD: USD }];
        }
        catch (error) {
            console.error(error);
            return [2 /*return*/, {
                    perCurrency: {
                        CAD: {
                            startOfDay: {
                                currency: questrade_api_enumerations_1.Currency.CAD,
                                cash: Number.NaN,
                                marketValue: Number.NaN,
                                totalEquity: Number.NaN,
                                buyingPower: Number.NaN,
                                maintenanceExcess: Number.NaN,
                                isRealTime: false,
                            },
                            current: {
                                currency: questrade_api_enumerations_1.Currency.CAD,
                                cash: Number.NaN,
                                marketValue: Number.NaN,
                                totalEquity: Number.NaN,
                                buyingPower: Number.NaN,
                                maintenanceExcess: Number.NaN,
                                isRealTime: false,
                            },
                        },
                        USD: {
                            startOfDay: {
                                currency: questrade_api_enumerations_1.Currency.CAD,
                                cash: Number.NaN,
                                marketValue: Number.NaN,
                                totalEquity: Number.NaN,
                                buyingPower: Number.NaN,
                                maintenanceExcess: Number.NaN,
                                isRealTime: false,
                            },
                            current: {
                                currency: questrade_api_enumerations_1.Currency.CAD,
                                cash: Number.NaN,
                                marketValue: Number.NaN,
                                totalEquity: Number.NaN,
                                buyingPower: Number.NaN,
                                maintenanceExcess: Number.NaN,
                                isRealTime: false,
                            },
                        },
                    },
                    combined: {
                        CAD: {
                            startOfDay: {
                                currency: questrade_api_enumerations_1.Currency.CAD,
                                cash: Number.NaN,
                                marketValue: Number.NaN,
                                totalEquity: Number.NaN,
                                buyingPower: Number.NaN,
                                maintenanceExcess: Number.NaN,
                                isRealTime: false,
                            },
                            current: {
                                currency: questrade_api_enumerations_1.Currency.CAD,
                                cash: Number.NaN,
                                marketValue: Number.NaN,
                                totalEquity: Number.NaN,
                                buyingPower: Number.NaN,
                                maintenanceExcess: Number.NaN,
                                isRealTime: false,
                            },
                        },
                        USD: {
                            startOfDay: {
                                currency: questrade_api_enumerations_1.Currency.CAD,
                                cash: Number.NaN,
                                marketValue: Number.NaN,
                                totalEquity: Number.NaN,
                                buyingPower: Number.NaN,
                                maintenanceExcess: Number.NaN,
                                isRealTime: false,
                            },
                            current: {
                                currency: questrade_api_enumerations_1.Currency.CAD,
                                cash: Number.NaN,
                                marketValue: Number.NaN,
                                totalEquity: Number.NaN,
                                buyingPower: Number.NaN,
                                maintenanceExcess: Number.NaN,
                                isRealTime: false,
                            },
                        },
                    },
                    current: {
                        perCurrency: {
                            CAD: {
                                currency: questrade_api_enumerations_1.Currency.CAD,
                                cash: Number.NaN,
                                marketValue: Number.NaN,
                                totalEquity: Number.NaN,
                                buyingPower: Number.NaN,
                                maintenanceExcess: Number.NaN,
                                isRealTime: false,
                            },
                            USD: {
                                currency: questrade_api_enumerations_1.Currency.CAD,
                                cash: Number.NaN,
                                marketValue: Number.NaN,
                                totalEquity: Number.NaN,
                                buyingPower: Number.NaN,
                                maintenanceExcess: Number.NaN,
                                isRealTime: false,
                            },
                        },
                        combined: {
                            CAD: {
                                currency: questrade_api_enumerations_1.Currency.CAD,
                                cash: Number.NaN,
                                marketValue: Number.NaN,
                                totalEquity: Number.NaN,
                                buyingPower: Number.NaN,
                                maintenanceExcess: Number.NaN,
                                isRealTime: false,
                            },
                            USD: {
                                currency: questrade_api_enumerations_1.Currency.CAD,
                                cash: Number.NaN,
                                marketValue: Number.NaN,
                                totalEquity: Number.NaN,
                                buyingPower: Number.NaN,
                                maintenanceExcess: Number.NaN,
                                isRealTime: false,
                            },
                        },
                    },
                    startOfDay: {
                        combined: {
                            CAD: {
                                currency: questrade_api_enumerations_1.Currency.CAD,
                                cash: Number.NaN,
                                marketValue: Number.NaN,
                                totalEquity: Number.NaN,
                                buyingPower: Number.NaN,
                                maintenanceExcess: Number.NaN,
                                isRealTime: false,
                            },
                            USD: {
                                currency: questrade_api_enumerations_1.Currency.CAD,
                                cash: Number.NaN,
                                marketValue: Number.NaN,
                                totalEquity: Number.NaN,
                                buyingPower: Number.NaN,
                                maintenanceExcess: Number.NaN,
                                isRealTime: false,
                            },
                        },
                        perCurrency: {
                            CAD: {
                                currency: questrade_api_enumerations_1.Currency.CAD,
                                cash: Number.NaN,
                                marketValue: Number.NaN,
                                totalEquity: Number.NaN,
                                buyingPower: Number.NaN,
                                maintenanceExcess: Number.NaN,
                                isRealTime: false,
                            },
                            USD: {
                                currency: questrade_api_enumerations_1.Currency.CAD,
                                cash: Number.NaN,
                                marketValue: Number.NaN,
                                totalEquity: Number.NaN,
                                buyingPower: Number.NaN,
                                maintenanceExcess: Number.NaN,
                                isRealTime: false,
                            },
                        },
                    },
                    CAD: {
                        perCurrency: {
                            startOfDay: {
                                currency: questrade_api_enumerations_1.Currency.CAD,
                                cash: Number.NaN,
                                marketValue: Number.NaN,
                                totalEquity: Number.NaN,
                                buyingPower: Number.NaN,
                                maintenanceExcess: Number.NaN,
                                isRealTime: false,
                            },
                            current: {
                                currency: questrade_api_enumerations_1.Currency.CAD,
                                cash: Number.NaN,
                                marketValue: Number.NaN,
                                totalEquity: Number.NaN,
                                buyingPower: Number.NaN,
                                maintenanceExcess: Number.NaN,
                                isRealTime: false,
                            },
                        },
                        combined: {
                            startOfDay: {
                                currency: questrade_api_enumerations_1.Currency.CAD,
                                cash: Number.NaN,
                                marketValue: Number.NaN,
                                totalEquity: Number.NaN,
                                buyingPower: Number.NaN,
                                maintenanceExcess: Number.NaN,
                                isRealTime: false,
                            },
                            current: {
                                currency: questrade_api_enumerations_1.Currency.CAD,
                                cash: Number.NaN,
                                marketValue: Number.NaN,
                                totalEquity: Number.NaN,
                                buyingPower: Number.NaN,
                                maintenanceExcess: Number.NaN,
                                isRealTime: false,
                            },
                        },
                    },
                    USD: {
                        combined: {
                            startOfDay: {
                                currency: questrade_api_enumerations_1.Currency.CAD,
                                cash: Number.NaN,
                                marketValue: Number.NaN,
                                totalEquity: Number.NaN,
                                buyingPower: Number.NaN,
                                maintenanceExcess: Number.NaN,
                                isRealTime: false,
                            },
                            current: {
                                currency: questrade_api_enumerations_1.Currency.CAD,
                                cash: Number.NaN,
                                marketValue: Number.NaN,
                                totalEquity: Number.NaN,
                                buyingPower: Number.NaN,
                                maintenanceExcess: Number.NaN,
                                isRealTime: false,
                            },
                        },
                        perCurrency: {
                            startOfDay: {
                                currency: questrade_api_enumerations_1.Currency.CAD,
                                cash: Number.NaN,
                                marketValue: Number.NaN,
                                totalEquity: Number.NaN,
                                buyingPower: Number.NaN,
                                maintenanceExcess: Number.NaN,
                                isRealTime: false,
                            },
                            current: {
                                currency: questrade_api_enumerations_1.Currency.CAD,
                                cash: Number.NaN,
                                marketValue: Number.NaN,
                                totalEquity: Number.NaN,
                                buyingPower: Number.NaN,
                                maintenanceExcess: Number.NaN,
                                isRealTime: false,
                            },
                        },
                    },
                }];
        }
        return [2 /*return*/];
    });
}); };
/*
 {
      "perCurrencyBalances": [
        {
          "currency": "CAD",
          "cash": 100.15,
          "marketValue": 0,
          "totalEquity": 100.15,
          "buyingPower": 100.15,
          "maintenanceExcess": 100.15,
          "isRealTime": true
        },
        {
          "currency": "USD",
          "cash": 100.13,
          "marketValue": 0,
          "totalEquity": 100.13,
          "buyingPower": 100.13,
          "maintenanceExcess": 100.13,
          "isRealTime": false
        }
      ],
      "combinedBalances": [
        {
          "currency": "CAD",
          "cash": 200.25,
          "marketValue": 0,
          "totalEquity": 200.25,
          "buyingPower": 200.25,
          "maintenanceExcess": 200.25,
          "isRealTime": false
        },
        {
          "currency": "USD",
          "cash": 200.23,
          "marketValue": 0,
          "totalEquity": 200.23,
          "buyingPower": 200.23,
          "maintenanceExcess": 200.23,
          "isRealTime": false
        }
      ],
      "sodPerCurrencyBalances": [
        {
          "currency": "CAD",
          "cash": -100.05,
          "marketValue": 0,
          "totalEquity": -100.05,
          "buyingPower": -100.05,
          "maintenanceExcess": -100.05,
          "isRealTime": true
        },
        {
          "currency": "USD",
          "cash": -100.03,
          "marketValue": 0,
          "totalEquity": -100.03,
          "buyingPower": -100.03,
          "maintenanceExcess": -100.03,
          "isRealTime": true
        }
      ],
      "sodCombinedBalances": [
        {
          "currency": "CAD",
          "cash": -200.55,
          "marketValue": 0,
          "totalEquity": -200.55,
          "buyingPower": -200.55,
          "maintenanceExcess": -200.55,
          "isRealTime": true
        },
        {
          "currency": "USD",
          "cash": -200.33,
          "marketValue": 0,
          "totalEquity": -200.33,
          "buyingPower": -200.33,
          "maintenanceExcess": -200.33,
          "isRealTime": true
        }
      ]
    }

*/
//# sourceMappingURL=_myBalances.js.map

/***/ }),

/***/ "./build/src/private/api/AccountsCalls/_getExecutions/_getExecutions.js":
/*!******************************************************************************!*\
  !*** ./build/src/private/api/AccountsCalls/_getExecutions/_getExecutions.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._getExecutions = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var utils_1 = __webpack_require__(/*! ../../../../utils */ "./build/src/utils/index.js");
var routes_1 = __webpack_require__(/*! ../../../routes */ "./build/src/private/routes/index.js");
// + _getExecutions
/** _getExecutions */
exports._getExecutions = function (credentials, proxy) { return function (startDate) { return function (endDate) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var executions, error_1;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, routes_1._axiosAccountGetApi(credentials, proxy)("/executions?" + utils_1.endpointFormatDateTool(startDate, endDate))()];
            case 1:
                executions = _a.sent();
                return [2 /*return*/, executions.executions];
            case 2:
                error_1 = _a.sent();
                console.error(error_1);
                return [2 /*return*/, []];
            case 3: return [2 /*return*/];
        }
    });
}); }; }; };
//# sourceMappingURL=_getExecutions.js.map

/***/ }),

/***/ "./build/src/private/api/AccountsCalls/_getOrders/_getOrders.js":
/*!**********************************************************************!*\
  !*** ./build/src/private/api/AccountsCalls/_getOrders/_getOrders.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._getOrders = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var utils_1 = __webpack_require__(/*! ../../../../utils */ "./build/src/utils/index.js");
var routes_1 = __webpack_require__(/*! ../../../routes */ "./build/src/private/routes/index.js");
// + _getOrders
/** _getOrders */
exports._getOrders = function (credentials, proxy) { return function (stateFilter) {
    if (stateFilter === void 0) { stateFilter = 'All'; }
    return function (startDate) { return function (endDate) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var orders, error_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, routes_1._axiosAccountGetApi(credentials, proxy)("/orders?" + utils_1.endpointFormatDateTool(startDate, endDate) + "&stateFilter=" + stateFilter)()];
                case 1:
                    orders = _a.sent();
                    return [2 /*return*/, orders.orders];
                case 2:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [2 /*return*/, []];
                case 3: return [2 /*return*/];
            }
        });
    }); }; };
}; };
//# sourceMappingURL=_getOrders.js.map

/***/ }),

/***/ "./build/src/private/api/AccountsCalls/_getOrders/_getOrdersByIds.js":
/*!***************************************************************************!*\
  !*** ./build/src/private/api/AccountsCalls/_getOrders/_getOrdersByIds.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._getOrdersByIds = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var routes_1 = __webpack_require__(/*! ../../../routes */ "./build/src/private/routes/index.js");
// + _getOrderByIds
/** _getOrders */
exports._getOrdersByIds = function (credentials, proxy) { return function (orderId) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var error_1;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, routes_1._axiosAccountGetApi(credentials, proxy)("/orders?ids=" + orderId.join(','))()];
            case 1: 
            //
            return [2 /*return*/, (_a.sent()).orders];
            case 2:
                error_1 = _a.sent();
                console.error(error_1);
                return [2 /*return*/, []];
            case 3: return [2 /*return*/];
        }
    });
}); }; };
//# sourceMappingURL=_getOrdersByIds.js.map

/***/ }),

/***/ "./build/src/private/api/AccountsCalls/_getPositions/_getPositions.js":
/*!****************************************************************************!*\
  !*** ./build/src/private/api/AccountsCalls/_getPositions/_getPositions.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._getPositions = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var routes_1 = __webpack_require__(/*! ../../../routes */ "./build/src/private/routes/index.js");
// + _getPositions
/** _getPositions */
exports._getPositions = function (credentials, proxy) { return function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var positions, error_1;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, routes_1._axiosAccountGetApi(credentials, proxy)('/positions')()];
            case 1:
                positions = _a.sent();
                return [2 /*return*/, positions.positions];
            case 2:
                error_1 = _a.sent();
                console.error(error_1);
                return [2 /*return*/, []];
            case 3: return [2 /*return*/];
        }
    });
}); }; };
//# sourceMappingURL=_getPositions.js.map

/***/ }),

/***/ "./build/src/private/api/AccountsCalls/_getServerTime/_getServerTime.js":
/*!******************************************************************************!*\
  !*** ./build/src/private/api/AccountsCalls/_getServerTime/_getServerTime.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._getServerTime = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var routes_1 = __webpack_require__(/*! ../../../routes */ "./build/src/private/routes/index.js");
// + _getServerTime
/** _getTime */
exports._getServerTime = function (credentials, proxy) { return function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () { var _a; return tslib_1.__generator(this, function (_b) {
    switch (_b.label) {
        case 0:
            _a = Date.bind;
            return [4 /*yield*/, routes_1._axiosGetApi(credentials, proxy)('/time')()];
        case 1: return [2 /*return*/, new (_a.apply(Date, [void 0, (_b.sent()).time]))()];
    }
}); }); }; };
//# sourceMappingURL=_getServerTime.js.map

/***/ }),

/***/ "./build/src/private/api/AccountsCalls/index.js":
/*!******************************************************!*\
  !*** ./build/src/private/api/AccountsCalls/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._getServerTime = exports._getPositions = exports._getOrdersByIds = exports._getOrders = exports._getExecutions = exports._myBalances = exports._getBalances = exports._getActivities = exports._getAccounts = void 0;
var _getAccounts_1 = __webpack_require__(/*! ./_getAccounts/_getAccounts */ "./build/src/private/api/AccountsCalls/_getAccounts/_getAccounts.js");
Object.defineProperty(exports, "_getAccounts", ({ enumerable: true, get: function () { return _getAccounts_1._getAccounts; } }));
var _getActivities_1 = __webpack_require__(/*! ./_getActivities/_getActivities */ "./build/src/private/api/AccountsCalls/_getActivities/_getActivities.js");
Object.defineProperty(exports, "_getActivities", ({ enumerable: true, get: function () { return _getActivities_1._getActivities; } }));
var _getBalances_1 = __webpack_require__(/*! ./_getBalances/_getBalances */ "./build/src/private/api/AccountsCalls/_getBalances/_getBalances.js");
Object.defineProperty(exports, "_getBalances", ({ enumerable: true, get: function () { return _getBalances_1._getBalances; } }));
var _myBalances_1 = __webpack_require__(/*! ./_getBalances/_myBalances */ "./build/src/private/api/AccountsCalls/_getBalances/_myBalances.js");
Object.defineProperty(exports, "_myBalances", ({ enumerable: true, get: function () { return _myBalances_1._myBalances; } }));
var _getExecutions_1 = __webpack_require__(/*! ./_getExecutions/_getExecutions */ "./build/src/private/api/AccountsCalls/_getExecutions/_getExecutions.js");
Object.defineProperty(exports, "_getExecutions", ({ enumerable: true, get: function () { return _getExecutions_1._getExecutions; } }));
var _getOrders_1 = __webpack_require__(/*! ./_getOrders/_getOrders */ "./build/src/private/api/AccountsCalls/_getOrders/_getOrders.js");
Object.defineProperty(exports, "_getOrders", ({ enumerable: true, get: function () { return _getOrders_1._getOrders; } }));
var _getOrdersByIds_1 = __webpack_require__(/*! ./_getOrders/_getOrdersByIds */ "./build/src/private/api/AccountsCalls/_getOrders/_getOrdersByIds.js");
Object.defineProperty(exports, "_getOrdersByIds", ({ enumerable: true, get: function () { return _getOrdersByIds_1._getOrdersByIds; } }));
var _getPositions_1 = __webpack_require__(/*! ./_getPositions/_getPositions */ "./build/src/private/api/AccountsCalls/_getPositions/_getPositions.js");
Object.defineProperty(exports, "_getPositions", ({ enumerable: true, get: function () { return _getPositions_1._getPositions; } }));
var _getServerTime_1 = __webpack_require__(/*! ./_getServerTime/_getServerTime */ "./build/src/private/api/AccountsCalls/_getServerTime/_getServerTime.js");
Object.defineProperty(exports, "_getServerTime", ({ enumerable: true, get: function () { return _getServerTime_1._getServerTime; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./build/src/private/api/MarketsCalls/_getCandles/_getCandles.js":
/*!***********************************************************************!*\
  !*** ./build/src/private/api/MarketsCalls/_getCandles/_getCandles.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._getCandles = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var utils_1 = __webpack_require__(/*! ../../../../utils */ "./build/src/utils/index.js");
var routes_1 = __webpack_require__(/*! ../../../routes */ "./build/src/private/routes/index.js");
// + _getCandles endpointFormatDateTool
/** _getCandles */
exports._getCandles = function (credentials, proxy) { return function (symbolID) { return function (interval) {
    if (interval === void 0) { interval = 'OneDay'; }
    return function (startDate) { return function (endDate) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var error_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, routes_1._axiosGetApi(credentials, proxy)("/markets/candles/" + symbolID + "?" + utils_1.endpointFormatDateTool(startDate, endDate) + "&interval=" + interval)()];
                case 1: return [2 /*return*/, (
                    //
                    (_a.sent()).candles.map(function (result) {
                        result.symbolID = symbolID;
                        result.granularity = interval;
                        var _a = tslib_1.__read(utils_1.getHash(JSON.stringify(result)), 2), short = _a[0], long = _a[1];
                        result.hash = { short: short, long: long };
                        return result;
                    }))];
                case 2:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [2 /*return*/, []];
                case 3: return [2 /*return*/];
            }
        });
    }); }; };
}; }; };
//# sourceMappingURL=_getCandles.js.map

/***/ }),

/***/ "./build/src/private/api/MarketsCalls/_getMarkets/_getMarkets.js":
/*!***********************************************************************!*\
  !*** ./build/src/private/api/MarketsCalls/_getMarkets/_getMarkets.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._getMarkets = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var routes_1 = __webpack_require__(/*! ../../../routes */ "./build/src/private/routes/index.js");
// + _getMarkets
/** _getMarkets */
exports._getMarkets = function (credentials, proxy) { return function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var error_1;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, routes_1._axiosGetApi(credentials, proxy)('/markets')()];
            case 1: return [2 /*return*/, (_a.sent())
                    .markets];
            case 2:
                error_1 = _a.sent();
                console.error(error_1);
                return [2 /*return*/, []];
            case 3: return [2 /*return*/];
        }
    });
}); }; };
//# sourceMappingURL=_getMarkets.js.map

/***/ }),

/***/ "./build/src/private/api/MarketsCalls/_getMarketsQuotesOptions/_getMarketsQuotesOptions.js":
/*!*************************************************************************************************!*\
  !*** ./build/src/private/api/MarketsCalls/_getMarketsQuotesOptions/_getMarketsQuotesOptions.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._getMarketsQuotesOptions = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var routes_1 = __webpack_require__(/*! ../../../routes */ "./build/src/private/routes/index.js");
exports._getMarketsQuotesOptions = function (credentials, proxy) { return function (optionIds, underlyingId, expiryDate, optionType, minstrikePrice, maxstrikePrice) {
    if (optionType === void 0) { optionType = null; }
    if (minstrikePrice === void 0) { minstrikePrice = 0; }
    if (maxstrikePrice === void 0) { maxstrikePrice = 0; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var postData;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    postData = !!optionIds && optionIds.length > 0
                        ? {
                            optionIds: optionIds,
                        }
                        : {
                            filters: [
                                {
                                    underlyingId: underlyingId,
                                    expiryDate: expiryDate,
                                    optionType: optionType || void 0,
                                    minstrikePrice: minstrikePrice || 0,
                                    maxstrikePrice: maxstrikePrice || 0,
                                },
                            ],
                        };
                    return [4 /*yield*/, routes_1._axiosPostApi(credentials, proxy)(postData)('/markets/quotes/options')()];
                case 1: return [2 /*return*/, (_a.sent()).quotes];
            }
        });
    });
}; };
//# sourceMappingURL=_getMarketsQuotesOptions.js.map

/***/ }),

/***/ "./build/src/private/api/MarketsCalls/_getMarketsQuotesOptions/_getQuotesOptionsByIds.js":
/*!***********************************************************************************************!*\
  !*** ./build/src/private/api/MarketsCalls/_getMarketsQuotesOptions/_getQuotesOptionsByIds.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._getQuotesOptionsByIds = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var _getMarketsQuotesOptions_1 = __webpack_require__(/*! ./_getMarketsQuotesOptions */ "./build/src/private/api/MarketsCalls/_getMarketsQuotesOptions/_getMarketsQuotesOptions.js");
exports._getQuotesOptionsByIds = function (credentials, proxy) { return function (optionIds) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        try {
            return [2 /*return*/, _getMarketsQuotesOptions_1._getMarketsQuotesOptions(credentials, proxy)(optionIds, 0, '', null, 0, 0)];
        }
        catch (error) {
            console.error(error);
            return [2 /*return*/, []];
        }
        return [2 /*return*/];
    });
}); }; };
//# sourceMappingURL=_getQuotesOptionsByIds.js.map

/***/ }),

/***/ "./build/src/private/api/MarketsCalls/_getMarketsQuotesOptions/_getQuotesOptionsFilter.js":
/*!************************************************************************************************!*\
  !*** ./build/src/private/api/MarketsCalls/_getMarketsQuotesOptions/_getQuotesOptionsFilter.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._getQuotesOptionsFilter = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var _getMarketsQuotesOptions_1 = __webpack_require__(/*! ./_getMarketsQuotesOptions */ "./build/src/private/api/MarketsCalls/_getMarketsQuotesOptions/_getMarketsQuotesOptions.js");
exports._getQuotesOptionsFilter = function (credentials, proxy) { return function (filters) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var underlyingId, expiryDate, optionType, minstrikePrice, maxstrikePrice;
    return tslib_1.__generator(this, function (_a) {
        underlyingId = filters.underlyingId, expiryDate = filters.expiryDate, optionType = filters.optionType, minstrikePrice = filters.minstrikePrice, maxstrikePrice = filters.maxstrikePrice;
        return [2 /*return*/, _getMarketsQuotesOptions_1._getMarketsQuotesOptions(credentials, proxy)(null, underlyingId, expiryDate, optionType, minstrikePrice, maxstrikePrice)];
    });
}); }; };
//# sourceMappingURL=_getQuotesOptionsFilter.js.map

/***/ }),

/***/ "./build/src/private/api/MarketsCalls/_getMarketsQuotesOptions/index.js":
/*!******************************************************************************!*\
  !*** ./build/src/private/api/MarketsCalls/_getMarketsQuotesOptions/index.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._getQuotesOptionsFilter = exports._getQuotesOptionsByIds = exports._getMarketsQuotesOptions = void 0;
var _getMarketsQuotesOptions_1 = __webpack_require__(/*! ./_getMarketsQuotesOptions */ "./build/src/private/api/MarketsCalls/_getMarketsQuotesOptions/_getMarketsQuotesOptions.js");
Object.defineProperty(exports, "_getMarketsQuotesOptions", ({ enumerable: true, get: function () { return _getMarketsQuotesOptions_1._getMarketsQuotesOptions; } }));
// export {
// _getQuotesOptionsbyFilterAndIds,
// } from './_getQuotesOptionsbyFilterAndIds';
var _getQuotesOptionsByIds_1 = __webpack_require__(/*! ./_getQuotesOptionsByIds */ "./build/src/private/api/MarketsCalls/_getMarketsQuotesOptions/_getQuotesOptionsByIds.js");
Object.defineProperty(exports, "_getQuotesOptionsByIds", ({ enumerable: true, get: function () { return _getQuotesOptionsByIds_1._getQuotesOptionsByIds; } }));
var _getQuotesOptionsFilter_1 = __webpack_require__(/*! ./_getQuotesOptionsFilter */ "./build/src/private/api/MarketsCalls/_getMarketsQuotesOptions/_getQuotesOptionsFilter.js");
Object.defineProperty(exports, "_getQuotesOptionsFilter", ({ enumerable: true, get: function () { return _getQuotesOptionsFilter_1._getQuotesOptionsFilter; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./build/src/private/api/MarketsCalls/_getMarketsQuotesStrategies/_getMarketsQuotesStrategies.js":
/*!*******************************************************************************************************!*\
  !*** ./build/src/private/api/MarketsCalls/_getMarketsQuotesStrategies/_getMarketsQuotesStrategies.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._getMarketsQuotesStrategies = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var routes_1 = __webpack_require__(/*! ../../../routes */ "./build/src/private/routes/index.js");
exports._getMarketsQuotesStrategies = function (credentials, proxy) { return function (strategyVariantRequestData) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/, routes_1._axiosPostApi(credentials, proxy)(strategyVariantRequestData)('/markets/quotes/strategies')()];
    });
}); }; };
// https://api01.iq.questrade.com/v1/markets/quotes/strategies
// https://api01.iq.questrade.com/v1/markets/quotes/strategies
//# sourceMappingURL=_getMarketsQuotesStrategies.js.map

/***/ }),

/***/ "./build/src/private/api/MarketsCalls/_getMarketsQuotesStrategies/index.js":
/*!*********************************************************************************!*\
  !*** ./build/src/private/api/MarketsCalls/_getMarketsQuotesStrategies/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._getMarketsQuotesStrategies = void 0;
var _getMarketsQuotesStrategies_1 = __webpack_require__(/*! ./_getMarketsQuotesStrategies */ "./build/src/private/api/MarketsCalls/_getMarketsQuotesStrategies/_getMarketsQuotesStrategies.js");
Object.defineProperty(exports, "_getMarketsQuotesStrategies", ({ enumerable: true, get: function () { return _getMarketsQuotesStrategies_1._getMarketsQuotesStrategies; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./build/src/private/api/MarketsCalls/_getOptionsById/_getOptionsById.js":
/*!*******************************************************************************!*\
  !*** ./build/src/private/api/MarketsCalls/_getOptionsById/_getOptionsById.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._getOptionsById = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var routes_1 = __webpack_require__(/*! ../../../routes */ "./build/src/private/routes/index.js");
// + _getOptionsById
/*
  |-···――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――···-|
*/
/** _getOptionsSymbols */
exports._getOptionsById = function (credentials, proxy) { return function (symbolID) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var error_1;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, routes_1._axiosGetApi(credentials, proxy)("/symbols/" + symbolID + "/options")()];
            case 1: return [2 /*return*/, (_a.sent()).optionChain];
            case 2:
                error_1 = _a.sent();
                console.error(error_1);
                return [2 /*return*/, []];
            case 3: return [2 /*return*/];
        }
    });
}); }; };
/*
  |-···――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――···-|
*/
//# sourceMappingURL=_getOptionsById.js.map

/***/ }),

/***/ "./build/src/private/api/MarketsCalls/_getQuotesByIds/_getQuotesByIds.js":
/*!*******************************************************************************!*\
  !*** ./build/src/private/api/MarketsCalls/_getQuotesByIds/_getQuotesByIds.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._getQuotesByIds = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var routes_1 = __webpack_require__(/*! ../../../routes */ "./build/src/private/routes/index.js");
// + _getQuotesByID
/** _getQuotesFromSymbolID */
exports._getQuotesByIds = function (credentials, proxy) { return function (ids) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var error_1;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, routes_1._axiosGetApi(credentials, proxy)("/markets/quotes?ids=" + ids.join(','))()];
            case 1: return [2 /*return*/, (_a.sent()).quotes];
            case 2:
                error_1 = _a.sent();
                console.error(error_1);
                return [2 /*return*/, []];
            case 3: return [2 /*return*/];
        }
    });
}); }; };
//# sourceMappingURL=_getQuotesByIds.js.map

/***/ }),

/***/ "./build/src/private/api/MarketsCalls/_getSymbolSearch/_getSymbolSearch.js":
/*!*********************************************************************************!*\
  !*** ./build/src/private/api/MarketsCalls/_getSymbolSearch/_getSymbolSearch.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._getSymbolSearch = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var _getSymbolSearchAll_1 = __webpack_require__(/*! ./_getSymbolSearchAll */ "./build/src/private/api/MarketsCalls/_getSymbolSearch/_getSymbolSearchAll.js");
// + _getSymbolSearch
/** _getSymbolSearch */
exports._getSymbolSearch = function (credentials, proxy) { return function (prefix, offset) {
    if (offset === void 0) { offset = 0; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var symbols, count, result, error_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, _getSymbolSearchAll_1._getSymbolSearchAll(credentials, proxy)(prefix, offset)];
                case 1:
                    symbols = _a.sent();
                    count = symbols.length;
                    result = null;
                    if (!!symbols[0]) {
                        result = symbols[0];
                        result.count = count || 0;
                        result.all = symbols;
                        return [2 /*return*/, [result]];
                    }
                    return [2 /*return*/, []];
                case 2:
                    error_1 = _a.sent();
                    //
                    console.log(error_1);
                    return [2 /*return*/, []];
                case 3: return [2 /*return*/];
            }
        });
    });
}; };
//# sourceMappingURL=_getSymbolSearch.js.map

/***/ }),

/***/ "./build/src/private/api/MarketsCalls/_getSymbolSearch/_getSymbolSearchAll.js":
/*!************************************************************************************!*\
  !*** ./build/src/private/api/MarketsCalls/_getSymbolSearch/_getSymbolSearchAll.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._getSymbolSearchAll = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var utils_1 = __webpack_require__(/*! ../../../../utils */ "./build/src/utils/index.js");
var routes_1 = __webpack_require__(/*! ../../../routes */ "./build/src/private/routes/index.js");
// + _getSymbolSearchAll
/** _getSymbolSearch */
exports._getSymbolSearchAll = function (credentials, proxy) { return function (prefix, offset) {
    if (offset === void 0) { offset = 0; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var results_1, error_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, routes_1._axiosGetApi(credentials, proxy)("/symbols/search?prefix=" + prefix.toUpperCase() + "&offset=" + offset)()];
                case 1:
                    results_1 = _a.sent();
                    if (results_1 && results_1.symbols) {
                        return [2 /*return*/, results_1.symbols.map(function (result) {
                                result.count = results_1.symbols.length || 0;
                                return result;
                            })];
                    }
                    return [2 /*return*/, results_1.symbols];
                case 2:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [2 /*return*/, []];
                case 3: return [2 /*return*/];
            }
        });
    });
}; };
utils_1.void0(utils_1.void0);
//# sourceMappingURL=_getSymbolSearchAll.js.map

/***/ }),

/***/ "./build/src/private/api/MarketsCalls/_getSymbolSearch/_getSymbolSearchCount.js":
/*!**************************************************************************************!*\
  !*** ./build/src/private/api/MarketsCalls/_getSymbolSearch/_getSymbolSearchCount.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._getSymbolSearchCount = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var routes_1 = __webpack_require__(/*! ../../../routes */ "./build/src/private/routes/index.js");
// + _getSymbolSearchCount
/** _getSymbolSearch */
exports._getSymbolSearchCount = function (credentials, proxy) { return function (prefix) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var endpoint, getSymbols, symbols, error_1;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                endpoint = "/symbols/search?prefix=" + prefix;
                getSymbols = routes_1._axiosGetApi(credentials, proxy)(endpoint);
                return [4 /*yield*/, getSymbols()];
            case 1:
                symbols = _a.sent();
                return [2 /*return*/, symbols.symbols.length];
            case 2:
                error_1 = _a.sent();
                console.error(error_1);
                return [2 /*return*/, Number.NaN];
            case 3: return [2 /*return*/];
        }
    });
}); }; };
//# sourceMappingURL=_getSymbolSearchCount.js.map

/***/ }),

/***/ "./build/src/private/api/MarketsCalls/_getSymbolSearch/index.js":
/*!**********************************************************************!*\
  !*** ./build/src/private/api/MarketsCalls/_getSymbolSearch/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._getSymbolSearchCount = exports._getSymbolSearchAll = exports._getSymbolSearch = void 0;
var _getSymbolSearch_1 = __webpack_require__(/*! ./_getSymbolSearch */ "./build/src/private/api/MarketsCalls/_getSymbolSearch/_getSymbolSearch.js");
Object.defineProperty(exports, "_getSymbolSearch", ({ enumerable: true, get: function () { return _getSymbolSearch_1._getSymbolSearch; } }));
var _getSymbolSearchAll_1 = __webpack_require__(/*! ./_getSymbolSearchAll */ "./build/src/private/api/MarketsCalls/_getSymbolSearch/_getSymbolSearchAll.js");
Object.defineProperty(exports, "_getSymbolSearchAll", ({ enumerable: true, get: function () { return _getSymbolSearchAll_1._getSymbolSearchAll; } }));
// export { _getSymbolSearchAndCount } from './_getSymbolSearchAndCount';
var _getSymbolSearchCount_1 = __webpack_require__(/*! ./_getSymbolSearchCount */ "./build/src/private/api/MarketsCalls/_getSymbolSearch/_getSymbolSearchCount.js");
Object.defineProperty(exports, "_getSymbolSearchCount", ({ enumerable: true, get: function () { return _getSymbolSearchCount_1._getSymbolSearchCount; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./build/src/private/api/MarketsCalls/_getSymbolsByIds/_getSymbolsByIds.js":
/*!*********************************************************************************!*\
  !*** ./build/src/private/api/MarketsCalls/_getSymbolsByIds/_getSymbolsByIds.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._getSymbolsByIds = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var routes_1 = __webpack_require__(/*! ../../../routes */ "./build/src/private/routes/index.js");
// + _getSymbolsByIDs
/** _getSymbolFromSymbolID */
exports._getSymbolsByIds = function (credentials, proxy) { return function (stockId) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var error_1;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, routes_1._axiosGetApi(credentials, proxy)("/symbols?ids=" + stockId.join())()];
            case 1: return [2 /*return*/, (_a.sent()).symbols];
            case 2:
                error_1 = _a.sent();
                console.error(error_1);
                return [2 /*return*/, []];
            case 3: return [2 /*return*/];
        }
    });
}); }; };
//# sourceMappingURL=_getSymbolsByIds.js.map

/***/ }),

/***/ "./build/src/private/api/MarketsCalls/index.js":
/*!*****************************************************!*\
  !*** ./build/src/private/api/MarketsCalls/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._getSymbolSearchCount = exports._getSymbolSearchAll = exports._getSymbolSearch = exports._getSymbolsByIds = exports._getQuotesByIds = exports._getOptionsById = exports._getMarketsQuotesStrategies = exports._getQuotesOptionsFilter = exports._getQuotesOptionsByIds = exports._getMarkets = exports._getCandles = void 0;
var _getCandles_1 = __webpack_require__(/*! ./_getCandles/_getCandles */ "./build/src/private/api/MarketsCalls/_getCandles/_getCandles.js");
Object.defineProperty(exports, "_getCandles", ({ enumerable: true, get: function () { return _getCandles_1._getCandles; } }));
var _getMarkets_1 = __webpack_require__(/*! ./_getMarkets/_getMarkets */ "./build/src/private/api/MarketsCalls/_getMarkets/_getMarkets.js");
Object.defineProperty(exports, "_getMarkets", ({ enumerable: true, get: function () { return _getMarkets_1._getMarkets; } }));
var _getMarketsQuotesOptions_1 = __webpack_require__(/*! ./_getMarketsQuotesOptions */ "./build/src/private/api/MarketsCalls/_getMarketsQuotesOptions/index.js");
// _getQuotesOptionsbyFilterAndIds,
Object.defineProperty(exports, "_getQuotesOptionsByIds", ({ enumerable: true, get: function () { return _getMarketsQuotesOptions_1._getQuotesOptionsByIds; } }));
Object.defineProperty(exports, "_getQuotesOptionsFilter", ({ enumerable: true, get: function () { return _getMarketsQuotesOptions_1._getQuotesOptionsFilter; } }));
var _getMarketsQuotesStrategies_1 = __webpack_require__(/*! ./_getMarketsQuotesStrategies */ "./build/src/private/api/MarketsCalls/_getMarketsQuotesStrategies/index.js");
Object.defineProperty(exports, "_getMarketsQuotesStrategies", ({ enumerable: true, get: function () { return _getMarketsQuotesStrategies_1._getMarketsQuotesStrategies; } }));
var _getOptionsById_1 = __webpack_require__(/*! ./_getOptionsById/_getOptionsById */ "./build/src/private/api/MarketsCalls/_getOptionsById/_getOptionsById.js");
Object.defineProperty(exports, "_getOptionsById", ({ enumerable: true, get: function () { return _getOptionsById_1._getOptionsById; } }));
var _getQuotesByIds_1 = __webpack_require__(/*! ./_getQuotesByIds/_getQuotesByIds */ "./build/src/private/api/MarketsCalls/_getQuotesByIds/_getQuotesByIds.js");
Object.defineProperty(exports, "_getQuotesByIds", ({ enumerable: true, get: function () { return _getQuotesByIds_1._getQuotesByIds; } }));
var _getSymbolsByIds_1 = __webpack_require__(/*! ./_getSymbolsByIds/_getSymbolsByIds */ "./build/src/private/api/MarketsCalls/_getSymbolsByIds/_getSymbolsByIds.js");
Object.defineProperty(exports, "_getSymbolsByIds", ({ enumerable: true, get: function () { return _getSymbolsByIds_1._getSymbolsByIds; } }));
var _getSymbolSearch_1 = __webpack_require__(/*! ./_getSymbolSearch */ "./build/src/private/api/MarketsCalls/_getSymbolSearch/index.js");
Object.defineProperty(exports, "_getSymbolSearch", ({ enumerable: true, get: function () { return _getSymbolSearch_1._getSymbolSearch; } }));
Object.defineProperty(exports, "_getSymbolSearchAll", ({ enumerable: true, get: function () { return _getSymbolSearch_1._getSymbolSearchAll; } }));
// _getSymbolSearchAndCount,
Object.defineProperty(exports, "_getSymbolSearchCount", ({ enumerable: true, get: function () { return _getSymbolSearch_1._getSymbolSearchCount; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./build/src/private/api/_getQuestradeApi.js":
/*!***************************************************!*\
  !*** ./build/src/private/api/_getQuestradeApi.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._getQuestradeApi = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var utils_1 = __webpack_require__(/*! ../../utils */ "./build/src/utils/index.js");
var AccountsCalls_1 = __webpack_require__(/*! ./AccountsCalls */ "./build/src/private/api/AccountsCalls/index.js");
var MarketsCalls_1 = __webpack_require__(/*! ./MarketsCalls */ "./build/src/private/api/MarketsCalls/index.js");
exports._getQuestradeApi = function (credentials, proxy) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, accounts, activities, balances, candles, executions, markets, marketsQuotesStrategies, optionsById, orders, ordersByIds, positions, quotesByIds, 
    // quotesOptionsbyFilterAndIds,
    quotesOptionsByIds, quotesOptionsFilter, serverTime, symbolsByIds, symbolSearchAll, 
    // symbolSearchAndCount,
    symbolSearch, symbolSearchCount;
    return tslib_1.__generator(this, function (_b) {
        _a = tslib_1.__read([
            AccountsCalls_1._getAccounts(credentials, proxy),
            AccountsCalls_1._getActivities(credentials, proxy),
            AccountsCalls_1._getBalances(credentials, proxy),
            MarketsCalls_1._getCandles(credentials, proxy),
            AccountsCalls_1._getExecutions(credentials, proxy),
            MarketsCalls_1._getMarkets(credentials, proxy),
            MarketsCalls_1._getMarketsQuotesStrategies(credentials, proxy),
            MarketsCalls_1._getOptionsById(credentials, proxy),
            AccountsCalls_1._getOrders(credentials, proxy),
            AccountsCalls_1._getOrdersByIds(credentials, proxy),
            AccountsCalls_1._getPositions(credentials, proxy),
            MarketsCalls_1._getQuotesByIds(credentials, proxy),
            // _getQuotesOptionsbyFilterAndIds(credentials,proxy),
            MarketsCalls_1._getQuotesOptionsByIds(credentials, proxy),
            MarketsCalls_1._getQuotesOptionsFilter(credentials, proxy),
            AccountsCalls_1._getServerTime(credentials, proxy),
            MarketsCalls_1._getSymbolsByIds(credentials, proxy),
            MarketsCalls_1._getSymbolSearchAll(credentials, proxy),
            // _getSymbolSearchAndCount(credentials,proxy),
            MarketsCalls_1._getSymbolSearch(credentials, proxy),
            MarketsCalls_1._getSymbolSearchCount(credentials, proxy),
        ], 19), accounts = _a[0], activities = _a[1], balances = _a[2], candles = _a[3], executions = _a[4], markets = _a[5], marketsQuotesStrategies = _a[6], optionsById = _a[7], orders = _a[8], ordersByIds = _a[9], positions = _a[10], quotesByIds = _a[11], quotesOptionsByIds = _a[12], quotesOptionsFilter = _a[13], serverTime = _a[14], symbolsByIds = _a[15], symbolSearchAll = _a[16], symbolSearch = _a[17], symbolSearchCount = _a[18];
        // unused for the moment
        return [2 /*return*/, {
                myBalances: function () {
                    return tslib_1.__awaiter(this, void 0, void 0, function () {
                        var _a;
                        return tslib_1.__generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _a = AccountsCalls_1._myBalances;
                                    return [4 /*yield*/, balances()];
                                case 1: return [2 /*return*/, _a.apply(void 0, [_b.sent()])];
                            }
                        });
                    });
                },
                currentAccount: credentials.accountNumber,
                serverTime: credentials.serverTime || 'ERROR',
                account: {
                    getActivities: function (startTime) {
                        return activities(startTime);
                    },
                    getOrders: function (stateFilter) {
                        return orders(stateFilter);
                    },
                    getOrdersByIds: function (orderId) {
                        return tslib_1.__awaiter(this, void 0, void 0, function () {
                            return tslib_1.__generator(this, function (_a) {
                                return [2 /*return*/, ordersByIds(orderId)];
                            });
                        });
                    },
                    getExecutions: function (startTime) {
                        return executions(startTime);
                    },
                    getBalances: function () {
                        return tslib_1.__awaiter(this, void 0, void 0, function () {
                            return tslib_1.__generator(this, function (_a) {
                                return [2 /*return*/, balances()];
                            });
                        });
                    },
                    getPositions: function () {
                        return tslib_1.__awaiter(this, void 0, void 0, function () {
                            return tslib_1.__generator(this, function (_a) {
                                return [2 /*return*/, positions()];
                            });
                        });
                    },
                    getAllAccounts: function () {
                        return tslib_1.__awaiter(this, void 0, void 0, function () {
                            return tslib_1.__generator(this, function (_a) {
                                return [2 /*return*/, accounts()];
                            });
                        });
                    },
                    getServerTime: function () {
                        return tslib_1.__awaiter(this, void 0, void 0, function () {
                            return tslib_1.__generator(this, function (_a) {
                                return [2 /*return*/, serverTime()];
                            });
                        });
                    },
                },
                market: {
                    getAllMarkets: function () {
                        return tslib_1.__awaiter(this, void 0, void 0, function () {
                            return tslib_1.__generator(this, function (_a) {
                                return [2 /*return*/, markets()];
                            });
                        });
                    },
                    getCandlesByStockId: function (symbolID) {
                        return candles(symbolID);
                    },
                },
                getOptionsQuotes: {
                    fromFilter: function (filters) {
                        return tslib_1.__awaiter(this, void 0, void 0, function () {
                            return tslib_1.__generator(this, function (_a) {
                                return [2 /*return*/, quotesOptionsFilter(filters)];
                            });
                        });
                    },
                    byOptionsIds: function (optionIds) {
                        return tslib_1.__awaiter(this, void 0, void 0, function () {
                            return tslib_1.__generator(this, function (_a) {
                                return [2 /*return*/, quotesOptionsByIds(optionIds)];
                            });
                        });
                    },
                },
                getQuotes: {
                    byStrategies: function (strategyVariantRequestData) {
                        return tslib_1.__awaiter(this, void 0, void 0, function () {
                            return tslib_1.__generator(this, function (_a) {
                                return [2 /*return*/, marketsQuotesStrategies(strategyVariantRequestData)];
                            });
                        });
                    },
                    byStockIds: function (ids) {
                        return tslib_1.__awaiter(this, void 0, void 0, function () {
                            return tslib_1.__generator(this, function (_a) {
                                return [2 /*return*/, quotesByIds(ids)];
                            });
                        });
                    },
                },
                getOptionChains: {
                    byStockId: function (stockId) {
                        return tslib_1.__awaiter(this, void 0, void 0, function () {
                            return tslib_1.__generator(this, function (_a) {
                                return [2 /*return*/, optionsById(stockId)];
                            });
                        });
                    },
                },
                getSymbols: {
                    byStockIds: function (stockIds) {
                        return tslib_1.__awaiter(this, void 0, void 0, function () {
                            return tslib_1.__generator(this, function (_a) {
                                return [2 /*return*/, symbolsByIds(stockIds)];
                            });
                        });
                    },
                },
                search: {
                    stock: function (prefix, offset) {
                        return tslib_1.__awaiter(this, void 0, void 0, function () {
                            return tslib_1.__generator(this, function (_a) {
                                return [2 /*return*/, symbolSearch(prefix, offset)];
                            });
                        });
                    },
                    allStocks: function (prefix, offset) {
                        return tslib_1.__awaiter(this, void 0, void 0, function () {
                            return tslib_1.__generator(this, function (_a) {
                                return [2 /*return*/, symbolSearchAll(prefix, offset)];
                            });
                        });
                    },
                    countResults: function (prefix) {
                        return tslib_1.__awaiter(this, void 0, void 0, function () {
                            return tslib_1.__generator(this, function (_a) {
                                return [2 /*return*/, symbolSearchCount(prefix)];
                            });
                        });
                    },
                },
            }];
    });
}); };
utils_1.void0(utils_1.void0);
//# sourceMappingURL=_getQuestradeApi.js.map

/***/ }),

/***/ "./build/src/private/api/index.js":
/*!****************************************!*\
  !*** ./build/src/private/api/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._getQuestradeApi = void 0;
var _getQuestradeApi_1 = __webpack_require__(/*! ./_getQuestradeApi */ "./build/src/private/api/_getQuestradeApi.js");
Object.defineProperty(exports, "_getQuestradeApi", ({ enumerable: true, get: function () { return _getQuestradeApi_1._getQuestradeApi; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./build/src/private/auth/axiosCredentials_oAUTH/X_axiosCredentials_oAUTH_X.js":
/*!*************************************************************************************!*\
  !*** ./build/src/private/auth/axiosCredentials_oAUTH/X_axiosCredentials_oAUTH_X.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._oAuthAxiosCredentials = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var axios_1 = tslib_1.__importDefault(__webpack_require__(/*! axios */ "./node_modules/axios/index.js"));
var _validateToken_1 = __webpack_require__(/*! ./_validateToken */ "./build/src/private/auth/axiosCredentials_oAUTH/_validateToken.js");
var _writeToken_1 = __webpack_require__(/*! ./_writeToken */ "./build/src/private/auth/axiosCredentials_oAUTH/_writeToken.js");
exports._oAuthAxiosCredentials = function (options, proxy) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, refreshToken, credentials, _config, axiosClient, response;
    return tslib_1.__generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = _validateToken_1._validateToken(options), refreshToken = _a.refreshToken, credentials = _a.credentials;
                _config = {
                    url: credentials.authUrl + "/oauth2/token",
                    method: 'GET',
                    params: {
                        grant_type: 'refresh_token',
                        refresh_token: refreshToken,
                    },
                };
                void proxy; // TODO: Implement usage of proxy
                axiosClient = axios_1.default;
                if (proxy) {
                    axiosClient = proxy;
                }
                return [4 /*yield*/, axiosClient(_config)];
            case 1:
                response = (_b.sent());
                if (!response.data) {
                    if (response) {
                        console.log('________________________________________________');
                        console.log(response.status, response.statusText);
                        console.log(response.headers);
                        console.log(response.request);
                        console.log(response.status, response.statusText);
                        console.log('________________________________________________');
                        console.log('++++++++++++++++++++++++++++++++++++++++++++++++');
                    }
                    throw new Error('!! validate credntials Invalid data back from axios client');
                }
                return [2 /*return*/, _writeToken_1._writeToken(credentials, response)];
        }
    });
}); };
//# sourceMappingURL=X_axiosCredentials_oAUTH_X.js.map

/***/ }),

/***/ "./build/src/private/auth/axiosCredentials_oAUTH/_validateToken.js":
/*!*************************************************************************!*\
  !*** ./build/src/private/auth/axiosCredentials_oAUTH/_validateToken.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._validateToken = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var fs_1 = __webpack_require__(/*! fs */ "?65c5");
var path_1 = tslib_1.__importDefault(__webpack_require__(/*! path */ "?0f27"));
var utils_1 = __webpack_require__(/*! ../../../utils */ "./build/src/utils/index.js");
var credentialsFactory_1 = __webpack_require__(/*! ../credentialsFactory */ "./build/src/private/auth/credentialsFactory/index.js");
var dirname = path_1.default.dirname;
exports._validateToken = function (options) {
    var credentials = credentialsFactory_1._buildCredentialsFromToken(options);
    var refreshToken = credentials.seedToken;
    try {
        if (!!credentials.keyFile) {
            utils_1.sync(dirname(credentials.keyFile));
        }
        else {
            utils_1.sync(credentials.keyDir);
        }
        credentials.keyFile =
            credentials.keyFile || credentials.keyDir + "/" + credentials.seedToken;
        refreshToken = fs_1.readFileSync(credentials.keyFile, 'utf8');
    }
    catch (_a) {
        credentials.keyFile =
            credentials.keyFile || credentials.keyDir + "/" + credentials.seedToken;
        fs_1.access(credentials.keyFile, fs_1.constants.F_OK, function (none) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                if (none) {
                    fs_1.writeFileSync(credentials.keyFile, credentials.seedToken, {
                        encoding: 'utf8',
                    });
                }
                return [2 /*return*/];
            });
        }); });
    }
    return { refreshToken: refreshToken, credentials: credentials };
};
//# sourceMappingURL=_validateToken.js.map

/***/ }),

/***/ "./build/src/private/auth/axiosCredentials_oAUTH/_writeToken.js":
/*!**********************************************************************!*\
  !*** ./build/src/private/auth/axiosCredentials_oAUTH/_writeToken.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._writeToken = void 0;
var fs_1 = __webpack_require__(/*! fs */ "?65c5");
exports._writeToken = function (credentials, response) {
    var refreshCreds = response.data;
    credentials.accessToken = refreshCreds.access_token;
    credentials.apiServer = refreshCreds.api_server;
    credentials.expiresIn = refreshCreds.expires_in;
    credentials.refreshToken = refreshCreds.refresh_token;
    credentials.tokenType = refreshCreds.token_type;
    credentials.apiUrl = "" + credentials.apiServer + credentials.apiVersion;
    fs_1.writeFileSync(credentials.keyFile, credentials.refreshToken, 'utf8');
    return credentials;
};
//# sourceMappingURL=_writeToken.js.map

/***/ }),

/***/ "./build/src/private/auth/axiosCredentials_oAUTH/index.js":
/*!****************************************************************!*\
  !*** ./build/src/private/auth/axiosCredentials_oAUTH/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._oAuthAxiosCredentials = void 0;
var X_axiosCredentials_oAUTH_X_1 = __webpack_require__(/*! ./X_axiosCredentials_oAUTH_X */ "./build/src/private/auth/axiosCredentials_oAUTH/X_axiosCredentials_oAUTH_X.js");
Object.defineProperty(exports, "_oAuthAxiosCredentials", ({ enumerable: true, get: function () { return X_axiosCredentials_oAUTH_X_1._oAuthAxiosCredentials; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./build/src/private/auth/credentialsFactory/_buildCredentialsFromToken.js":
/*!*********************************************************************************!*\
  !*** ./build/src/private/auth/credentialsFactory/_buildCredentialsFromToken.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._buildCredentialsFromToken = void 0;
var _emptyCredentials_1 = __webpack_require__(/*! ./_emptyCredentials */ "./build/src/private/auth/credentialsFactory/_emptyCredentials.js");
exports._buildCredentialsFromToken = function (token) {
    var credentials = _emptyCredentials_1._emptyCredentials();
    if (typeof token === 'undefined' || !token) {
        throw new Error('questrade_missing_api_key or options');
    }
    if (typeof token === 'string' && token.indexOf('/') !== -1) {
        credentials.keyFile = token;
    }
    if (typeof token === 'string' && token.indexOf('/') === -1) {
        credentials.seedToken = token;
    }
    if (typeof token === 'object') {
        credentials.practice = !!token.practiceAccount;
        credentials.keyDir = token.keyDir || './keys';
        credentials.apiVersion = token.apiVersion || 'v1';
        credentials.keyFile = token.keyFile || '';
        credentials.seedToken = token.seedToken || '';
        credentials.accountNumber = "" + token.account || '';
    }
    credentials.authUrl = credentials.practice
        ? 'https://practicelogin.q.com'
        : 'https://login.questrade.com';
    return credentials;
};
//# sourceMappingURL=_buildCredentialsFromToken.js.map

/***/ }),

/***/ "./build/src/private/auth/credentialsFactory/_credentialsFactory.js":
/*!**************************************************************************!*\
  !*** ./build/src/private/auth/credentialsFactory/_credentialsFactory.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._credentialsFactory = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var AccountsCalls_1 = __webpack_require__(/*! ../../api/AccountsCalls */ "./build/src/private/api/AccountsCalls/index.js");
var axiosCredentials_oAUTH_1 = __webpack_require__(/*! ../axiosCredentials_oAUTH */ "./build/src/private/auth/axiosCredentials_oAUTH/index.js");
var _getPrimaryAccountNumber_1 = __webpack_require__(/*! ./_getPrimaryAccountNumber */ "./build/src/private/auth/credentialsFactory/_getPrimaryAccountNumber.js");
/** Provide: a token string THEN GET: a 'Promise<Credentials>' */
exports._credentialsFactory = function (options, proxy) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var credentials, accounts, time, timZoneOffset, timZone, serverTime, expireAt, error_1;
    var _a, _b;
    return tslib_1.__generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, axiosCredentials_oAUTH_1._oAuthAxiosCredentials(options, proxy)];
            case 1:
                credentials = _c.sent();
                _c.label = 2;
            case 2:
                _c.trys.push([2, 5, , 6]);
                return [4 /*yield*/, AccountsCalls_1._getAccounts(credentials, proxy)()];
            case 3:
                accounts = _c.sent();
                return [4 /*yield*/, AccountsCalls_1._getServerTime(credentials, proxy)()];
            case 4:
                time = _c.sent();
                timZoneOffset = new Date(time).getTimezoneOffset();
                timZone = -1 * 60 * 1000 * timZoneOffset;
                serverTime = new Date(time).getTime();
                expireAt = serverTime + credentials.expiresIn * 1000;
                credentials.expiresAt = new Date(expireAt).toLocaleTimeString();
                credentials.tokenExpiration = new Date(timZone + expireAt);
                credentials.expiresAtRaw = expireAt;
                credentials.serverTime = new Date(timZone + serverTime);
                credentials.serverTimeRaw = serverTime;
                credentials.accountNumber = _getPrimaryAccountNumber_1._getPrimaryAccountNumber(accounts);
                credentials.expiresAt_ = new Date((_a = credentials.expiresAtRaw) !== null && _a !== void 0 ? _a : 0).toLocaleTimeString();
                credentials.serverTime_ = new Date((_b = credentials.serverTimeRaw) !== null && _b !== void 0 ? _b : 0).toLocaleTimeString();
                if (credentials.accountNumber === '00000000') {
                    console.info('\n🧐\n🤡 MOCK Server Time:   ', new Date().toISOString(), '\n🍦 Status: MOCKING!!!\n🤨');
                }
                else {
                    console.info('Questrade Server Time:', time, '\nStatus: ready\n');
                }
                return [3 /*break*/, 6];
            case 5:
                error_1 = _c.sent();
                console.error(error_1.message);
                console.info(credentials.toValue());
                throw new Error('_oAuth Error getting credentials');
            case 6: return [2 /*return*/, credentials];
        }
    });
}); };
//# sourceMappingURL=_credentialsFactory.js.map

/***/ }),

/***/ "./build/src/private/auth/credentialsFactory/_defaultCredentials.js":
/*!**************************************************************************!*\
  !*** ./build/src/private/auth/credentialsFactory/_defaultCredentials.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JSONjs = exports._defaultCredentials = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
exports._defaultCredentials = {
    accessToken: '',
    accountNumber: '',
    apiServer: '',
    apiUrl: '',
    apiVersion: 'v1',
    authUrl: '',
    expiresAt: undefined,
    tokenExpiration: undefined,
    expiresIn: 0,
    keyDir: './keys',
    keyFile: '',
    practice: false,
    refreshToken: '',
    seedToken: '',
    serverTime: undefined,
    tokenType: '',
    // config_:null = _config;
    // response_:null = response;
    // configurl_:null = `${_config.url}`.split('questrade.com/')[1];
    // urlTimeUTC:null = new Date(credentials.response_.headers.date);
    toValue: function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        return JSON.parse(JSON.stringify(tslib_1.__assign(tslib_1.__assign({}, this), { config_: tslib_1.__assign(tslib_1.__assign({}, this.config_), { headers: tslib_1.__assign(tslib_1.__assign({}, (_a = this.config_) === null || _a === void 0 ? void 0 : _a.headers), { Authorization: ((_d = (_c = (_b = this.config_) === null || _b === void 0 ? void 0 : _b.headers) === null || _c === void 0 ? void 0 : _c.Authorization) !== null && _d !== void 0 ? _d : '').slice(0, 15) + " [Redacted] ..." }) }), response_: tslib_1.__assign(tslib_1.__assign({}, this.response_), { headers: tslib_1.__assign(tslib_1.__assign({}, (_e = this.response_) === null || _e === void 0 ? void 0 : _e.headers), { Authorization: ((_h = (_g = (_f = this.config_) === null || _f === void 0 ? void 0 : _f.headers) === null || _g === void 0 ? void 0 : _g.Authorization) !== null && _h !== void 0 ? _h : '').slice(0, 15) + " [Redacted] ..." }), config: tslib_1.__assign(tslib_1.__assign({}, (_j = this.response_) === null || _j === void 0 ? void 0 : _j.config), { 
                    // ...this.response_?.config?.headers,
                    Authorization: ((_m = (_l = (_k = this.config_) === null || _k === void 0 ? void 0 : _k.headers) === null || _l === void 0 ? void 0 : _l.Authorization) !== null && _m !== void 0 ? _m : '').slice(0, 15) + " [Redacted] ..." }), request: tslib_1.__assign(tslib_1.__assign({}, (_o = this.response_) === null || _o === void 0 ? void 0 : _o.request), { res: '[IncomingMessage]', _redirectable: '[Writable]', agent: '[Agent]', socket: '[TLSSocket]', _header: '[HTTP Header Fields]' }) }), accessToken: '[string:Private]', keyFile: './keys/[Private]', refreshToken: '[string:Private]', seedToken: '[string:Private]' })));
    },
    toString: function (indent) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        if (indent === void 0) { indent = 4; }
        // ?.Authorization
        return JSON.stringify(tslib_1.__assign(tslib_1.__assign({}, tslib_1.__assign(tslib_1.__assign({}, this), { config_: tslib_1.__assign(tslib_1.__assign({}, this.config_), { headers: tslib_1.__assign(tslib_1.__assign({}, (_a = this.config_) === null || _a === void 0 ? void 0 : _a.headers), { Authorization: ((_d = (_c = (_b = this.config_) === null || _b === void 0 ? void 0 : _b.headers) === null || _c === void 0 ? void 0 : _c.Authorization) !== null && _d !== void 0 ? _d : '').slice(0, 15) + " [Redacted] ..." }) }) })), { response_: tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, this.response_), { headers: tslib_1.__assign(tslib_1.__assign({}, (_e = this.response_) === null || _e === void 0 ? void 0 : _e.headers), { Authorization: ((_h = (_g = (_f = this.config_) === null || _f === void 0 ? void 0 : _f.headers) === null || _g === void 0 ? void 0 : _g.Authorization) !== null && _h !== void 0 ? _h : '').slice(0, 15) + " [Redacted] ..." }), request: tslib_1.__assign(tslib_1.__assign({}, (_j = this.response_) === null || _j === void 0 ? void 0 : _j.request), { res: ' [IncomingMessage]', _redirectable: '[Writable]', agent: '[Agent]', socket: '[TLSSocket]', _header: '[HTTP Header Fields]' }) }), tslib_1.__assign(tslib_1.__assign({}, (_k = this.response_) === null || _k === void 0 ? void 0 : _k.config), { config: tslib_1.__assign(tslib_1.__assign({}, (_m = (_l = this.response_) === null || _l === void 0 ? void 0 : _l.config) === null || _m === void 0 ? void 0 : _m.headers), { headers: {
                        // ...this.response_?.config?.headers?.Authorization,
                        Authorization: ((_q = ((_p = (_o = this.config_) === null || _o === void 0 ? void 0 : _o.headers) === null || _p === void 0 ? void 0 : _p.Authorization).slice(0, 15)) !== null && _q !== void 0 ? _q : '') + " [Redacted] ...",
                    } }) })), accessToken: '[string:Private]', keyFile: './keys/[Private]', refreshToken: '[string:Private]', seedToken: '[string:Private]' }), null, indent);
    },
};
// response_: {
//     status: 200,
//     statusText: 'OK',
//     headers: {
//       Accept: 'application/json, text/plain, */*',
//       Authorization: 'Bearer cM-cS45DkMr1ASRGUslOf1p7bkoP2yGa0',
//       location: '',
//       'User-Agent': 'axios/0.21.1'
//     },
//     config: {
//       Accept: 'application/json, text/plain, */*',
//       Authorization: 'Bearer cM-cS45DkMr1ASRGUslOf1p7bkoP2yGa0',
//       location: '',
//       'User-Agent': 'axios/0.21.1',
//       headers: [Object]
//     },
// #region https://github.com/ericmuyser/stringy/issues/1
void function stringy() {
    // eslint-disable-next-line unicorn/consistent-function-scoping
    function filter(item) {
        var i = 0;
        return function (_key, value) {
            if (i !== 0 &&
                typeof item === 'object' &&
                typeof value === 'object' &&
                item === value) {
                return '[Circular]';
            }
            // console.log(i, value);
            if (i >= 100) {
                // seems to be a harded maximum of 30 serialized objects?
                return '[Unknown]';
            }
            ++i; // so we know we aren't using the original object anymore
            return value;
        };
    }
    function stringify(item, censor, space) {
        if (space === void 0) { space = ' '; }
        return JSON.stringify(item, censor ? censor : filter(item), space);
    }
    var b = { foo: { bar: null } };
    b.foo.bar = b; // it's circular!
    console.log('Filtering:', b);
    // console.log(stringify(b)); // works!
    // console.log(JSON.stringify(b)); // exception
    // eslint-disable-next-line unicorn/no-process-exit
    // process.exit();
    // export { stringify };
    return stringify;
};
// #endregion https://github.com/ericmuyser/stringy/issues/1
function JSONjs() {
    /*
      cycle.js
      2018-05-15
      Public Domain.
      NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
      This code should be minified before deployment.
      See http://javascript.crockford.com/jsmin.html
      USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
      NOT CONTROL.
  */
    // The file uses the WeakMap feature of ES6.
    /*jslint eval */
    /*property
      $ref, decycle, forEach, get, indexOf, isArray, keys, length, push,
      retrocycle, set, stringify, test
  */
    var decycle;
    var retrocycle;
    var myJsonjs = { decycle: decycle, retrocycle: retrocycle };
    if (typeof myJsonjs.decycle !== 'function') {
        myJsonjs.decycle = function decycle(object, replacer) {
            'use strict';
            // Make a deep copy of an object or array, assuring that there is at most
            // one instance of each object or array in the resulting structure. The
            // duplicate references (which might be forming cycles) are replaced with
            // an object of the form
            //      {"$ref": PATH}
            // where the PATH is a JSONPath string that locates the first occurance.
            // So,
            //      var a = [];
            //      a[0] = a;
            //      return JSON.stringify(JSON.decycle(a));
            // produces the string '[{"$ref":"$"}]'.
            // If a replacer function is provided, then it will be called for each value.
            // A replacer function receives a value and returns a replacement value.
            // JSONPath is used to locate the unique object. $ indicates the top level of
            // the object or array. [NUMBER] or [STRING] indicates a child element or
            // property.
            var objects = new WeakMap(); // object to path mappings
            return (function derez(value, path) {
                // The derez function recurses through the object, producing the deep copy.
                var old_path; // The path of an earlier occurance of value
                var nu; // The new object or array
                // If a replacer function was provided, then call it to get a replacement value.
                if (replacer !== undefined) {
                    value = replacer(value);
                }
                // typeof null === "object", so go on if this value is really an object but not
                // one of the weird builtin objects.
                if (typeof value === 'object' &&
                    value !== null &&
                    !(value instanceof Boolean) &&
                    !(value instanceof Date) &&
                    !(value instanceof Number) &&
                    !(value instanceof RegExp) &&
                    !(value instanceof String)) {
                    // If the value is an object or array, look to see if we have already
                    // encountered it. If so, return a {"$ref":PATH} object. This uses an
                    // ES6 WeakMap.
                    old_path = objects.get(value);
                    if (old_path !== undefined) {
                        return { $ref: old_path };
                    }
                    // Otherwise, accumulate the unique value and its path.
                    objects.set(value, path);
                    // If it is an array, replicate the array.
                    if (Array.isArray(value)) {
                        nu = [];
                        value.forEach(function (element, i) {
                            nu[i] = derez(element, path + '[' + i + ']');
                        });
                    }
                    else {
                        // If it is an object, replicate the object.
                        nu = {};
                        Object.keys(value).forEach(function (name) {
                            nu[name] = derez(value[name], path + '[' + JSON.stringify(name) + ']');
                        });
                    }
                    return nu;
                }
                return value;
            })(object, '$');
        };
    }
    if (typeof myJsonjs.retrocycle !== 'function') {
        myJsonjs.retrocycle = function retrocycle($) {
            'use strict';
            // Restore an object that was reduced by decycle. Members whose values are
            // objects of the form
            //      {$ref: PATH}
            // are replaced with references to the value found by the PATH. This will
            // restore cycles. The object will be mutated.
            // The eval function is used to locate the values described by a PATH. The
            // root object is kept in a $ variable. A regular expression is used to
            // assure that the PATH is extremely well formed. The regexp contains nested
            // * quantifiers. That has been known to have extremely bad performance
            // problems on some browsers for very long strings. A PATH is expected to be
            // reasonably short. A PATH is allowed to belong to a very restricted subset of
            // Goessner's JSONPath.
            // So,
            //      var s = '[{"$ref":"$"}]';
            //      return JSON.retrocycle(JSON.parse(s));
            // produces an array containing a single element which is the array itself.
            // !! eslint-disable-next-line unicorn/no-unsafe-regex
            //  eslint-disable-next-line unicorn/no-unsafe-regex
            var px = /^\$(?:\[(?:\d+|"(?:[^\u0000-\u001F"\\]|\\(?:["/\\bfnrt]|u[\dA-Za-z]{4}))*")])*$/;
            (function rez(value) {
                // The rez function walks recursively through the object looking for $ref
                // properties. When it finds one that has a value that is a path, then it
                // replaces the $ref object with a reference to the value that is found by
                // the path.
                if (value && typeof value === 'object') {
                    if (Array.isArray(value)) {
                        value.forEach(function (element, i) {
                            if (typeof element === 'object' && element !== null) {
                                var path = element.$ref;
                                if (typeof path === 'string' && px.test(path)) {
                                    value[i] = eval(path);
                                }
                                else {
                                    rez(element);
                                }
                            }
                        });
                    }
                    else {
                        Object.keys(value).forEach(function (name) {
                            var item = value[name];
                            if (typeof item === 'object' && item !== null) {
                                var path = item.$ref;
                                if (typeof path === 'string' && px.test(path)) {
                                    value[name] = eval(path);
                                }
                                else {
                                    rez(item);
                                }
                            }
                        });
                    }
                }
            })($);
            return $;
        };
    }
    return myJsonjs;
}
exports.JSONjs = JSONjs;
//# sourceMappingURL=_defaultCredentials.js.map

/***/ }),

/***/ "./build/src/private/auth/credentialsFactory/_emptyCredentials.js":
/*!************************************************************************!*\
  !*** ./build/src/private/auth/credentialsFactory/_emptyCredentials.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._emptyCredentials = void 0;
var _defaultCredentials_1 = __webpack_require__(/*! ./_defaultCredentials */ "./build/src/private/auth/credentialsFactory/_defaultCredentials.js");
exports._emptyCredentials = function () {
    var credentials = _defaultCredentials_1._defaultCredentials;
    credentials.accountNumber = '';
    credentials.apiVersion = 'v1';
    credentials.keyDir = './keys';
    credentials.keyFile = '';
    credentials.practice = false;
    credentials.seedToken = '';
    credentials.expiresIn = 0;
    credentials.tokenType = '';
    credentials.refreshToken = '';
    credentials.accessToken = '';
    credentials.apiUrl = '';
    credentials.apiServer = '';
    return credentials;
};
//# sourceMappingURL=_emptyCredentials.js.map

/***/ }),

/***/ "./build/src/private/auth/credentialsFactory/_getPrimaryAccountNumber.js":
/*!*******************************************************************************!*\
  !*** ./build/src/private/auth/credentialsFactory/_getPrimaryAccountNumber.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._getPrimaryAccountNumber = void 0;
/** PROVIDE: IAccount[] THEN GET:  a 'primaryAccountNumber string'  */
function _getPrimaryAccountNumber(accounts) {
    if (!accounts || accounts.length < 1) {
        console.warn("WARNING('No account number found') will default to '11111111' ");
        return '11111111';
    }
    if (accounts.length === 1) {
        return accounts[0].number;
    }
    var primary = accounts.filter(function (account) { return account.isPrimary; });
    if (primary.length >= 1) {
        return primary[0].number;
    }
    return accounts[0].number;
}
exports._getPrimaryAccountNumber = _getPrimaryAccountNumber;
//# sourceMappingURL=_getPrimaryAccountNumber.js.map

/***/ }),

/***/ "./build/src/private/auth/credentialsFactory/index.js":
/*!************************************************************!*\
  !*** ./build/src/private/auth/credentialsFactory/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._getPrimaryAccountNumber = exports._emptyCredentials = exports._credentialsFactory = exports._buildCredentialsFromToken = void 0;
var _buildCredentialsFromToken_1 = __webpack_require__(/*! ./_buildCredentialsFromToken */ "./build/src/private/auth/credentialsFactory/_buildCredentialsFromToken.js");
Object.defineProperty(exports, "_buildCredentialsFromToken", ({ enumerable: true, get: function () { return _buildCredentialsFromToken_1._buildCredentialsFromToken; } }));
var _credentialsFactory_1 = __webpack_require__(/*! ./_credentialsFactory */ "./build/src/private/auth/credentialsFactory/_credentialsFactory.js");
Object.defineProperty(exports, "_credentialsFactory", ({ enumerable: true, get: function () { return _credentialsFactory_1._credentialsFactory; } }));
var _emptyCredentials_1 = __webpack_require__(/*! ./_emptyCredentials */ "./build/src/private/auth/credentialsFactory/_emptyCredentials.js");
Object.defineProperty(exports, "_emptyCredentials", ({ enumerable: true, get: function () { return _emptyCredentials_1._emptyCredentials; } }));
var _getPrimaryAccountNumber_1 = __webpack_require__(/*! ./_getPrimaryAccountNumber */ "./build/src/private/auth/credentialsFactory/_getPrimaryAccountNumber.js");
Object.defineProperty(exports, "_getPrimaryAccountNumber", ({ enumerable: true, get: function () { return _getPrimaryAccountNumber_1._getPrimaryAccountNumber; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./build/src/private/auth/index.js":
/*!*****************************************!*\
  !*** ./build/src/private/auth/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._getPrimaryAccountNumber = exports._emptyCredentials = exports._credentialsFactory = void 0;
var credentialsFactory_1 = __webpack_require__(/*! ./credentialsFactory */ "./build/src/private/auth/credentialsFactory/index.js");
Object.defineProperty(exports, "_credentialsFactory", ({ enumerable: true, get: function () { return credentialsFactory_1._credentialsFactory; } }));
Object.defineProperty(exports, "_emptyCredentials", ({ enumerable: true, get: function () { return credentialsFactory_1._emptyCredentials; } }));
Object.defineProperty(exports, "_getPrimaryAccountNumber", ({ enumerable: true, get: function () { return credentialsFactory_1._getPrimaryAccountNumber; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./build/src/private/core/X_tryToGetData_AXIOS_X.js":
/*!**********************************************************!*\
  !*** ./build/src/private/core/X_tryToGetData_AXIOS_X.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._tryToGetData = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var axios_1 = tslib_1.__importDefault(__webpack_require__(/*! axios */ "./node_modules/axios/index.js"));
var utils_1 = __webpack_require__(/*! ../../utils */ "./build/src/utils/index.js");
var requestPerSecondLimit_1 = __webpack_require__(/*! ./requestPerSecondLimit */ "./build/src/private/core/requestPerSecondLimit/index.js");
exports._tryToGetData = function (_config, credentials, proxy) {
    return function (_logError) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var axiosClient_1, possiblePerSeconds, response, requestLimiter, data, urlToHash, dataToHash, error_1;
        var _a, _b, _c, _d;
        return tslib_1.__generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    _e.trys.push([0, 5, , 6]);
                    axiosClient_1 = axios_1.default;
                    if (proxy) {
                        axiosClient_1 = proxy;
                    }
                    possiblePerSeconds = (_b = (_a = credentials === null || credentials === void 0 ? void 0 : credentials.remainingRequests) === null || _a === void 0 ? void 0 : _a.possiblePerSeconds) !== null && _b !== void 0 ? _b : 21;
                    response = void 0;
                    if (!(possiblePerSeconds <= 20)) return [3 /*break*/, 2];
                    requestLimiter = requestPerSecondLimit_1.requestPerSecondLimiter(possiblePerSeconds);
                    return [4 /*yield*/, requestLimiter(function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
                            return [2 /*return*/, axiosClient_1(_config)];
                        }); }); })];
                case 1:
                    response = _e.sent();
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, axiosClient_1(_config)];
                case 3:
                    response = _e.sent();
                    _e.label = 4;
                case 4:
                    if (response.status !== 200) {
                        console.log('________________________________________________');
                        console.log(response.status, response.statusText);
                        console.log(response.data);
                        console.table(response.headers);
                        console.log(requestPerSecondLimit_1.remaningTimeString(((_c = credentials === null || credentials === void 0 ? void 0 : credentials.remainingRequests) === null || _c === void 0 ? void 0 : _c.secondsRemaning) ? credentials.remainingRequests.secondsRemaning
                            : 0));
                        console.log(response.status, response.statusText);
                        console.log('________________________________________________');
                        console.log('++++++++++++++++++++++++++++++++++++++++++++++++');
                    }
                    else {
                        // console.log(
                        //   remaningTimeString(
                        //     credentials?.remainingRequests?.secondsRemaning
                        //       /? credentials.remainingRequests.secondsRemaning
                        //       : 0
                        //   )
                        // );
                    }
                    data = response.data;
                    if (!data) {
                        throw _logError(new Error("Can't retrive data from call to API"));
                    }
                    try {
                        if (credentials) {
                            credentials.remainingRequests = requestPerSecondLimit_1.remainingRequests(response);
                            credentials.config_ = _config;
                            credentials.response_ = response;
                            credentials.configUrl_ = ("" + _config.url).split('questrade.com/')[1];
                            credentials.urlTimeUTC = new Date(credentials.response_.headers.date);
                            urlToHash = utils_1.getQtUrlPathFromArgs(_config);
                            dataToHash = "" + JSON.stringify((_d = response.data) !== null && _d !== void 0 ? _d : null);
                            credentials.hashes = utils_1.creatUrlAndDataHashes(urlToHash, dataToHash);
                        }
                    }
                    catch (error_) {
                        console.error('error_:', error_);
                        console.info("To make tests pass removed 'throw' error messages from code bloc in (Axios) _tryToGetData");
                        throw error_;
                    }
                    return [2 /*return*/, data];
                case 5:
                    error_1 = _e.sent();
                    console.error(_logError(error_1).message);
                    throw error_1;
                case 6: return [2 /*return*/];
            }
        });
    }); };
};
//# sourceMappingURL=X_tryToGetData_AXIOS_X.js.map

/***/ }),

/***/ "./build/src/private/core/_coreApiConfig.js":
/*!**************************************************!*\
  !*** ./build/src/private/core/_coreApiConfig.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._coreApiConfig = void 0;
/**
 * Partial application of Core api config builder generating an
 * object of strings value in the format of CoreApiConfig<D> to
 * be sent to axios as main parameter.
 */
exports._coreApiConfig = function (credentials, proxy) {
    void proxy; // TODO: use proxy
    //
    return function (VERB) {
        //
        return function (endpoint) {
            //
            return function (postData) {
                /**
                 * Build endpoint url with apiUrl as base.
                 */
                var url = credentials.apiUrl + endpoint;
                /**
                 * Set methodh to 'get' or 'post' in the
                 * request config/ header.
                 */
                var method = VERB.toLowerCase();
                /** oAuth2 token informations added to request header. */
                var Authorization = "Bearer " + credentials.accessToken;
                /**
                 * Adding account number information
                 * can occur in the 'location' header only.
                 */
                var location = credentials.accountNumber;
                /** Adittional information for POST requests. */
                var data = postData;
                /** Header builder. */
                var headers = {
                    Authorization: Authorization,
                    location: location,
                };
                /** Config builder. */
                var config = {
                    url: url,
                    method: method,
                    headers: headers,
                    data: data,
                };
                return config;
            };
        };
    };
};
//# sourceMappingURL=_coreApiConfig.js.map

/***/ }),

/***/ "./build/src/private/core/_coreApiFunction.js":
/*!****************************************************!*\
  !*** ./build/src/private/core/_coreApiFunction.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._coreApiFunction = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var _coreApiConfig_1 = __webpack_require__(/*! ./_coreApiConfig */ "./build/src/private/core/_coreApiConfig.js");
var _logErrors_1 = __webpack_require__(/*! ./_logErrors */ "./build/src/private/core/_logErrors.js");
var X_tryToGetData_AXIOS_X_1 = __webpack_require__(/*! ./X_tryToGetData_AXIOS_X */ "./build/src/private/core/X_tryToGetData_AXIOS_X.js");
exports._coreApiFunction = function (credentials, proxy) {
    // ~~>
    return function (VERB) {
        // ~~>
        return function (postData) {
            // ~~>
            return function (endpoint) {
                // ~~>
                return function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
                    var configBuilder, getEndPoint, endPoint, getDataConfig, axiosDataGetter, data;
                    return tslib_1.__generator(this, function (_a) {
                        configBuilder = _coreApiConfig_1._coreApiConfig(credentials, proxy);
                        getEndPoint = configBuilder(VERB);
                        endPoint = getEndPoint(endpoint);
                        getDataConfig = endPoint(postData);
                        axiosDataGetter = X_tryToGetData_AXIOS_X_1._tryToGetData(getDataConfig, credentials, proxy);
                        data = axiosDataGetter(_logErrors_1._logErrors);
                        // ~~>
                        return [2 /*return*/, data]; // from _tryToGetData...
                    });
                }); };
            };
        };
    };
};
//# sourceMappingURL=_coreApiFunction.js.map

/***/ }),

/***/ "./build/src/private/core/_logErrors.js":
/*!**********************************************!*\
  !*** ./build/src/private/core/_logErrors.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._logErrors = void 0;
exports._logErrors = function (error, message) {
    if (message === void 0) { message = ''; }
    console.error('Error:', error.message, '\n', message);
    return error;
};
//# sourceMappingURL=_logErrors.js.map

/***/ }),

/***/ "./build/src/private/core/index.js":
/*!*****************************************!*\
  !*** ./build/src/private/core/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._coreApiFunction = void 0;
var _coreApiFunction_1 = __webpack_require__(/*! ./_coreApiFunction */ "./build/src/private/core/_coreApiFunction.js");
Object.defineProperty(exports, "_coreApiFunction", ({ enumerable: true, get: function () { return _coreApiFunction_1._coreApiFunction; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./build/src/private/core/requestPerSecondLimit/CORE_PerSecond_Limiter.js":
/*!********************************************************************************!*\
  !*** ./build/src/private/core/requestPerSecondLimit/CORE_PerSecond_Limiter.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.requestPerSecondLimiter = exports.myPromisify = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var utils_1 = __webpack_require__(/*! ../../../utils */ "./build/src/utils/index.js");
var lastCall = Date.now();
var lastDelay = function () { return Date.now() - lastCall; };
// const toMilihertz = (hz: number) => hz / 1000;
var resetLastCall = function () {
    lastCall = Date.now();
};
(function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        //
        // const now = Date.now();
        lastCall = Date.now();
        return [2 /*return*/, void 0];
    });
}); })().catch(function (error) { return console.log('error message:', error.message); });
function requestLimiterFactory() {
    var isCalled = false;
    var callsQueue = [];
    return function requestLimiter(fn, hertz) {
        if (hertz === void 0) { hertz = 1; }
        var callToPop = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var poped, _a, myfn, mycb;
                return tslib_1.__generator(this, function (_b) {
                    if (callsQueue.length >= 1 && !isCalled) {
                        isCalled = true;
                        setTimeout(function () {
                            return tslib_1.__awaiter(this, void 0, void 0, function () {
                                return tslib_1.__generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            isCalled = false;
                                            return [4 /*yield*/, callToPop()];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/, void 0];
                                    }
                                });
                            });
                        }, utils_1.perSeconds(hertz));
                        poped = callsQueue.pop();
                        _a = tslib_1.__read(!!poped ? poped : [neverWillCb, neverCb], 2), myfn = _a[0], mycb = _a[1];
                        while (lastDelay() < utils_1.perSeconds(hertz))
                            ;
                        {
                            // do nothing just wait while (lastDelay() < perSeconds(hertz));
                        }
                        mycb(null, myfn());
                        resetLastCall();
                        return [2 /*return*/, void 0];
                    }
                    return [2 /*return*/, void 0];
                });
            });
        };
        return function addToQueue(cb) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                return tslib_1.__generator(this, function (_a) {
                    callsQueue.unshift([fn, cb]);
                    callToPop();
                    return [2 /*return*/, void 0];
                });
            });
        };
    };
}
exports.myPromisify = function (addToQueue) {
    return new Promise(function (resolve, reject) {
        addToQueue(function (error, result) {
            if (!!error) {
                console.error(error);
                reject(error);
                return void 0;
            }
            resolve(result);
            return void 0;
        });
    });
};
function limitingRequest(limiterFactory) {
    var _this = this;
    var requestLimiter = limiterFactory();
    return function (hz) { return function (fn) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var addToQueue;
        return tslib_1.__generator(this, function (_a) {
            addToQueue = requestLimiter(fn, hz);
            return [2 /*return*/, exports.myPromisify(addToQueue)];
        });
    }); }; };
}
var neverWillCb = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        utils_1.void0();
        throw new Error('NEVER: lenght is validated prior to pop this should never occur');
    });
}); };
var neverCb = function (error, returnValue) {
    utils_1.void0({ returnValue: returnValue, error: error });
    throw new Error('NEVER: lenght is validated prior to pop this should never occur');
};
exports.requestPerSecondLimiter = limitingRequest(requestLimiterFactory);
//# sourceMappingURL=CORE_PerSecond_Limiter.js.map

/***/ }),

/***/ "./build/src/private/core/requestPerSecondLimit/index.js":
/*!***************************************************************!*\
  !*** ./build/src/private/core/requestPerSecondLimit/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.remaningTimeString = exports.remainingRequests = exports.logRemanings = exports.logData = exports.requestPerSecondLimiter = void 0;
var CORE_PerSecond_Limiter_1 = __webpack_require__(/*! ./CORE_PerSecond_Limiter */ "./build/src/private/core/requestPerSecondLimit/CORE_PerSecond_Limiter.js");
Object.defineProperty(exports, "requestPerSecondLimiter", ({ enumerable: true, get: function () { return CORE_PerSecond_Limiter_1.requestPerSecondLimiter; } }));
var logData_1 = __webpack_require__(/*! ./logData */ "./build/src/private/core/requestPerSecondLimit/logData.js");
Object.defineProperty(exports, "logData", ({ enumerable: true, get: function () { return logData_1.logData; } }));
var logRemanings_1 = __webpack_require__(/*! ./logRemanings */ "./build/src/private/core/requestPerSecondLimit/logRemanings.js");
Object.defineProperty(exports, "logRemanings", ({ enumerable: true, get: function () { return logRemanings_1.logRemanings; } }));
var remainingRequests_1 = __webpack_require__(/*! ./remainingRequests */ "./build/src/private/core/requestPerSecondLimit/remainingRequests.js");
Object.defineProperty(exports, "remainingRequests", ({ enumerable: true, get: function () { return remainingRequests_1.remainingRequests; } }));
var remaningTimeString_1 = __webpack_require__(/*! ./remaningTimeString */ "./build/src/private/core/requestPerSecondLimit/remaningTimeString.js");
Object.defineProperty(exports, "remaningTimeString", ({ enumerable: true, get: function () { return remaningTimeString_1.remaningTimeString; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./build/src/private/core/requestPerSecondLimit/logData.js":
/*!*****************************************************************!*\
  !*** ./build/src/private/core/requestPerSecondLimit/logData.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.logData = void 0;
exports.logData = function (response) {
    var config = response.config, data = response.data, headers = response.headers, status = response.status, statusText = response.statusText;
    console.log('status ==============================');
    console.log(status, statusText);
    console.log('');
    console.log('data ==============================');
    console.log(data);
    console.log('');
    console.log('config ==============================');
    console.log(config);
    console.log('');
    console.log('Account calls 30 per seconds 30000 per hour ');
    // 30(per sec) *X* 60 (sec per minute) = 108'000 slots per hours (can use 27%)
    // 500 per minutes 8.3 per seconds 25 each 3 seconds
    console.log('Market Data calls 20 per seconds 15000 per hour ');
    // 20(per sec) *X* 60 (sec per minute) = 72'000  slots per hours (can use 20%)
    // 250 per minutes 4.16 per sec 25 per 6 seconds
    console.log('headers ==============================');
    console.log(headers);
};
//# sourceMappingURL=logData.js.map

/***/ }),

/***/ "./build/src/private/core/requestPerSecondLimit/logRemanings.js":
/*!**********************************************************************!*\
  !*** ./build/src/private/core/requestPerSecondLimit/logRemanings.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.logRemanings = void 0;
var remaningTimeString_1 = __webpack_require__(/*! ./remaningTimeString */ "./build/src/private/core/requestPerSecondLimit/remaningTimeString.js");
exports.logRemanings = function (_a) {
    var timeNow = _a.timeNow, timeThen = _a.timeThen, secondsRemaning = _a.secondsRemaning, maximumperseconds = _a.maximumperseconds, possiblePerSeconds = _a.possiblePerSeconds, requestsRemaining = _a.requestsRemaining, maximums = _a.maximums;
    console.log();
    console.log('time remaning', remaningTimeString_1.remaningTimeString(secondsRemaning));
    console.log('time now', timeNow);
    console.log('time then', timeThen);
    console.log('time remaining until reset', secondsRemaning, '(sec)');
    console.log();
    console.log('requsts remaning', requestsRemaining);
    console.log();
    console.log('Requests per seconds possible', possiblePerSeconds);
    console.log('[maximum total in remaining period, maximum per second]', maximums, maximumperseconds);
};
//# sourceMappingURL=logRemanings.js.map

/***/ }),

/***/ "./build/src/private/core/requestPerSecondLimit/remainingRequests.js":
/*!***************************************************************************!*\
  !*** ./build/src/private/core/requestPerSecondLimit/remainingRequests.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.remainingRequests = void 0;
exports.remainingRequests = function (response, maximumperseconds) {
    if (maximumperseconds === void 0) { maximumperseconds = 20; }
    var remainingStr = response.headers['x-ratelimit-remaining'];
    var timeUntilResetStr = response.headers['x-ratelimit-reset'];
    var requestsRemaining = Number.parseInt(remainingStr, 10);
    var timeUntilReset = Number.parseInt(timeUntilResetStr, 10);
    var timeNow = Math.floor(new Date().getTime() / 1000) + 1;
    var timeThen = Math.floor(timeUntilReset);
    var secondsRemaning = timeUntilReset - timeNow;
    var minutesRemaning = Math.ceil((timeUntilReset - timeNow) / 60);
    // const timeNow_ = new Date(timeNow).toTimeString();
    // const timeThen_ = new Date(timeThen).toLocaleTimeString();
    var possiblePerSeconds = Math.floor(Math.min(requestsRemaining / secondsRemaning, maximumperseconds));
    var maximums = [
        requestsRemaining,
        possiblePerSeconds,
        maximumperseconds,
    ];
    return {
        timeNow: timeNow,
        timeThen: timeThen,
        secondsRemaning: secondsRemaning,
        minutesRemaning: minutesRemaning,
        maximumperseconds: maximumperseconds,
        possiblePerSeconds: possiblePerSeconds,
        requestsRemaining: requestsRemaining,
        maximums: maximums,
    };
};
//# sourceMappingURL=remainingRequests.js.map

/***/ }),

/***/ "./build/src/private/core/requestPerSecondLimit/remaningTimeString.js":
/*!****************************************************************************!*\
  !*** ./build/src/private/core/requestPerSecondLimit/remaningTimeString.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.remaningTimeString = void 0;
exports.remaningTimeString = function (secsRemaning) {
    if (secsRemaning >= 60) {
        return (function () {
            var minutes = (secsRemaning / 60).toFixed(0);
            var minutesString = minutes + "min";
            var seconds = (((secsRemaning / 60) % 1) * 60).toFixed(0);
            var secondString = seconds + "sec";
            var timeLeft = minutesString + " " + secondString;
            return timeLeft;
        })();
    }
    // to avoid shadowing
    return (function () {
        var seconds = (((secsRemaning / 60) % 1) * 60).toFixed(0);
        var secondString = seconds + "sec";
        var timeLeft = "" + secondString;
        return timeLeft;
    })();
};
//# sourceMappingURL=remaningTimeString.js.map

/***/ }),

/***/ "./build/src/private/index.js":
/*!************************************!*\
  !*** ./build/src/private/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._axiosPostApi = exports._axiosGetApi = exports._axiosAccountGetApi = exports._getPrimaryAccountNumber = exports._emptyCredentials = exports._credentialsFactory = exports._getQuestradeApi = void 0;
var api_1 = __webpack_require__(/*! ./api */ "./build/src/private/api/index.js");
Object.defineProperty(exports, "_getQuestradeApi", ({ enumerable: true, get: function () { return api_1._getQuestradeApi; } }));
var auth_1 = __webpack_require__(/*! ./auth */ "./build/src/private/auth/index.js");
Object.defineProperty(exports, "_credentialsFactory", ({ enumerable: true, get: function () { return auth_1._credentialsFactory; } }));
Object.defineProperty(exports, "_emptyCredentials", ({ enumerable: true, get: function () { return auth_1._emptyCredentials; } }));
Object.defineProperty(exports, "_getPrimaryAccountNumber", ({ enumerable: true, get: function () { return auth_1._getPrimaryAccountNumber; } }));
var routes_1 = __webpack_require__(/*! ./routes */ "./build/src/private/routes/index.js");
Object.defineProperty(exports, "_axiosAccountGetApi", ({ enumerable: true, get: function () { return routes_1._axiosAccountGetApi; } }));
Object.defineProperty(exports, "_axiosGetApi", ({ enumerable: true, get: function () { return routes_1._axiosGetApi; } }));
Object.defineProperty(exports, "_axiosPostApi", ({ enumerable: true, get: function () { return routes_1._axiosPostApi; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./build/src/private/routes/axiosAccountGetApi/_axiosAccountGetApi.js":
/*!****************************************************************************!*\
  !*** ./build/src/private/routes/axiosAccountGetApi/_axiosAccountGetApi.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._axiosAccountGetApi = void 0;
var core_1 = __webpack_require__(/*! ../../core */ "./build/src/private/core/index.js");
var endpointFormatAccount_1 = __webpack_require__(/*! ./endpointFormatAccount */ "./build/src/private/routes/axiosAccountGetApi/endpointFormatAccount/index.js");
// # _axiosAccountApi
/**
 * YOU PROVIDE: credentials and accountEndpoint string with R return type,
 * THEN YOU GET: ( ) => Promise<R>
 */
exports._axiosAccountGetApi = function (credentials, proxy) { return function (accountEndpoint) {
    return core_1._coreApiFunction(credentials, proxy)('GET')(null)(endpointFormatAccount_1._endpointFormatAccount(credentials, proxy)(accountEndpoint));
}; };
//# sourceMappingURL=_axiosAccountGetApi.js.map

/***/ }),

/***/ "./build/src/private/routes/axiosAccountGetApi/endpointFormatAccount/_endpointFormatAccount.js":
/*!*****************************************************************************************************!*\
  !*** ./build/src/private/routes/axiosAccountGetApi/endpointFormatAccount/_endpointFormatAccount.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._endpointFormatAccount = void 0;
var _urlSeprator = function () { return '/'; };
var _baseAcctUrlStr = function () { return 'accounts'; };
var _credAcctNmbrProp = function (credentials) {
    return credentials.accountNumber;
};
var _endPtAccountBaseURL = function (getCredAcctProp) { return function (urlSep) { return function (accountStr) { return function (credentials, proxy) { return function (accountEndpoint) {
    return "" + urlSep() + accountStr() + urlSep() + getCredAcctProp(credentials, proxy) + accountEndpoint;
}; }; }; }; };
/** PROVIDE: credentials and accountEndpoint string, THEN GET: a endpoint string */
exports._endpointFormatAccount = _endPtAccountBaseURL(_credAcctNmbrProp)(_urlSeprator)(_baseAcctUrlStr);
//# sourceMappingURL=_endpointFormatAccount.js.map

/***/ }),

/***/ "./build/src/private/routes/axiosAccountGetApi/endpointFormatAccount/index.js":
/*!************************************************************************************!*\
  !*** ./build/src/private/routes/axiosAccountGetApi/endpointFormatAccount/index.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._endpointFormatAccount = void 0;
var _endpointFormatAccount_1 = __webpack_require__(/*! ./_endpointFormatAccount */ "./build/src/private/routes/axiosAccountGetApi/endpointFormatAccount/_endpointFormatAccount.js");
Object.defineProperty(exports, "_endpointFormatAccount", ({ enumerable: true, get: function () { return _endpointFormatAccount_1._endpointFormatAccount; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./build/src/private/routes/axiosAccountGetApi/index.js":
/*!**************************************************************!*\
  !*** ./build/src/private/routes/axiosAccountGetApi/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._axiosAccountGetApi = void 0;
var _axiosAccountGetApi_1 = __webpack_require__(/*! ./_axiosAccountGetApi */ "./build/src/private/routes/axiosAccountGetApi/_axiosAccountGetApi.js");
Object.defineProperty(exports, "_axiosAccountGetApi", ({ enumerable: true, get: function () { return _axiosAccountGetApi_1._axiosAccountGetApi; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./build/src/private/routes/axiosGetApi/_axiosGetApi.js":
/*!**************************************************************!*\
  !*** ./build/src/private/routes/axiosGetApi/_axiosGetApi.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._axiosGetApi = void 0;
var core_1 = __webpack_require__(/*! ../../core */ "./build/src/private/core/index.js");
// # _axiosApiGet !!!
/**
 * YOU PROVIDE: credentials and endpoint string with <R> return type,
 * THEN YOU GET: ( )=> Promise<R>
 */
exports._axiosGetApi = function (credentials, proxy) { return core_1._coreApiFunction(credentials, proxy)('GET')(null); };
//# sourceMappingURL=_axiosGetApi.js.map

/***/ }),

/***/ "./build/src/private/routes/axiosGetApi/index.js":
/*!*******************************************************!*\
  !*** ./build/src/private/routes/axiosGetApi/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._axiosGetApi = void 0;
var _axiosGetApi_1 = __webpack_require__(/*! ./_axiosGetApi */ "./build/src/private/routes/axiosGetApi/_axiosGetApi.js");
Object.defineProperty(exports, "_axiosGetApi", ({ enumerable: true, get: function () { return _axiosGetApi_1._axiosGetApi; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./build/src/private/routes/axiosPostApi/_axiosPostApi.js":
/*!****************************************************************!*\
  !*** ./build/src/private/routes/axiosPostApi/_axiosPostApi.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._axiosPostApi = void 0;
var core_1 = __webpack_require__(/*! ../../core */ "./build/src/private/core/index.js");
// # _axiosApiPost !!!
/**
 * YOU PROVIDE: credentials, postData with D data type
 * and endpoint string with R return type,
 * THEN YOU GET: ( ) => Promise<R>
 */
exports._axiosPostApi = function (credentials, proxy) { return core_1._coreApiFunction(credentials, proxy)('POST'); };
//# sourceMappingURL=_axiosPostApi.js.map

/***/ }),

/***/ "./build/src/private/routes/axiosPostApi/index.js":
/*!********************************************************!*\
  !*** ./build/src/private/routes/axiosPostApi/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._axiosPostApi = void 0;
var _axiosPostApi_1 = __webpack_require__(/*! ./_axiosPostApi */ "./build/src/private/routes/axiosPostApi/_axiosPostApi.js");
Object.defineProperty(exports, "_axiosPostApi", ({ enumerable: true, get: function () { return _axiosPostApi_1._axiosPostApi; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./build/src/private/routes/index.js":
/*!*******************************************!*\
  !*** ./build/src/private/routes/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._axiosPostApi = exports._axiosGetApi = exports._axiosAccountGetApi = void 0;
var axiosAccountGetApi_1 = __webpack_require__(/*! ./axiosAccountGetApi */ "./build/src/private/routes/axiosAccountGetApi/index.js");
Object.defineProperty(exports, "_axiosAccountGetApi", ({ enumerable: true, get: function () { return axiosAccountGetApi_1._axiosAccountGetApi; } }));
var axiosGetApi_1 = __webpack_require__(/*! ./axiosGetApi */ "./build/src/private/routes/axiosGetApi/index.js");
Object.defineProperty(exports, "_axiosGetApi", ({ enumerable: true, get: function () { return axiosGetApi_1._axiosGetApi; } }));
var axiosPostApi_1 = __webpack_require__(/*! ./axiosPostApi */ "./build/src/private/routes/axiosPostApi/index.js");
Object.defineProperty(exports, "_axiosPostApi", ({ enumerable: true, get: function () { return axiosPostApi_1._axiosPostApi; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./build/src/public/index.js":
/*!***********************************!*\
  !*** ./build/src/public/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.redeemToken = void 0;
var redeemToken_1 = __webpack_require__(/*! ./redeemToken */ "./build/src/public/redeemToken.js");
Object.defineProperty(exports, "redeemToken", ({ enumerable: true, get: function () { return redeemToken_1.redeemToken; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./build/src/public/questradeAPI.js":
/*!******************************************!*\
  !*** ./build/src/public/questradeAPI.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.questradeApi = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var private_1 = __webpack_require__(/*! ../private */ "./build/src/private/index.js");
// export const getQuestradeApi = ;
exports.questradeApi = function (credentials, proxy) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var qtApi, api;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, private_1._getQuestradeApi(credentials, proxy)];
            case 1:
                qtApi = _a.sent();
                api = {
                    currentAccount: qtApi.currentAccount,
                    myBalances: qtApi.myBalances,
                    serverTime: qtApi.serverTime,
                    account: {
                        getServerTime: qtApi.account.getServerTime,
                        getActivities: qtApi.account.getActivities,
                        getAllAccounts: qtApi.account.getAllAccounts,
                        getBalances: qtApi.account.getBalances,
                        getExecutions: qtApi.account.getExecutions,
                        getOrders: qtApi.account.getOrders,
                        getOrdersByIds: qtApi.account.getOrdersByIds,
                        getPositions: qtApi.account.getPositions,
                    },
                    market: {
                        getAllMarkets: qtApi.market.getAllMarkets,
                        getCandlesByStockId: qtApi.market.getCandlesByStockId,
                    },
                    getOptionsQuotes: {
                        byOptionsIds: qtApi.getOptionsQuotes.byOptionsIds,
                        fromFilter: qtApi.getOptionsQuotes.fromFilter,
                    },
                    getQuotes: {
                        byStockIds: qtApi.getQuotes.byStockIds,
                        byStrategies: qtApi.getQuotes.byStrategies,
                    },
                    getOptionChains: {
                        byStockId: qtApi.getOptionChains.byStockId,
                    },
                    getSymbols: {
                        byStockIds: qtApi.getSymbols.byStockIds,
                    },
                    search: {
                        stock: qtApi.search.stock,
                        allStocks: qtApi.search.allStocks,
                        countResults: qtApi.search.countResults,
                    },
                };
                return [2 /*return*/, api];
        }
    });
}); };
//# sourceMappingURL=questradeAPI.js.map

/***/ }),

/***/ "./build/src/public/redeemToken.js":
/*!*****************************************!*\
  !*** ./build/src/public/redeemToken.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.redeemToken = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var private_1 = __webpack_require__(/*! ../private */ "./build/src/private/index.js");
var questradeAPI_1 = __webpack_require__(/*! ./questradeAPI */ "./build/src/public/questradeAPI.js");
var _redeemToken = function (refreshToken, proxy) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var credentials, questrade, qtApi;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, private_1._credentialsFactory(refreshToken, proxy)];
            case 1:
                credentials = _a.sent();
                return [4 /*yield*/, questradeAPI_1.questradeApi(credentials, proxy)];
            case 2:
                questrade = _a.sent();
                qtApi = questrade;
                return [2 /*return*/, { qtApi: qtApi, credentials: credentials }];
        }
    });
}); };
var redeemToken = _redeemToken;
exports.redeemToken = redeemToken;
//# sourceMappingURL=redeemToken.js.map

/***/ }),

/***/ "./build/src/utils/create-url-and-data-hashes.js":
/*!*******************************************************!*\
  !*** ./build/src/utils/create-url-and-data-hashes.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.creatUrlAndDataHashes = void 0;
var crypto_1 = __webpack_require__(/*! crypto */ "?8465");
exports.creatUrlAndDataHashes = function (urlPath, dataToHash) {
    if (urlPath === void 0) { urlPath = ''; }
    var BASE64 = 'base64';
    var HEX = 'hex';
    return {
        DATA: !dataToHash ? null : dataToHash,
        URL_PATH: !urlPath ? null : urlPath,
        URL_HASH_HEX: !urlPath
            ? null
            : crypto_1.createHash('sha256').update(urlPath).digest(HEX),
        URL_HASH_64: !urlPath
            ? null
            : crypto_1.createHash('sha256').update(urlPath).digest(BASE64),
        DATA_HASH_HEX: !dataToHash
            ? null
            : crypto_1.createHash('sha256').update(JSON.stringify(dataToHash)).digest(HEX),
        DATA_HASH_64: !dataToHash
            ? null
            : crypto_1.createHash('sha256').update(JSON.stringify(dataToHash)).digest(BASE64),
    };
};
//# sourceMappingURL=create-url-and-data-hashes.js.map

/***/ }),

/***/ "./build/src/utils/dates.js":
/*!**********************************!*\
  !*** ./build/src/utils/dates.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.formatDate = void 0;
exports.formatDate = function (date) {
    return new Date(date).toISOString();
};
//# sourceMappingURL=dates.js.map

/***/ }),

/***/ "./build/src/utils/get-qt-url-path-from-args.js":
/*!******************************************************!*\
  !*** ./build/src/utils/get-qt-url-path-from-args.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getQtUrlPathFromArgs = void 0;
function getQtUrlPathFromArgs(argArray) {
    var _a, _b;
    var urlPath = '';
    try {
        urlPath = "/" + ("" + argArray[0]).split('questrade.com/')[1];
        if ("" + ((_a = argArray[0]) === null || _a === void 0 ? void 0 : _a.url)) {
            urlPath = "/" + ("" + ((_b = argArray[0]) === null || _b === void 0 ? void 0 : _b.url)).split('questrade.com/')[1];
        }
    }
    catch (_c) {
        urlPath = '';
    }
    return urlPath;
}
exports.getQtUrlPathFromArgs = getQtUrlPathFromArgs;
//# sourceMappingURL=get-qt-url-path-from-args.js.map

/***/ }),

/***/ "./build/src/utils/getHash.js":
/*!************************************!*\
  !*** ./build/src/utils/getHash.js ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getHash = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var crypto_1 = tslib_1.__importDefault(__webpack_require__(/*! crypto */ "?8465"));
exports.getHash = function (data, hashAlgo, shortSlice) {
    if (hashAlgo === void 0) { hashAlgo = 'sha1'; }
    if (shortSlice === void 0) { shortSlice = 6; }
    var hAlgo = crypto_1.default.createHash(hashAlgo);
    hAlgo.write(data);
    var longer = hAlgo.digest('hex').toString();
    var shorter = longer.slice(0, shortSlice);
    var hashObj = { shorter: shorter, longer: longer };
    var returnValue = [shorter, longer, hashObj];
    return returnValue;
};
//# sourceMappingURL=getHash.js.map

/***/ }),

/***/ "./build/src/utils/id0.js":
/*!********************************!*\
  !*** ./build/src/utils/id0.js ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.id0 = void 0;
function id0() {
    var param = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        param[_i] = arguments[_i];
    }
    return param;
}
exports.id0 = id0;
//# sourceMappingURL=id0.js.map

/***/ }),

/***/ "./build/src/utils/index.js":
/*!**********************************!*\
  !*** ./build/src/utils/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.void0 = exports.log = exports.id0 = exports.setDateRange = exports.endpointFormatDateTool = exports.day = exports.dateToNumeric = exports.dateToISOString = exports.dateRangeFromNow = exports.dateRange = exports.dateNowNumeric = exports.dateNowISO = exports.ProxyReflexionLoggerFunctionHandler = exports.axiosProxyFactory = exports.axiosConsoleLogHashesProxyHandler = exports.perSeconds = exports.sync = exports.getHash = exports.getQtUrlPathFromArgs = exports.formatDate = exports.creatUrlAndDataHashes = void 0;
var id0_1 = __webpack_require__(/*! ./id0 */ "./build/src/utils/id0.js");
Object.defineProperty(exports, "id0", ({ enumerable: true, get: function () { return id0_1.id0; } }));
var void0_1 = __webpack_require__(/*! ./void0 */ "./build/src/utils/void0.js");
Object.defineProperty(exports, "void0", ({ enumerable: true, get: function () { return void0_1.void0; } }));
var create_url_and_data_hashes_1 = __webpack_require__(/*! ./create-url-and-data-hashes */ "./build/src/utils/create-url-and-data-hashes.js");
Object.defineProperty(exports, "creatUrlAndDataHashes", ({ enumerable: true, get: function () { return create_url_and_data_hashes_1.creatUrlAndDataHashes; } }));
var dates_1 = __webpack_require__(/*! ./dates */ "./build/src/utils/dates.js");
Object.defineProperty(exports, "formatDate", ({ enumerable: true, get: function () { return dates_1.formatDate; } }));
var get_qt_url_path_from_args_1 = __webpack_require__(/*! ./get-qt-url-path-from-args */ "./build/src/utils/get-qt-url-path-from-args.js");
Object.defineProperty(exports, "getQtUrlPathFromArgs", ({ enumerable: true, get: function () { return get_qt_url_path_from_args_1.getQtUrlPathFromArgs; } }));
var getHash_1 = __webpack_require__(/*! ./getHash */ "./build/src/utils/getHash.js");
Object.defineProperty(exports, "getHash", ({ enumerable: true, get: function () { return getHash_1.getHash; } }));
var mkdirp_1 = __webpack_require__(/*! ./mkdirp */ "./build/src/utils/mkdirp.js");
Object.defineProperty(exports, "sync", ({ enumerable: true, get: function () { return mkdirp_1.sync; } }));
var perSeconds_1 = __webpack_require__(/*! ./perSeconds */ "./build/src/utils/perSeconds.js");
Object.defineProperty(exports, "perSeconds", ({ enumerable: true, get: function () { return perSeconds_1.perSeconds; } }));
var proxies_1 = __webpack_require__(/*! ./proxies */ "./build/src/utils/proxies/index.js");
Object.defineProperty(exports, "axiosConsoleLogHashesProxyHandler", ({ enumerable: true, get: function () { return proxies_1.axiosConsoleLogHashesProxyHandler; } }));
Object.defineProperty(exports, "axiosProxyFactory", ({ enumerable: true, get: function () { return proxies_1.axiosProxyFactory; } }));
Object.defineProperty(exports, "ProxyReflexionLoggerFunctionHandler", ({ enumerable: true, get: function () { return proxies_1.ProxyReflexionLoggerFunctionHandler; } }));
var timeutil_1 = __webpack_require__(/*! ./timeutil */ "./build/src/utils/timeutil.js");
Object.defineProperty(exports, "dateNowISO", ({ enumerable: true, get: function () { return timeutil_1.dateNowISO; } }));
Object.defineProperty(exports, "dateNowNumeric", ({ enumerable: true, get: function () { return timeutil_1.dateNowNumeric; } }));
Object.defineProperty(exports, "dateRange", ({ enumerable: true, get: function () { return timeutil_1.dateRange; } }));
Object.defineProperty(exports, "dateRangeFromNow", ({ enumerable: true, get: function () { return timeutil_1.dateRangeFromNow; } }));
Object.defineProperty(exports, "dateToISOString", ({ enumerable: true, get: function () { return timeutil_1.dateToISOString; } }));
Object.defineProperty(exports, "dateToNumeric", ({ enumerable: true, get: function () { return timeutil_1.dateToNumeric; } }));
Object.defineProperty(exports, "day", ({ enumerable: true, get: function () { return timeutil_1.day; } }));
Object.defineProperty(exports, "endpointFormatDateTool", ({ enumerable: true, get: function () { return timeutil_1.endpointFormatDateTool; } }));
Object.defineProperty(exports, "setDateRange", ({ enumerable: true, get: function () { return timeutil_1.setDateRange; } }));
var log = console.log;
exports.log = log;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./build/src/utils/mkdirp.js":
/*!***********************************!*\
  !*** ./build/src/utils/mkdirp.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// tslint:disable: no-bitwise
// tslint:disable: no-parameter-reassignment
// tslint:disable: interface-name
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sync = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var fs_1 = tslib_1.__importDefault(__webpack_require__(/*! fs */ "?65c5"));
var path_1 = tslib_1.__importDefault(__webpack_require__(/*! path */ "?0f27"));
var _0777 = parseInt('0777', 8);
exports.sync = function (p, opts, made) {
    if (!opts || typeof opts !== 'object') {
        opts = { mode: opts };
    }
    var mode = opts.mode;
    var xfs = opts.fs || fs_1.default;
    if (!mode) {
        mode = _0777 & ~process.umask();
    }
    if (!made)
        made = null;
    p = path_1.default.resolve(p);
    try {
        xfs.mkdirSync(p, mode);
        made = made || p;
    }
    catch (err0) {
        switch (err0.code) {
            case 'ENOENT':
                made = exports.sync(path_1.default.dirname(p), opts, made);
                exports.sync(p, opts, made);
                break;
            // In the case of whichever error, just see if there's a dir
            // there already.  If so, then hooray!  If not, then something
            // is borked.
            default:
                var stat = void 0;
                try {
                    stat = xfs.statSync(p);
                }
                catch (err1) {
                    throw err0;
                }
                if (!stat.isDirectory())
                    throw err0;
                break;
        }
    }
    return made;
};
/*
Copyright 2010 James Halliday (mail@substack.net)

This project is free software released under the MIT/X11 license:

Permission is hereby granted, free of charge, to whichever person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
// https://github.com/substack/node-mkdirp#readme
//# sourceMappingURL=mkdirp.js.map

/***/ }),

/***/ "./build/src/utils/perSeconds.js":
/*!***************************************!*\
  !*** ./build/src/utils/perSeconds.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * As per this function definition 0 hz will be equivalent to 1000 hz
 * Will return a non negative value delay = delay < 0 ? -(delay) : +(delay);
 * @return {number} delay in mili seconds = !!hz ? (1000 / hz) : 1000
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.perSeconds = void 0;
exports.perSeconds = function (hertz) {
    var delay = hertz;
    // non zero
    // as per this definition
    // 0 hz is equivalent to 1000 hz
    delay = 1000 / delay;
    delay = !!delay ? delay : 1000;
    // non negative
    delay = delay < 0 ? delay * -1 : delay;
    // When delay is larger than 2147483647 or less than 1,
    // the delay will be set to 1.
    // Non-integer delays are truncated to an integer.
    return delay;
};
//# sourceMappingURL=perSeconds.js.map

/***/ }),

/***/ "./build/src/utils/proxies/axios-console-log-hashes-handler-class.js":
/*!***************************************************************************!*\
  !*** ./build/src/utils/proxies/axios-console-log-hashes-handler-class.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.axiosConsoleLogHashesProxyHandler = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var __1 = __webpack_require__(/*! .. */ "./build/src/utils/index.js");
var axios_proxy_factory_1 = __webpack_require__(/*! ./axios-proxy-factory */ "./build/src/utils/proxies/axios-proxy-factory.js");
var proxy_reflexion_logger_function_handler_1 = __webpack_require__(/*! ./proxy-reflexion-logger-function-handler */ "./build/src/utils/proxies/proxy-reflexion-logger-function-handler.js");
var AxiosConsoleLogHashesHandlerClass = /** @class */ (function (_super) {
    tslib_1.__extends(AxiosConsoleLogHashesHandlerClass, _super);
    function AxiosConsoleLogHashesHandlerClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.proxy = {
            class: 'AxiosHandlerClass',
            extends: 'ProxyReflexionLoggerFunctionHandler<AxiosStatic>',
            implements: 'ProxyHandler<AxiosStatic>',
        };
        return _this;
    }
    AxiosConsoleLogHashesHandlerClass.prototype.apply = function (target, thisArg, argArray) {
        var _a;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var returnValue, urlPath, data, _b, _c, _d, proxyData;
            return tslib_1.__generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        returnValue = Reflect.apply(target, thisArg, argArray);
                        urlPath = __1.getQtUrlPathFromArgs(argArray);
                        _b = "";
                        _d = (_c = JSON).stringify;
                        return [4 /*yield*/, returnValue];
                    case 1:
                        data = _b + _d.apply(_c, [(_a = (_e.sent()).data) !== null && _a !== void 0 ? _a : null]);
                        proxyData = tslib_1.__assign({ proxy: tslib_1.__assign(tslib_1.__assign({}, this.proxy), { handlerMethod: 'async apply(target: AxiosStatic, thisArg: any, argArray?: any): Promise<any>', sideEffects: 'console.log' }), axiosConfig: argArray[0] }, __1.creatUrlAndDataHashes(urlPath, data));
                        // +SIDE EFFECTS ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――$>
                        console.log(proxyData);
                        // +RETURN VALUE ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――$>
                        return [2 /*return*/, returnValue];
                }
            });
        });
    };
    return AxiosConsoleLogHashesHandlerClass;
}(proxy_reflexion_logger_function_handler_1.ProxyReflexionLoggerFunctionHandler));
exports.axiosConsoleLogHashesProxyHandler = axios_proxy_factory_1.axiosProxyFactory(new AxiosConsoleLogHashesHandlerClass());
//# sourceMappingURL=axios-console-log-hashes-handler-class.js.map

/***/ }),

/***/ "./build/src/utils/proxies/axios-proxy-factory.js":
/*!********************************************************!*\
  !*** ./build/src/utils/proxies/axios-proxy-factory.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.axiosProxyFactory = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var axios_1 = tslib_1.__importDefault(__webpack_require__(/*! axios */ "./node_modules/axios/index.js"));
exports.axiosProxyFactory = function (handler) {
    return new Proxy(axios_1.default, handler);
};
//# sourceMappingURL=axios-proxy-factory.js.map

/***/ }),

/***/ "./build/src/utils/proxies/index.js":
/*!******************************************!*\
  !*** ./build/src/utils/proxies/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProxyReflexionLoggerFunctionHandler = exports.axiosProxyFactory = exports.axiosConsoleLogHashesProxyHandler = void 0;
var axios_console_log_hashes_handler_class_1 = __webpack_require__(/*! ./axios-console-log-hashes-handler-class */ "./build/src/utils/proxies/axios-console-log-hashes-handler-class.js");
Object.defineProperty(exports, "axiosConsoleLogHashesProxyHandler", ({ enumerable: true, get: function () { return axios_console_log_hashes_handler_class_1.axiosConsoleLogHashesProxyHandler; } }));
var axios_proxy_factory_1 = __webpack_require__(/*! ./axios-proxy-factory */ "./build/src/utils/proxies/axios-proxy-factory.js");
Object.defineProperty(exports, "axiosProxyFactory", ({ enumerable: true, get: function () { return axios_proxy_factory_1.axiosProxyFactory; } }));
var proxy_reflexion_logger_function_handler_1 = __webpack_require__(/*! ./proxy-reflexion-logger-function-handler */ "./build/src/utils/proxies/proxy-reflexion-logger-function-handler.js");
Object.defineProperty(exports, "ProxyReflexionLoggerFunctionHandler", ({ enumerable: true, get: function () { return proxy_reflexion_logger_function_handler_1.ProxyReflexionLoggerFunctionHandler; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./build/src/utils/proxies/proxy-reflexion-logger-function-handler.js":
/*!****************************************************************************!*\
  !*** ./build/src/utils/proxies/proxy-reflexion-logger-function-handler.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProxyReflexionLoggerFunctionHandler = void 0;
var ProxyReflexionLoggerFunctionHandler = /** @class */ (function () {
    function ProxyReflexionLoggerFunctionHandler() {
    }
    ProxyReflexionLoggerFunctionHandler.prototype.getPrototypeOf = function (target) {
        console.log('PROXY:', 'getPrototypeOf', 'target:', target);
        return Reflect.getPrototypeOf(target);
    };
    ProxyReflexionLoggerFunctionHandler.prototype.setPrototypeOf = function (target, v) {
        console.log('PROXY:', 'setPrototypeOf', 'target', target, 'v', v);
        return Reflect.setPrototypeOf(target, v);
    };
    ProxyReflexionLoggerFunctionHandler.prototype.isExtensible = function (target) {
        console.log('PROXY:', 'isExtensible', 'target', target);
        return Reflect.isExtensible(target);
    };
    ProxyReflexionLoggerFunctionHandler.prototype.preventExtensions = function (target) {
        console.log('PROXY:', 'preventExtensions', 'target', target);
        return Reflect.preventExtensions(target);
    };
    ProxyReflexionLoggerFunctionHandler.prototype.getOwnPropertyDescriptor = function (target, p) {
        console.log('PROXY:', 'getOwnPropertyDescriptor', 'target', target, 'p', p);
        return Reflect.getOwnPropertyDescriptor(target, p);
    };
    ProxyReflexionLoggerFunctionHandler.prototype.has = function (target, p) {
        console.log('PROXY:', 'has', 'target', target, 'p', p);
        return Reflect.has(target, p);
    };
    ProxyReflexionLoggerFunctionHandler.prototype.get = function (target, p, receiver) {
        console.log('PROXY:', 'get', 'target', target, 'p', p, 'receiver', receiver);
        return Reflect.get(target, p, receiver);
    };
    ProxyReflexionLoggerFunctionHandler.prototype.set = function (target, p, value, receiver) {
        console.log('PROXY:', 'set', 'target', target, 'p', p, 'value', value, 'receiver', receiver);
        return Reflect.set(target, p, value, receiver);
    };
    ProxyReflexionLoggerFunctionHandler.prototype.deleteProperty = function (target, p) {
        console.log('PROXY:', 'deleteProperty', 'target', target, 'p', p);
        return Reflect.deleteProperty(target, p);
    };
    ProxyReflexionLoggerFunctionHandler.prototype.defineProperty = function (target, p, attributes) {
        console.log('PROXY:', 'defineProperty', 'target', target, 'p', p, 'attributes', attributes);
        return Reflect.defineProperty(target, p, attributes);
    };
    ProxyReflexionLoggerFunctionHandler.prototype.ownKeys = function (target) {
        console.log('PROXY:', 'ownKeys', 'target', target);
        return Reflect.ownKeys(target);
    };
    ProxyReflexionLoggerFunctionHandler.prototype.apply = function (target, thisArg, argArray) {
        console.log('PROXY:', 'apply', 'target', target, 'thisArg', thisArg, 'argArray', argArray);
        return Reflect.apply(target, thisArg, argArray);
    };
    ProxyReflexionLoggerFunctionHandler.prototype.construct = function (target, argArray, newTarget) {
        console.log('PROXY:', 'construct', 'target', target, 'argArray', argArray, 'newTarget', newTarget);
        return Reflect.construct(target, argArray, newTarget);
    };
    return ProxyReflexionLoggerFunctionHandler;
}());
exports.ProxyReflexionLoggerFunctionHandler = ProxyReflexionLoggerFunctionHandler;
/*


  + Terminologie

  # gestionnaire (handler)
  Un objet qui contient les trappes qui intercepteront les opérations.

  # trappes
  Les méthodes qui fournissent l'accès aux propriétés. Ce concept est analogue
  aux trappes utilisées dans les systèmes d'exploitations.

  # cible
  L'objet virtualisé par le proxy. Il est souvent utilisé comme objet de
  stockage. Les invariants (c'est-à-dire les éléments de sémantique qui restent
  inchangés) relatifs à la non-extensibilité et au caractère non-configurable
  des propriétés sont vérifiés par rapport à la cible.

  +Syntaxe
  * var p = new Proxy(cible, gestionnaire);

  + Paramètres

  # cible
  Une cible (qui peut être n'importe quel objet, un tableau, une fonction,
  ou même un autre proxy) qu'on souhaite envelopper dans un Proxy.

  # gestionnaire
  Un objet dont les propriétés sont des fonctions qui définissent le
  comportement du proxy lorsqu'on utilise une opération sur celui-ci.

  +Méthodes
  $> Permet de créer un objet Proxy révocable:
  |> Proxy.revocable()

  +Méthodes pour le gestionnaire
  L'objet utilisé comme gestionnaire regroupe les différentes fonctions
  « trappes » pour le Proxy.

  Toutes ces trappes sont optionnelles. Si une trappe n'a pas été définie,
  le comportement par défaut sera de transmettre l'opération à la cible.


  $> Une trappe pour Object.getPrototypeOf:
  |> handler.getPrototypeOf()

  $> Une trappe pour Object.setPrototypeOf:
  |> handler.setPrototypeOf()

  $> Une trappe pour Object.isExtensible:
  |> handler.isExtensible()

  $> Une trappe pour Object.preventExtensions:
  |> handler.preventExtensions()

  $> Une trappe pour Object.getOwnPropertyDescriptor:
  |> handler.getOwnPropertyDescriptor()

  $> Une trappe pour Object.defineProperty:
  |> handler.defineProperty()

  $> Une trappe pour l'opérateur in:
  |> handler.has()

  $> Une trappe pour l'accès aux valeurs des propriétés:
  |> handler.get()

  $> Une trappe pour la définition des valeurs des propriétés:
  |> handler.set()

  $> Une trappe pour l'opérateur delete:
  |> handler.deleteProperty()

  $> Une trappe pour Object.getOwnPropertyNames et Object.getOwnPropertySymbols:
  |> handler.ownKeys()

  $> Une trappe pour l'appel d'une fonction:
  |> handler.apply()

  $> Une trappe pour l'opérateur new:
  |> handler.construct()

  Certaines trappes non standards sont désormais obsolètes et ont été supprimées.



*/
//# sourceMappingURL=proxy-reflexion-logger-function-handler.js.map

/***/ }),

/***/ "./build/src/utils/timeutil.js":
/*!*************************************!*\
  !*** ./build/src/utils/timeutil.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setDateRange = exports.dateRange = exports.dateRangeFromNow = exports.dateToNumeric = exports.dateToISOString = exports.dateNowNumeric = exports.dateNowISO = exports.endpointFormatDateTool = exports.day = void 0;
var DAY = 24 * 60 * 60 * 1000;
exports.day = function (days) { return days * DAY; };
// export function timeUtil() {
//   //
// }
// let startDate = '2019-08-25';
// let endDate = '2019-09-14T00:00:00.000000-05:00';
// const now = Date.now;
// export const dates = [
//   startDate,
//   new Date(now()).toISOString(),
//   new Date(now()).toUTCString(),
//   new Date(now()).toString(),
//   new Date(now()).toLocaleString(),
//   new Date(now()).toJSON(),
//   new Date(startDate).toISOString(),
//   new Date(startDate).toUTCString(),
//   new Date(endDate).toString(),
//   new Date(startDate).toLocaleString(),
//   new Date(startDate).toJSON(),
// ];
// const offset = 9;
// startDate = `2019-${offset}-13`;
// endDate = `2019-${offset}-14`;
exports.endpointFormatDateTool = function (startTime, endTime) {
    return "startTime=" + exports.dateToISOString(startTime) + "&endTime=" + exports.dateToISOString(endTime);
};
exports.dateNowISO = function () { return new Date(Date.now()).toISOString(); };
exports.dateNowNumeric = function () { return new Date(Date.now()).getTime(); };
exports.dateToISOString = function (dateTime) {
    return new Date(dateTime).toISOString();
};
exports.dateToNumeric = function (dateTime) {
    return new Date(dateTime).getTime();
};
exports.dateRangeFromNow = function (backNumberOfDays) {
    var back = Math.floor(backNumberOfDays);
    var numberOfDays = back < 0 ? back * -1 : back;
    return exports.dateRange(numberOfDays, exports.dateNowISO());
};
exports.dateRange = function (backNumberOfDays, dateNow) {
    var now = dateNow;
    if (!now) {
        now = exports.dateNowISO();
    }
    var startDate = rmvMiliSec(exports.dateToNumeric(now) - exports.day(backNumberOfDays));
    var endDate = rmvMiliSec(now);
    var startTime = startDate;
    var endTime = endDate;
    return {
        startDate: startDate,
        startTime: startTime,
        endDate: endDate,
        endTime: endTime,
    };
};
var rmvMiliSec = function (date) {
    var floor = Math.floor;
    return exports.dateToISOString(floor(exports.dateToNumeric(date) / 1000) * 1000);
};
exports.setDateRange = function (backNumberOfDays) { return function (funct, fromDate) {
    var _a = exports.dateRange(backNumberOfDays, fromDate), startTime = _a.startTime, endTime = _a.endTime;
    return funct(startTime)(endTime);
}; };
// export const rangeTool = (startTime?: string | null) => (
//   endTime?: string | null
// ) => (numberOfDays?: number | null) => {
//   const days = !!numberOfDays ? numberOfDays : 0;
//   const endValue = !endTime ? dateNumericNow() : dateToNumeric(endTime);
//   const startValue = !startTime ? dateNumericNow() : dateToNumeric(startTime);
//   return [dateToString(endValue), dateToString(startValue + day(days))];
// };
// const naiveCalculate = (SECOND: number = 1000) => {
//   const DAY = 24 * 60 * 60 * SECOND;
//   return {
//     SECOND,
//     HOUR: 60 * 60 * SECOND,
//     MINUTE: 60 * SECOND,
//     DAY,
//     WEEK5: 5 * DAY,
//     WEEK7: 7 * DAY,
//     MONTH: 31 * DAY,
//     MONTH28: 28 * DAY,
//     MONTH29: 29 * DAY,
//     MONTH30: 30 * DAY,
//     YEAR: 365 * DAY,
//     YEAR366: 366 * DAY,
//     yWEEKS: 52,
//     yMONTHS: 12,
//   };
// };
// export const naive = {
//   inSec: naiveCalculate(1),
//   inMiliSec: naiveCalculate(1000),
// };
// export const naiveSecondes = naive(1);
// export const naiveMiliSecondes = naive(1000);
// endpointFormatDateTool(startTime, endTime);
// import { questrade } from "../../classes/questradeBase";
// questrade("0I55OUTM7zHQZbG9AiwA5vY3zQY6W6qt0").then(
//   async will => console.log(will)
// await will.get.orders(startDate, endDate)(), // .reduce(
// will.get.current.accountNumber(),
// will.get.markets
// await will.get.supported.markets(),
// await will.get.market.quotes([9292, 9292])
// (pre: number, curent, _index) =>
// console.log("\n", each.description, "\n")
// {
//   const void0: unknown =
//   if (!!curent.commission.valueOf()) console.log(curent.commission);
//   return curent.commission + pre;
//  },
// 0
// ()
// );
// );
// date :
// day
// month
// year
// 2014-01-02T00:00:00.000000-05:00
// 2019-09-14T09:07:37.461Z
//# sourceMappingURL=timeutil.js.map

/***/ }),

/***/ "./build/src/utils/void0.js":
/*!**********************************!*\
  !*** ./build/src/utils/void0.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.void0 = void 0;
var utils_1 = __webpack_require__(/*! ../utils */ "./build/src/utils/index.js");
function void0() {
    var arg0 = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg0[_i] = arguments[_i];
    }
    utils_1.id0(arg0);
    return void 0;
}
exports.void0 = void0;
//# sourceMappingURL=void0.js.map

/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "./node_modules/axios/lib/core/buildFullPath.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

// Expose isAxiosError
axios.isAxiosError = __webpack_require__(/*! ./helpers/isAxiosError */ "./node_modules/axios/lib/helpers/isAxiosError.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/***/ ((module) => {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/***/ ((module) => {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
  var defaultToConfig2Keys = [
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
    'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'
  ];
  var directMergeKeys = ['validateStatus'];

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  }

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  utils.forEach(directMergeKeys, function merge(prop) {
    if (prop in config2) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys)
    .concat(directMergeKeys);

  var otherKeys = Object
    .keys(config1)
    .concat(Object.keys(config2))
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, mergeDeepProperties);

  return config;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;


/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/***/ ((module) => {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAxiosError.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAxiosError.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
module.exports = function isAxiosError(payload) {
  return (typeof payload === 'object') && (payload.isAxiosError === true);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};


/***/ }),

/***/ "./node_modules/dotenv/lib/main.js":
/*!*****************************************!*\
  !*** ./node_modules/dotenv/lib/main.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* @flow */
/*::

type DotenvParseOptions = {
  debug?: boolean
}

// keys and values from src
type DotenvParseOutput = { [string]: string }

type DotenvConfigOptions = {
  path?: string, // path to .env file
  encoding?: string, // encoding of .env file
  debug?: string // turn on logging for debugging purposes
}

type DotenvConfigOutput = {
  parsed?: DotenvParseOutput,
  error?: Error
}

*/

const fs = __webpack_require__(/*! fs */ "?65c5")
const path = __webpack_require__(/*! path */ "?0f27")

function log (message /*: string */) {
  console.log(`[dotenv][DEBUG] ${message}`)
}

const NEWLINE = '\n'
const RE_INI_KEY_VAL = /^\s*([\w.-]+)\s*=\s*(.*)?\s*$/
const RE_NEWLINES = /\\n/g
const NEWLINES_MATCH = /\n|\r|\r\n/

// Parses src into an Object
function parse (src /*: string | Buffer */, options /*: ?DotenvParseOptions */) /*: DotenvParseOutput */ {
  const debug = Boolean(options && options.debug)
  const obj = {}

  // convert Buffers before splitting into lines and processing
  src.toString().split(NEWLINES_MATCH).forEach(function (line, idx) {
    // matching "KEY' and 'VAL' in 'KEY=VAL'
    const keyValueArr = line.match(RE_INI_KEY_VAL)
    // matched?
    if (keyValueArr != null) {
      const key = keyValueArr[1]
      // default undefined or missing values to empty string
      let val = (keyValueArr[2] || '')
      const end = val.length - 1
      const isDoubleQuoted = val[0] === '"' && val[end] === '"'
      const isSingleQuoted = val[0] === "'" && val[end] === "'"

      // if single or double quoted, remove quotes
      if (isSingleQuoted || isDoubleQuoted) {
        val = val.substring(1, end)

        // if double quoted, expand newlines
        if (isDoubleQuoted) {
          val = val.replace(RE_NEWLINES, NEWLINE)
        }
      } else {
        // remove surrounding whitespace
        val = val.trim()
      }

      obj[key] = val
    } else if (debug) {
      log(`did not match key and value when parsing line ${idx + 1}: ${line}`)
    }
  })

  return obj
}

// Populates process.env from .env file
function config (options /*: ?DotenvConfigOptions */) /*: DotenvConfigOutput */ {
  let dotenvPath = path.resolve(process.cwd(), '.env')
  let encoding /*: string */ = 'utf8'
  let debug = false

  if (options) {
    if (options.path != null) {
      dotenvPath = options.path
    }
    if (options.encoding != null) {
      encoding = options.encoding
    }
    if (options.debug != null) {
      debug = true
    }
  }

  try {
    // specifying an encoding returns a string instead of a buffer
    const parsed = parse(fs.readFileSync(dotenvPath, { encoding }), { debug })

    Object.keys(parsed).forEach(function (key) {
      if (!Object.prototype.hasOwnProperty.call(process.env, key)) {
        process.env[key] = parsed[key]
      } else if (debug) {
        log(`"${key}" is already defined in \`process.env\` and will not be overwritten`)
      }
    })

    return { parsed }
  } catch (e) {
    return { error: e }
  }
}

module.exports.config = config
module.exports.parse = parse


/***/ }),

/***/ "./node_modules/questrade-api-enumerations/qtEnumerations.js":
/*!*******************************************************************!*\
  !*** ./node_modules/questrade-api-enumerations/qtEnumerations.js ***!
  \*******************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__("./node_modules/questrade-api-enumerations sync recursive"), exports);
        if (v !== undefined) module.exports = v;
    }
    else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    /** Specifies all supported currency codes. */
    /*
    Currency
    The following table specifies all supported currency codes.
    
    Type	Description
    USD	US dollar.
    CAD	Canadian dollar.
    */
    var Currency;
    (function (Currency) {
        /** US dollar. */
        Currency["USD"] = "USD";
        /** Canadian dollar. */
        Currency["CAD"] = "CAD";
    })(Currency = exports.Currency || (exports.Currency = {}));
    /** Specifies all supported listing exchanges. */
    /*
    Listing Exchange
    The following table specifies all supported listing exchanges.
    
    Type	Description
    TSX	Toronto Stock Exchange.
    TSXV	Toronto Venture Exchange.
    CNSX	Canadian National Stock Exchange.
    MX	Montreal Exchange.
    NASDAQ	NASDAQ.
    NYSE	New York Stock Exchange.
    NYSEAM	NYSE AMERICAN
    ARCA	NYSE Arca.
    OPRA	Option Reporting Authority.
    PinkSheets	Pink Sheets.
    OTCBB	OTC Bulletin Board.
    */
    var ListingExchange;
    (function (ListingExchange) {
        /** Toronto Stock Exchange. */
        ListingExchange["TSX"] = "TSX";
        /** Toronto Venture Exchange. */
        ListingExchange["TSXV"] = "TSXV";
        /** Canadian National Stock Exchange. */
        ListingExchange["CNSX"] = "CNSX";
        /** Montreal Exchange. */
        ListingExchange["MX"] = "MX";
        /** NASDAQ. */
        ListingExchange["NASDAQ"] = "NASDAQ";
        /** New York Stock Exchange. */
        ListingExchange["NYSE"] = "NYSE";
        /** NYSE AMERICAN */
        ListingExchange["NYSEAM"] = "NYSEAM";
        /** NYSE Arca. */
        ListingExchange["ARCA"] = "ARCA";
        /** Option Reporting Authority. */
        ListingExchange["OPRA"] = "OPRA";
        /** Pink Sheets. */
        ListingExchange["PinkSheets"] = "PinkSheets";
        /** OTC Bulletin Board. */
        ListingExchange["OTCBB"] = "OTCBB";
    })(ListingExchange = exports.ListingExchange || (exports.ListingExchange = {}));
    /** Specifies all supported user account types. */
    /*
    The following table specifies all supported user account types.
    
    Type	Description
    Cash	Cash account.
    Margin	Margin account.
    TFSA	Tax Free Savings Account.
    RRSP	Registered Retirement Savings Plan.
    SRRSP	Spousal RRSP.
    LRRSP	Locked-In RRSP.
    LIRA	Locked-In Retirement Account.
    LIF	Life Income Fund.
    RIF	Retirement Income Fund.
    SRIF	Spousal RIF.
    LRIF	Locked-In RIF.
    RRIF	Registered RIF.
    PRIF	Prescribed RIF.
    RESP	Individual Registered Education Savings Plan.
    FRESP	Family RESP. */
    var AccountType;
    (function (AccountType) {
        /** Cash account. */
        AccountType["CASH"] = "Cash";
        /** Margin account. */
        AccountType["MARGIN"] = "Margin";
        /** Tax Free Savings Account. */
        AccountType["TFSA"] = "TFSA";
        /** Registered Retirement Savings Plan. */
        AccountType["RRSP"] = "RRSP";
        /** Spousal RRSP. */
        AccountType["SRRSP"] = "SRRSP";
        /** Locked-In RRSP. */
        AccountType["LRRSP"] = "LRRSP";
        /** Locked-In Retirement Account. */
        AccountType["LIRA"] = "LIRA";
        /** Life Income Fund. */
        AccountType["LIF"] = "LIF";
        /** Retirement Income Fund. */
        AccountType["RIF"] = "RIF";
        /** Spousal RIF. */
        AccountType["SRIF"] = "SRIF";
        /** Locked-In RIF. */
        AccountType["LRIF"] = "LRIF";
        /** Registered RIF. */
        AccountType["RRIF"] = "RRIF";
        /** Prescribed RIF. */
        AccountType["PRIF"] = "PRIF";
        /** Individual Registered Education Savings Plan. */
        AccountType["RESP"] = "RESP";
        /** Family RESP. */
        AccountType["FRESP"] = "FRESP";
    })(AccountType = exports.AccountType || (exports.AccountType = {}));
    /** Specifies all supported account client types. */
    /*
    Client Account Type
    The following table specifies all supported account client types.
    
    Type	Description
    Individual	Account held by an individual.
    Joint	Account held jointly by several individuals (e.g., spouses).
    Informal Trust	Non-individual account held by an informal trust.
    Corporation	Non-individual account held by a corporation.
    Investment Club	Non-individual account held by an investment club.
    Formal Trust	Non-individual account held by a formal trust.
    Partnership	Non-individual account held by a partnership.
    Sole Proprietorship	Non-individual account held by a sole proprietorship.
    Family	Account held by a family.
    Joint and Informal Trust	Non-individual account held by
    a joint and informal trust.
    
    Institution	Non-individual account held by an institution.
    */
    var ClientAccountType;
    (function (ClientAccountType) {
        /** Account held by an individual. */
        ClientAccountType["INDIVIDUAL"] = "Individual";
        /** Account held jointly by several individuals (e.g., spouses). */
        ClientAccountType["JOINT"] = "Joint";
        /** Non-individual account held by an informal trust. */
        ClientAccountType["INFORMAL_TRUST"] = "Informal Trust";
        /** Non-individual account held by a corporation. */
        ClientAccountType["CORPORATION"] = "Corporation";
        /** Non-individual account held by an investment club. */
        ClientAccountType["INVESTMENT_CLUB"] = "Investment Club";
        /** Non-individual account held by a formal trust. */
        ClientAccountType["FORMAL_TRUST"] = "Formal Trust";
        /** Non-individual account held by a partnership. */
        ClientAccountType["PARTNERSHIP"] = "Partnership";
        /** Non-individual account held by a sole proprietorship. */
        ClientAccountType["SOLE_PROPRIETORSHIP"] = "Sole Proprietorship";
        /** Account held by a family. */
        ClientAccountType["FAMILY"] = "Family";
        /** Non-individual account held by a joint and informal trust. */
        ClientAccountType["JOINT_AND_INFORMAL_TRUST"] = "Joint and Informal Trust";
        /** Non-individual account held by an institution. */
        ClientAccountType["INSTITUTION"] = "Institution";
    })(ClientAccountType = exports.ClientAccountType || (exports.ClientAccountType = {}));
    /** Specifies all supported account status values. */
    /*
    Account Status
    The following table specifies all supported account status values.
    
    Type
    Active
    Suspended (Closed)
    Suspended (View Only)
    Liquidate Only
    Closed
    */
    var AccountStatus;
    (function (AccountStatus) {
        /** Active */
        AccountStatus["ACTIVE"] = "Active";
        /** Suspended (Closed) */
        AccountStatus["SUSPENDED_CLOSED"] = "Suspended (Closed)";
        /** Suspended (View Only) */
        AccountStatus["SUSPENDED_VIEW_ONLY"] = "Suspended (View Only)";
        /** Liquidate Only */
        AccountStatus["LIQUIDATE_ONLY"] = "Liquidate Only";
        /** Closed */
        AccountStatus["CLOSED"] = "Closed";
    })(AccountStatus = exports.AccountStatus || (exports.AccountStatus = {}));
    /** Specifies all supported market data tick types. */
    /*
    Tick Type
    The following table specifies all supported market data tick types.
    
    Type	Description
    Up	Designates an uptick.
    Down	Designates a downtick.
    Equal	Designates a tick that took place at the same price as a previous one.
    */
    var TickType;
    (function (TickType) {
        /** Designates an uptick. */
        TickType["UP"] = "Up";
        /** Designates a downtick. */
        TickType["DOWN"] = "Down";
        /** Designates a tick that took place at the same price as a previous one. */
        TickType["EQUAL"] = "Equal";
    })(TickType = exports.TickType || (exports.TickType = {}));
    /** Specifies all supported option types. */
    /*
    Option Type
    The following table specifies all supported option types.
    
    Type	Description
    Call	Call option.
    Put	Put option.
    */
    var OptionType;
    (function (OptionType) {
        /** Call option. */
        OptionType["CALL"] = "Call";
        /** Put option. */
        OptionType["PUT"] = "Put";
    })(OptionType = exports.OptionType || (exports.OptionType = {}));
    /** Specifies all supported option duration types. */
    /*
    Option Duration Type
    The following table specifies all supported option duration types.
    
    Type	Description
    Weekly	Weekly expiry cycle.
    Monthly	Monthly expiry cycle.
    Quarterly	Quarterly expiry cycle.
    LEAP	Long-term Equity Appreciation contracts.
    */
    var OptionDurationType;
    (function (OptionDurationType) {
        /** Weekly expiry cycle. */
        OptionDurationType["WEEKLY"] = "Weekly";
        /** Monthly expiry cycle. */
        OptionDurationType["MONTHLY"] = "Monthly";
        /** Quarterly expiry cycle. */
        OptionDurationType["QUARTERLY"] = "Quarterly";
        /** Long-term Equity Appreciation contracts. */
        OptionDurationType["LEAP"] = "LEAP";
    })(OptionDurationType = exports.OptionDurationType || (exports.OptionDurationType = {}));
    /** Specifies all supported option exercise types. */
    /*
    Option Exercise Type
    The following table specifies all supported option exercise types.
    
    Type	Description
    American	American option.
    European	European option.
    */
    var OptionExerciseType;
    (function (OptionExerciseType) {
        /** American option. */
        OptionExerciseType["AMERICAN"] = "American";
        /** European option. */
        OptionExerciseType["EUROPEAN"] = "European";
    })(OptionExerciseType = exports.OptionExerciseType || (exports.OptionExerciseType = {}));
    /** Specifies all supported security types. */
    /*
    Security Type
    The following table specifies all supported security types.
    
    Type	Description
    Stock	Common and preferred equities, ETFs, ETNs, units, ADRs, etc.
    Option	Equity and index options.
    Bond	Debentures, notes, bonds, both corporate and government.
    Right	Equity or bond rights and warrants.
    Gold	Physical gold (coins, wafers, bars).
    MutualFund	Canadian or US mutual funds.
    Index	Stock indices (e.g., Dow Jones).
    */
    var SecurityType;
    (function (SecurityType) {
        /** Common and preferred equities, ETFs, ETNs, units, ADRs, etc. */
        SecurityType["STOCK"] = "Stock";
        /** Equity and index options. */
        SecurityType["OPTION"] = "Option";
        /** Debentures, notes, bonds, both corporate and government. */
        SecurityType["BOND"] = "Bond";
        /** Equity or bond rights and warrants. */
        SecurityType["RIGHT"] = "Right";
        /** Physical gold (coins, wafers, bars). */
        SecurityType["GOLD"] = "Gold";
        /** Canadian or US mutual funds. */
        SecurityType["MUTUALFUND"] = "MutualFund";
        /** Stock indices (e.g., Dow Jones). */
        SecurityType["INDEX"] = "Index";
    })(SecurityType = exports.SecurityType || (exports.SecurityType = {}));
    /** Specifies all supported order state filter types. */
    /*
    Order State Filter Type
    The following table specifies all supported order state filter types.
    
    Type	Description
    All	Includes all orders, regardless of their state.
    Open	Includes only orders that are still open.
    Closed	Includes only orders that are already closed.
    */
    var OrderStateFilterType;
    (function (OrderStateFilterType) {
        /** Includes all orders, regardless of their state. */
        OrderStateFilterType["ALL"] = "All";
        /** Includes only orders that are still open. */
        OrderStateFilterType["OPEN"] = "Open";
        /** Includes only orders that are already closed. */
        OrderStateFilterType["CLOSED"] = "Closed";
    })(OrderStateFilterType = exports.OrderStateFilterType || (exports.OrderStateFilterType = {}));
    /** Specifies all supported order side values. */
    /*
    Order Action
    The following table specifies all supported order side values.
    
    Type	Description
    Buy	Designates an order to purchase a security.
    Sell	Designates an order to dispose a security.
    */
    var OrderAction;
    (function (OrderAction) {
        /** Designates an order to purchase a security. */
        OrderAction["BUY"] = "Buy";
        /** Designates an order to dispose a security. */
        OrderAction["SELL"] = "Sell";
    })(OrderAction = exports.OrderAction || (exports.OrderAction = {}));
    /** Specifies all supported client order side values. */
    /*
    Order Side
    The following table specifies all supported client order side values.
    
    Type	Description
    Buy	Buy
    Sell	Sell
    Short	Sell short.
    Cov	Cover the short.
    BTO	Buy-To-Open.
    STC	Sell-To-Close.
    STO	Sell-To-Open.
    BTC	Buy-To-Close.
    */
    var OrderSide;
    (function (OrderSide) {
        /** Buy */
        OrderSide["BUY"] = "Buy";
        /** Sell */
        OrderSide["SELL"] = "Sell";
        /** Sell short. */
        OrderSide["SHORT"] = "Short";
        /** Cover the short. */
        OrderSide["COV"] = "Cov";
        /** Buy-To-Open. */
        OrderSide["BTO"] = "BTO";
        /** Sell-To-Close. */
        OrderSide["STC"] = "STC";
        /** Sell-To-Open. */
        OrderSide["STO"] = "STO";
        /** Buy-To-Close. */
        OrderSide["BTC"] = "BTC";
    })(OrderSide = exports.OrderSide || (exports.OrderSide = {}));
    /** Specifies all supported order types. */
    /*
    Order Type
    The following table specifies all supported order types.
    
    Type
    Market
    Limit
    Stop
    StopLimit
    TrailStopInPercentage
    TrailStopInDollar
    TrailStopLimitInPercentage
    TrailStopLimitInDollar
    LimitOnOpen
    LimitOnClose
    */
    var OrderType;
    (function (OrderType) {
        /** Market */
        OrderType["MARKET"] = "Market";
        /** Limit */
        OrderType["LIMIT"] = "Limit";
        /** Stop */
        OrderType["STOP"] = "Stop";
        /** StopLimit */
        OrderType["STOP_LIMIT"] = "StopLimit";
        /** Trail Stop In Percentage */
        OrderType["TRAIL_STOPIN_PERCENTAGE"] = "TrailStopInPercentage";
        /** Trail Stop In Dollar */
        OrderType["TRAIL_STOP_IN_DOLLAR"] = "TrailStopInDollar";
        /** Trail Stop Limit In Percentage */
        OrderType["TRAIL_STOP_LIMIT_IN_PERCENTAGE"] = "TrailStopLimitInPercentage";
        /** Trail Stop Limit In Dollar */
        OrderType["TRAIL_STOP_LIMIT_IN_DOLLAR"] = "TrailStopLimitInDollar";
        /** Limit On Open */
        OrderType["LIMIT_ON_OPEN"] = "LimitOnOpen";
        /** Limit On Close */
        OrderType["LIMIT_ON_CLOSE"] = "LimitOnClose";
    })(OrderType = exports.OrderType || (exports.OrderType = {}));
    /** Specifies all supported order Time-In-Force instructions. */
    /*
    Order Time-In-Force
    The following table specifies all supported order Time-In-Force instructions.
    
    Type
    Day
    GoodTillCanceled
    GoodTillExtendedDay
    GoodTillDate
    ImmediateOrCancel
    FillOrKill
    */
    var OrderTimeInForce;
    (function (OrderTimeInForce) {
        /** Day */
        OrderTimeInForce["DAY"] = "Day";
        /** Good Till Canceled */
        OrderTimeInForce["GOOD_TILL_CANCELED"] = "GoodTillCanceled";
        /** Good Till Extended Day */
        OrderTimeInForce["GOOD_TILL_EXTENDED_DAY"] = "GoodTillExtendedDay";
        /** Good Till Date */
        OrderTimeInForce["GOOD_TILL_DATE"] = "GoodTillDate";
        /** Immediate Or Cancel */
        OrderTimeInForce["IMMEDIATE_OR_CANCEL"] = "ImmediateOrCancel";
        /** Fill Or Kill */
        OrderTimeInForce["FILL_OR_KILL"] = "FillOrKill";
    })(OrderTimeInForce = exports.OrderTimeInForce || (exports.OrderTimeInForce = {}));
    /** Specifies all supported order states. */
    /*
    Order State
    The following table specifies all supported order states.
    
    Type
    Failed
    Pending
    Accepted
    Rejected
    CancelPending
    Canceled
    PartialCanceled
    Partial
    Executed
    ReplacePending
    Replaced
    Stopped
    Suspended
    Expired
    Queued
    Triggered
    Activated
    PendingRiskReview
    ContingentOrder
    */
    var OrderState;
    (function (OrderState) {
        /** Type */
        OrderState["TYPE"] = "Type";
        /** Failed */
        OrderState["FAILED"] = "Failed";
        /** Pending */
        OrderState["PENDING"] = "Pending";
        /** Accepted */
        OrderState["ACCEPTED"] = "Accepted";
        /** Rejected */
        OrderState["REJECTED"] = "Rejected";
        /** Cancel Pending */
        OrderState["CANCEL_PENDING"] = "CancelPending";
        /** Canceled */
        OrderState["CANCELED"] = "Canceled";
        /** Partial Canceled */
        OrderState["PARTIAL_CANCELED"] = "PartialCanceled";
        /** Partial */
        OrderState["PARTIAL"] = "Partial";
        /** Executed */
        OrderState["EXECUTED"] = "Executed";
        /** Replace Pending */
        OrderState["REPLACE_PENDING"] = "ReplacePending";
        /** Replaced */
        OrderState["REPLACED"] = "Replaced";
        /** Stopped */
        OrderState["STOPPED"] = "Stopped";
        /** Suspended */
        OrderState["SUSPENDED"] = "Suspended";
        /** Expired */
        OrderState["EXPIRED"] = "Expired";
        /** Queued */
        OrderState["QUEUED"] = "Queued";
        /** Triggered */
        OrderState["TRIGGERED"] = "Triggered";
        /** Activated */
        OrderState["ACTIVATED"] = "Activated";
        /** Pending Risk Review */
        OrderState["PENDING_RISK_REVIEW"] = "PendingRiskReview";
        /** Contingent Order */
        OrderState["CONTINGENT_ORDER"] = "ContingentOrder";
    })(OrderState = exports.OrderState || (exports.OrderState = {}));
    /** Specifies all supported order execution status values. */
    /*
    Historical Data Granularity
    The following table specifies all supported order execution status values.
    
    Type	Description
    OneMinute	One candlestick per 1 minute.
    TwoMinutes	One candlestick per 2 minutes.
    ThreeMinutes	One candlestick per 3 minutes.
    FourMinutes	One candlestick per 4 minutes.
    FiveMinutes	One candlestick per 5 minutes.
    TenMinutes	One candlestick per 10 minutes.
    FifteenMinutes	One candlestick per 15 minutes.
    TwentyMinutes	One candlestick per 20 minutes.
    HalfHour	One candlestick per 30 minutes.
    OneHour	One candlestick per 1 hour.
    TwoHours	One candlestick per 2 hours.
    FourHours	One candlestick per 4 hours.
    OneDay	One candlestick per 1 day.
    OneWeek	One candlestick per 1 week.
    OneMonth	One candlestick per 1 month.
    OneYear	One candlestick per 1 year.
    */
    var HistoricalDataGranularity;
    (function (HistoricalDataGranularity) {
        /** One candlestick per 1 minute. */
        HistoricalDataGranularity["ONEMINUTE"] = "OneMinute";
        /** One candlestick per 2 minutes. */
        HistoricalDataGranularity["TWOMINUTES"] = "TwoMinutes";
        /** One candlestick per 3 minutes. */
        HistoricalDataGranularity["THREEMINUTES"] = "ThreeMinutes";
        /** One candlestick per 4 minutes. */
        HistoricalDataGranularity["FOURMINUTES"] = "FourMinutes";
        /** One candlestick per 5 minutes. */
        HistoricalDataGranularity["FIVEMINUTES"] = "FiveMinutes";
        /** One candlestick per 10 minutes. */
        HistoricalDataGranularity["TENMINUTES"] = "TenMinutes";
        /** One candlestick per 15 minutes. */
        HistoricalDataGranularity["FIFTEENMINUTES"] = "FifteenMinutes";
        /** One candlestick per 20 minutes. */
        HistoricalDataGranularity["TWENTYMINUTES"] = "TwentyMinutes";
        /** One candlestick per 30 minutes. */
        HistoricalDataGranularity["HALFHOUR"] = "HalfHour";
        /** One candlestick per 1 hour. */
        HistoricalDataGranularity["ONEHOUR"] = "OneHour";
        /** One candlestick per 2 hours. */
        HistoricalDataGranularity["TWOHOURS"] = "TwoHours";
        /** One candlestick per 4 hours. */
        HistoricalDataGranularity["FOURHOURS"] = "FourHours";
        /** One candlestick per 1 day. */
        HistoricalDataGranularity["ONEDAY"] = "OneDay";
        /** One candlestick per 1 week. */
        HistoricalDataGranularity["ONEWEEK"] = "OneWeek";
        /** One candlestick per 1 month. */
        HistoricalDataGranularity["ONEMONTH"] = "OneMonth";
        /** One candlestick per 1 year. */
        HistoricalDataGranularity["ONEYEAR"] = "OneYear";
    })(HistoricalDataGranularity = exports.HistoricalDataGranularity || (exports.HistoricalDataGranularity = {}));
    /** Specifies all supported bracket order components. */
    /*
    Order Class
    The following table specifies all supported bracket order components.
    
    Type	Description
    Primary	Primary order
    Limit	Profit exit order
    StopLoss	Loss exit order
    */
    var OrderClass;
    (function (OrderClass) {
        /** Primary order */
        OrderClass["PRIMARY"] = "Primary";
        /** Profit exit order */
        OrderClass["LIMIT"] = "Limit";
        /** Loss exit order */
        OrderClass["STOPLOSS"] = "StopLoss";
    })(OrderClass = exports.OrderClass || (exports.OrderClass = {}));
    /** Supported types of strategies for multi-leg strategy orders. */
    /*
    Strategy Types
    The following types of strategies are supported for multi-leg strategy orders
    
    Type	Description
    CoveredCall	Covered Call
    MarriedPuts	Married Put
    VerticalCallSpread	Vertical Call
    VerticalPutSpread	Vertical Put
    CalendarCallSpread	Calendar Call
    CalendarPutSpread	Calendar Put
    DiagonalCallSpread	Diagonal Call
    DiagonalPutSpread	Diagonal Put
    Collar	Collar
    Straddle	Straddle
    Strangle	Strangle
    ButterflyCall	Butterfly Call
    ButterflyPut	Butterfly Put
    IronButterfly	Iron Butterfly
    CondorCall	Condor
    Custom	Custom, or user defined
    */
    var StrategyTypes;
    (function (StrategyTypes) {
        /** Covered Call. */
        StrategyTypes["COVEREDCALL"] = "CoveredCall";
        /** Married Put. */
        StrategyTypes["MARRIEDPUTS"] = "MarriedPuts";
        /** Vertical Call. */
        StrategyTypes["VERTICALCALLSPREAD"] = "VerticalCallSpread";
        /** Vertical Put. */
        StrategyTypes["VERTICALPUTSPREAD"] = "VerticalPutSpread";
        /** Calendar Call. */
        StrategyTypes["CALENDARCALLSPREAD"] = "CalendarCallSpread";
        /** Calendar Put. */
        StrategyTypes["CALENDARPUTSPREAD"] = "CalendarPutSpread";
        /** Diagonal Call. */
        StrategyTypes["DIAGONALCALLSPREAD"] = "DiagonalCallSpread";
        /** Diagonal Put. */
        StrategyTypes["DIAGONALPUTSPREAD"] = "DiagonalPutSpread";
        /** Collar. */
        StrategyTypes["COLLAR"] = "Collar";
        /** Straddle. */
        StrategyTypes["STRADDLE"] = "Straddle";
        /** Strangle. */
        StrategyTypes["STRANGLE"] = "Strangle";
        /** Butterfly Call. */
        StrategyTypes["BUTTERFLYCALL"] = "ButterflyCall";
        /** Butterfly Put. */
        StrategyTypes["BUTTERFLYPUT"] = "ButterflyPut";
        /** Iron Butterfly. */
        StrategyTypes["IRONBUTTERFLY"] = "IronButterfly";
        /** Condor. */
        StrategyTypes["CONDORCALL"] = "CondorCall";
        /** Custom, or user defined. */
        StrategyTypes["CUSTOM"] = "Custom";
    })(StrategyTypes = exports.StrategyTypes || (exports.StrategyTypes = {}));
    /**
     * Specifies all supported Questrade Developer Platform Enumertions Types
     * @see https://www.questrade.com/api/documentation/rest-operations/enumerations/enumerations
     */
    exports.qtEnumerations = {
        /** Specifies all supported currency codes. */
        Currency: Currency,
        /** Specifies all supported listing exchanges. */
        ListingExchange: ListingExchange,
        /** Specifies all supported user account types. */
        AccountType: AccountType,
        /** Specifies all supported account client types. */
        ClientAccountType: ClientAccountType,
        /** Specifies all supported account status values. */
        AccountStatus: AccountStatus,
        /** Specifies all supported market data tick types. */
        TickType: TickType,
        /** Specifies all supported option types. */
        OptionType: OptionType,
        /** Specifies all supported option duration types. */
        OptionDurationType: OptionDurationType,
        /** Specifies all supported option exercise types. */
        OptionExerciseType: OptionExerciseType,
        /** Specifies all supported security types. */
        SecurityType: SecurityType,
        /** Specifies all supported order state filter types. */
        OrderStateFilterType: OrderStateFilterType,
        /** Specifies all supported order side values. */
        OrderAction: OrderAction,
        /** Specifies all supported client order side values. */
        OrderSide: OrderSide,
        /** Specifies all supported order types. */
        OrderType: OrderType,
        /** Specifies all supported order Time-In-Force instructions. */
        OrderTimeInForce: OrderTimeInForce,
        /** Specifies all supported order states. */
        OrderState: OrderState,
        /** Specifies all supported order execution status values. */
        HistoricalDataGranularity: HistoricalDataGranularity,
        /** Specifies all supported bracket order components. */
        OrderClass: OrderClass,
        /** Supported types of strategies for multi-leg strategy orders. */
        StrategyTypes: StrategyTypes
    };
});
/**
 * @license MIT LICENSE
 *
 * @Copyright (c) 2019
 *
 * @author Benjamin Vincent Kasapoglu (Luxcium)
 *
 * Permission is hereby granted, free of charge, to all person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ALL KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ALL CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 *
 */
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXRFbnVtZXJhdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29yZS9lbnVtcy9xdEVudW1lcmF0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUFBLDhDQUE4QztJQUM5Qzs7Ozs7OztNQU9FO0lBQ0YsSUFBWSxRQUtYO0lBTEQsV0FBWSxRQUFRO1FBQ2xCLGlCQUFpQjtRQUNqQix1QkFBVyxDQUFBO1FBQ1gsdUJBQXVCO1FBQ3ZCLHVCQUFXLENBQUE7SUFDYixDQUFDLEVBTFcsUUFBUSxHQUFSLGdCQUFRLEtBQVIsZ0JBQVEsUUFLbkI7SUFFRCxpREFBaUQ7SUFDakQ7Ozs7Ozs7Ozs7Ozs7Ozs7TUFnQkU7SUFDRixJQUFZLGVBdUJYO0lBdkJELFdBQVksZUFBZTtRQUN6Qiw4QkFBOEI7UUFDOUIsOEJBQVcsQ0FBQTtRQUNYLGdDQUFnQztRQUNoQyxnQ0FBYSxDQUFBO1FBQ2Isd0NBQXdDO1FBQ3hDLGdDQUFhLENBQUE7UUFDYix5QkFBeUI7UUFDekIsNEJBQVMsQ0FBQTtRQUNULGNBQWM7UUFDZCxvQ0FBaUIsQ0FBQTtRQUNqQiwrQkFBK0I7UUFDL0IsZ0NBQWEsQ0FBQTtRQUNiLG9CQUFvQjtRQUNwQixvQ0FBaUIsQ0FBQTtRQUNqQixpQkFBaUI7UUFDakIsZ0NBQWEsQ0FBQTtRQUNiLGtDQUFrQztRQUNsQyxnQ0FBYSxDQUFBO1FBQ2IsbUJBQW1CO1FBQ25CLDRDQUF5QixDQUFBO1FBQ3pCLDBCQUEwQjtRQUMxQixrQ0FBZSxDQUFBO0lBQ2pCLENBQUMsRUF2QlcsZUFBZSxHQUFmLHVCQUFlLEtBQWYsdUJBQWUsUUF1QjFCO0lBRUQsa0RBQWtEO0lBQ2xEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7eUJBa0JxQjtJQUNyQixJQUFZLFdBK0JYO0lBL0JELFdBQVksV0FBVztRQUNyQixvQkFBb0I7UUFDcEIsNEJBQWEsQ0FBQTtRQUNiLHNCQUFzQjtRQUN0QixnQ0FBaUIsQ0FBQTtRQUNqQixnQ0FBZ0M7UUFDaEMsNEJBQWEsQ0FBQTtRQUNiLDBDQUEwQztRQUMxQyw0QkFBYSxDQUFBO1FBQ2Isb0JBQW9CO1FBQ3BCLDhCQUFlLENBQUE7UUFDZixzQkFBc0I7UUFDdEIsOEJBQWUsQ0FBQTtRQUNmLG9DQUFvQztRQUNwQyw0QkFBYSxDQUFBO1FBQ2Isd0JBQXdCO1FBQ3hCLDBCQUFXLENBQUE7UUFDWCw4QkFBOEI7UUFDOUIsMEJBQVcsQ0FBQTtRQUNYLG1CQUFtQjtRQUNuQiw0QkFBYSxDQUFBO1FBQ2IscUJBQXFCO1FBQ3JCLDRCQUFhLENBQUE7UUFDYixzQkFBc0I7UUFDdEIsNEJBQWEsQ0FBQTtRQUNiLHNCQUFzQjtRQUN0Qiw0QkFBYSxDQUFBO1FBQ2Isb0RBQW9EO1FBQ3BELDRCQUFhLENBQUE7UUFDYixtQkFBbUI7UUFDbkIsOEJBQWUsQ0FBQTtJQUNqQixDQUFDLEVBL0JXLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBK0J0QjtJQUVELG9EQUFvRDtJQUNwRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O01Ba0JFO0lBQ0YsSUFBWSxpQkF1Qlg7SUF2QkQsV0FBWSxpQkFBaUI7UUFDM0IscUNBQXFDO1FBQ3JDLDhDQUF5QixDQUFBO1FBQ3pCLG1FQUFtRTtRQUNuRSxvQ0FBZSxDQUFBO1FBQ2Ysd0RBQXdEO1FBQ3hELHNEQUFpQyxDQUFBO1FBQ2pDLG9EQUFvRDtRQUNwRCxnREFBMkIsQ0FBQTtRQUMzQix5REFBeUQ7UUFDekQsd0RBQW1DLENBQUE7UUFDbkMscURBQXFEO1FBQ3JELGtEQUE2QixDQUFBO1FBQzdCLG9EQUFvRDtRQUNwRCxnREFBMkIsQ0FBQTtRQUMzQiw0REFBNEQ7UUFDNUQsZ0VBQTJDLENBQUE7UUFDM0MsZ0NBQWdDO1FBQ2hDLHNDQUFpQixDQUFBO1FBQ2pCLGlFQUFpRTtRQUNqRSwwRUFBcUQsQ0FBQTtRQUNyRCxxREFBcUQ7UUFDckQsZ0RBQTJCLENBQUE7SUFDN0IsQ0FBQyxFQXZCVyxpQkFBaUIsR0FBakIseUJBQWlCLEtBQWpCLHlCQUFpQixRQXVCNUI7SUFFRCxxREFBcUQ7SUFDckQ7Ozs7Ozs7Ozs7TUFVRTtJQUNGLElBQVksYUFXWDtJQVhELFdBQVksYUFBYTtRQUN2QixhQUFhO1FBQ2Isa0NBQWlCLENBQUE7UUFDakIseUJBQXlCO1FBQ3pCLHdEQUF1QyxDQUFBO1FBQ3ZDLDRCQUE0QjtRQUM1Qiw4REFBNkMsQ0FBQTtRQUM3QyxxQkFBcUI7UUFDckIsa0RBQWlDLENBQUE7UUFDakMsYUFBYTtRQUNiLGtDQUFpQixDQUFBO0lBQ25CLENBQUMsRUFYVyxhQUFhLEdBQWIscUJBQWEsS0FBYixxQkFBYSxRQVd4QjtJQUVELHNEQUFzRDtJQUN0RDs7Ozs7Ozs7TUFRRTtJQUNGLElBQVksUUFPWDtJQVBELFdBQVksUUFBUTtRQUNsQiw0QkFBNEI7UUFDNUIscUJBQVMsQ0FBQTtRQUNULDZCQUE2QjtRQUM3Qix5QkFBYSxDQUFBO1FBQ2IsNkVBQTZFO1FBQzdFLDJCQUFlLENBQUE7SUFDakIsQ0FBQyxFQVBXLFFBQVEsR0FBUixnQkFBUSxLQUFSLGdCQUFRLFFBT25CO0lBRUQsNENBQTRDO0lBQzVDOzs7Ozs7O01BT0U7SUFFRixJQUFZLFVBS1g7SUFMRCxXQUFZLFVBQVU7UUFDcEIsbUJBQW1CO1FBQ25CLDJCQUFhLENBQUE7UUFDYixrQkFBa0I7UUFDbEIseUJBQVcsQ0FBQTtJQUNiLENBQUMsRUFMVyxVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQUtyQjtJQUVELHFEQUFxRDtJQUNyRDs7Ozs7Ozs7O01BU0U7SUFDRixJQUFZLGtCQVNYO0lBVEQsV0FBWSxrQkFBa0I7UUFDNUIsMkJBQTJCO1FBQzNCLHVDQUFpQixDQUFBO1FBQ2pCLDRCQUE0QjtRQUM1Qix5Q0FBbUIsQ0FBQTtRQUNuQiw4QkFBOEI7UUFDOUIsNkNBQXVCLENBQUE7UUFDdkIsK0NBQStDO1FBQy9DLG1DQUFhLENBQUE7SUFDZixDQUFDLEVBVFcsa0JBQWtCLEdBQWxCLDBCQUFrQixLQUFsQiwwQkFBa0IsUUFTN0I7SUFFRCxxREFBcUQ7SUFDckQ7Ozs7Ozs7TUFPRTtJQUNGLElBQVksa0JBS1g7SUFMRCxXQUFZLGtCQUFrQjtRQUM1Qix1QkFBdUI7UUFDdkIsMkNBQXFCLENBQUE7UUFDckIsdUJBQXVCO1FBQ3ZCLDJDQUFxQixDQUFBO0lBQ3ZCLENBQUMsRUFMVyxrQkFBa0IsR0FBbEIsMEJBQWtCLEtBQWxCLDBCQUFrQixRQUs3QjtJQUVELDhDQUE4QztJQUM5Qzs7Ozs7Ozs7Ozs7O01BWUU7SUFDRixJQUFZLFlBZVg7SUFmRCxXQUFZLFlBQVk7UUFDdEIsbUVBQW1FO1FBQ25FLCtCQUFlLENBQUE7UUFDZixnQ0FBZ0M7UUFDaEMsaUNBQWlCLENBQUE7UUFDakIsK0RBQStEO1FBQy9ELDZCQUFhLENBQUE7UUFDYiwwQ0FBMEM7UUFDMUMsK0JBQWUsQ0FBQTtRQUNmLDJDQUEyQztRQUMzQyw2QkFBYSxDQUFBO1FBQ2IsbUNBQW1DO1FBQ25DLHlDQUF5QixDQUFBO1FBQ3pCLHVDQUF1QztRQUN2QywrQkFBZSxDQUFBO0lBQ2pCLENBQUMsRUFmVyxZQUFZLEdBQVosb0JBQVksS0FBWixvQkFBWSxRQWV2QjtJQUVELHdEQUF3RDtJQUN4RDs7Ozs7Ozs7TUFRRTtJQUNGLElBQVksb0JBT1g7SUFQRCxXQUFZLG9CQUFvQjtRQUM5QixzREFBc0Q7UUFDdEQsbUNBQVcsQ0FBQTtRQUNYLGdEQUFnRDtRQUNoRCxxQ0FBYSxDQUFBO1FBQ2Isb0RBQW9EO1FBQ3BELHlDQUFpQixDQUFBO0lBQ25CLENBQUMsRUFQVyxvQkFBb0IsR0FBcEIsNEJBQW9CLEtBQXBCLDRCQUFvQixRQU8vQjtJQUVELGlEQUFpRDtJQUNqRDs7Ozs7OztNQU9FO0lBQ0YsSUFBWSxXQUtYO0lBTEQsV0FBWSxXQUFXO1FBQ3JCLGtEQUFrRDtRQUNsRCwwQkFBVyxDQUFBO1FBQ1gsaURBQWlEO1FBQ2pELDRCQUFhLENBQUE7SUFDZixDQUFDLEVBTFcsV0FBVyxHQUFYLG1CQUFXLEtBQVgsbUJBQVcsUUFLdEI7SUFFRCx3REFBd0Q7SUFDeEQ7Ozs7Ozs7Ozs7Ozs7TUFhRTtJQUVGLElBQVksU0FpQlg7SUFqQkQsV0FBWSxTQUFTO1FBQ25CLFVBQVU7UUFDVix3QkFBVyxDQUFBO1FBQ1gsV0FBVztRQUNYLDBCQUFhLENBQUE7UUFDYixrQkFBa0I7UUFDbEIsNEJBQWUsQ0FBQTtRQUNmLHVCQUF1QjtRQUN2Qix3QkFBVyxDQUFBO1FBQ1gsbUJBQW1CO1FBQ25CLHdCQUFXLENBQUE7UUFDWCxxQkFBcUI7UUFDckIsd0JBQVcsQ0FBQTtRQUNYLG9CQUFvQjtRQUNwQix3QkFBVyxDQUFBO1FBQ1gsb0JBQW9CO1FBQ3BCLHdCQUFXLENBQUE7SUFDYixDQUFDLEVBakJXLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBaUJwQjtJQUVELDJDQUEyQztJQUMzQzs7Ozs7Ozs7Ozs7Ozs7O01BZUU7SUFDRixJQUFZLFNBcUJYO0lBckJELFdBQVksU0FBUztRQUNuQixhQUFhO1FBQ2IsOEJBQWlCLENBQUE7UUFDakIsWUFBWTtRQUNaLDRCQUFlLENBQUE7UUFDZixXQUFXO1FBQ1gsMEJBQWEsQ0FBQTtRQUNiLGdCQUFnQjtRQUNoQixxQ0FBd0IsQ0FBQTtRQUN4QiwrQkFBK0I7UUFDL0IsOERBQWlELENBQUE7UUFDakQsMkJBQTJCO1FBQzNCLHVEQUEwQyxDQUFBO1FBQzFDLHFDQUFxQztRQUNyQywwRUFBNkQsQ0FBQTtRQUM3RCxpQ0FBaUM7UUFDakMsa0VBQXFELENBQUE7UUFDckQsb0JBQW9CO1FBQ3BCLDBDQUE2QixDQUFBO1FBQzdCLHFCQUFxQjtRQUNyQiw0Q0FBK0IsQ0FBQTtJQUNqQyxDQUFDLEVBckJXLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBcUJwQjtJQUVELGdFQUFnRTtJQUNoRTs7Ozs7Ozs7Ozs7TUFXRTtJQUNGLElBQVksZ0JBYVg7SUFiRCxXQUFZLGdCQUFnQjtRQUMxQixVQUFVO1FBQ1YsK0JBQVcsQ0FBQTtRQUNYLHlCQUF5QjtRQUN6QiwyREFBdUMsQ0FBQTtRQUN2Qyw2QkFBNkI7UUFDN0Isa0VBQThDLENBQUE7UUFDOUMscUJBQXFCO1FBQ3JCLG1EQUErQixDQUFBO1FBQy9CLDBCQUEwQjtRQUMxQiw2REFBeUMsQ0FBQTtRQUN6QyxtQkFBbUI7UUFDbkIsK0NBQTJCLENBQUE7SUFDN0IsQ0FBQyxFQWJXLGdCQUFnQixHQUFoQix3QkFBZ0IsS0FBaEIsd0JBQWdCLFFBYTNCO0lBRUQsNENBQTRDO0lBQzVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUF3QkU7SUFDRixJQUFZLFVBeUNYO0lBekNELFdBQVksVUFBVTtRQUNwQixXQUFXO1FBQ1gsMkJBQWEsQ0FBQTtRQUNiLGFBQWE7UUFDYiwrQkFBaUIsQ0FBQTtRQUNqQixjQUFjO1FBQ2QsaUNBQW1CLENBQUE7UUFDbkIsZUFBZTtRQUNmLG1DQUFxQixDQUFBO1FBQ3JCLGVBQWU7UUFDZixtQ0FBcUIsQ0FBQTtRQUNyQixxQkFBcUI7UUFDckIsOENBQWdDLENBQUE7UUFDaEMsZUFBZTtRQUNmLG1DQUFxQixDQUFBO1FBQ3JCLHVCQUF1QjtRQUN2QixrREFBb0MsQ0FBQTtRQUNwQyxjQUFjO1FBQ2QsaUNBQW1CLENBQUE7UUFDbkIsZUFBZTtRQUNmLG1DQUFxQixDQUFBO1FBQ3JCLHNCQUFzQjtRQUN0QixnREFBa0MsQ0FBQTtRQUNsQyxlQUFlO1FBQ2YsbUNBQXFCLENBQUE7UUFDckIsY0FBYztRQUNkLGlDQUFtQixDQUFBO1FBQ25CLGdCQUFnQjtRQUNoQixxQ0FBdUIsQ0FBQTtRQUN2QixjQUFjO1FBQ2QsaUNBQW1CLENBQUE7UUFDbkIsYUFBYTtRQUNiLCtCQUFpQixDQUFBO1FBQ2pCLGdCQUFnQjtRQUNoQixxQ0FBdUIsQ0FBQTtRQUN2QixnQkFBZ0I7UUFDaEIscUNBQXVCLENBQUE7UUFDdkIsMEJBQTBCO1FBQzFCLHVEQUF5QyxDQUFBO1FBQ3pDLHVCQUF1QjtRQUN2QixrREFBb0MsQ0FBQTtJQUN0QyxDQUFDLEVBekNXLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBeUNyQjtJQUVELDZEQUE2RDtJQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BcUJFO0lBQ0YsSUFBWSx5QkFpQ1g7SUFqQ0QsV0FBWSx5QkFBeUI7UUFDbkMsb0NBQW9DO1FBQ3BDLG9EQUF1QixDQUFBO1FBQ3ZCLHFDQUFxQztRQUNyQyxzREFBeUIsQ0FBQTtRQUN6QixxQ0FBcUM7UUFDckMsMERBQTZCLENBQUE7UUFDN0IscUNBQXFDO1FBQ3JDLHdEQUEyQixDQUFBO1FBQzNCLHFDQUFxQztRQUNyQyx3REFBMkIsQ0FBQTtRQUMzQixzQ0FBc0M7UUFDdEMsc0RBQXlCLENBQUE7UUFDekIsc0NBQXNDO1FBQ3RDLDhEQUFpQyxDQUFBO1FBQ2pDLHNDQUFzQztRQUN0Qyw0REFBK0IsQ0FBQTtRQUMvQixzQ0FBc0M7UUFDdEMsa0RBQXFCLENBQUE7UUFDckIsa0NBQWtDO1FBQ2xDLGdEQUFtQixDQUFBO1FBQ25CLG1DQUFtQztRQUNuQyxrREFBcUIsQ0FBQTtRQUNyQixtQ0FBbUM7UUFDbkMsb0RBQXVCLENBQUE7UUFDdkIsaUNBQWlDO1FBQ2pDLDhDQUFpQixDQUFBO1FBQ2pCLGtDQUFrQztRQUNsQyxnREFBbUIsQ0FBQTtRQUNuQixtQ0FBbUM7UUFDbkMsa0RBQXFCLENBQUE7UUFDckIsa0NBQWtDO1FBQ2xDLGdEQUFtQixDQUFBO0lBQ3JCLENBQUMsRUFqQ1cseUJBQXlCLEdBQXpCLGlDQUF5QixLQUF6QixpQ0FBeUIsUUFpQ3BDO0lBRUQsd0RBQXdEO0lBQ3hEOzs7Ozs7OztNQVFFO0lBQ0YsSUFBWSxVQU9YO0lBUEQsV0FBWSxVQUFVO1FBQ3BCLG9CQUFvQjtRQUNwQixpQ0FBbUIsQ0FBQTtRQUNuQix3QkFBd0I7UUFDeEIsNkJBQWUsQ0FBQTtRQUNmLHNCQUFzQjtRQUN0QixtQ0FBcUIsQ0FBQTtJQUN2QixDQUFDLEVBUFcsVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUFPckI7SUFFRCxtRUFBbUU7SUFDbkU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQXFCRTtJQUNGLElBQVksYUFpQ1g7SUFqQ0QsV0FBWSxhQUFhO1FBQ3ZCLG9CQUFvQjtRQUNwQiw0Q0FBMkIsQ0FBQTtRQUMzQixtQkFBbUI7UUFDbkIsNENBQTJCLENBQUE7UUFDM0IscUJBQXFCO1FBQ3JCLDBEQUF5QyxDQUFBO1FBQ3pDLG9CQUFvQjtRQUNwQix3REFBdUMsQ0FBQTtRQUN2QyxxQkFBcUI7UUFDckIsMERBQXlDLENBQUE7UUFDekMsb0JBQW9CO1FBQ3BCLHdEQUF1QyxDQUFBO1FBQ3ZDLHFCQUFxQjtRQUNyQiwwREFBeUMsQ0FBQTtRQUN6QyxvQkFBb0I7UUFDcEIsd0RBQXVDLENBQUE7UUFDdkMsY0FBYztRQUNkLGtDQUFpQixDQUFBO1FBQ2pCLGdCQUFnQjtRQUNoQixzQ0FBcUIsQ0FBQTtRQUNyQixnQkFBZ0I7UUFDaEIsc0NBQXFCLENBQUE7UUFDckIsc0JBQXNCO1FBQ3RCLGdEQUErQixDQUFBO1FBQy9CLHFCQUFxQjtRQUNyQiw4Q0FBNkIsQ0FBQTtRQUM3QixzQkFBc0I7UUFDdEIsZ0RBQStCLENBQUE7UUFDL0IsY0FBYztRQUNkLDBDQUF5QixDQUFBO1FBQ3pCLCtCQUErQjtRQUMvQixrQ0FBaUIsQ0FBQTtJQUNuQixDQUFDLEVBakNXLGFBQWEsR0FBYixxQkFBYSxLQUFiLHFCQUFhLFFBaUN4QjtJQUVEOzs7T0FHRztJQUVVLFFBQUEsY0FBYyxHQUFHO1FBQzVCLDhDQUE4QztRQUM5QyxRQUFRLFVBQUE7UUFDUixpREFBaUQ7UUFDakQsZUFBZSxpQkFBQTtRQUNmLGtEQUFrRDtRQUNsRCxXQUFXLGFBQUE7UUFDWCxvREFBb0Q7UUFDcEQsaUJBQWlCLG1CQUFBO1FBQ2pCLHFEQUFxRDtRQUNyRCxhQUFhLGVBQUE7UUFDYixzREFBc0Q7UUFDdEQsUUFBUSxVQUFBO1FBQ1IsNENBQTRDO1FBQzVDLFVBQVUsWUFBQTtRQUNWLHFEQUFxRDtRQUNyRCxrQkFBa0Isb0JBQUE7UUFDbEIscURBQXFEO1FBQ3JELGtCQUFrQixvQkFBQTtRQUNsQiw4Q0FBOEM7UUFDOUMsWUFBWSxjQUFBO1FBQ1osd0RBQXdEO1FBQ3hELG9CQUFvQixzQkFBQTtRQUNwQixpREFBaUQ7UUFDakQsV0FBVyxhQUFBO1FBQ1gsd0RBQXdEO1FBQ3hELFNBQVMsV0FBQTtRQUNULDJDQUEyQztRQUMzQyxTQUFTLFdBQUE7UUFDVCxnRUFBZ0U7UUFDaEUsZ0JBQWdCLGtCQUFBO1FBQ2hCLDRDQUE0QztRQUM1QyxVQUFVLFlBQUE7UUFDViw2REFBNkQ7UUFDN0QseUJBQXlCLDJCQUFBO1FBQ3pCLHdEQUF3RDtRQUN4RCxVQUFVLFlBQUE7UUFDVixtRUFBbUU7UUFDbkUsYUFBYSxlQUFBO0tBQ2QsQ0FBQzs7QUFFRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXlCRyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBTcGVjaWZpZXMgYWxsIHN1cHBvcnRlZCBjdXJyZW5jeSBjb2Rlcy4gKi9cclxuLypcclxuQ3VycmVuY3lcclxuVGhlIGZvbGxvd2luZyB0YWJsZSBzcGVjaWZpZXMgYWxsIHN1cHBvcnRlZCBjdXJyZW5jeSBjb2Rlcy5cclxuXHJcblR5cGVcdERlc2NyaXB0aW9uXHJcblVTRFx0VVMgZG9sbGFyLlxyXG5DQURcdENhbmFkaWFuIGRvbGxhci5cclxuKi9cclxuZXhwb3J0IGVudW0gQ3VycmVuY3kge1xyXG4gIC8qKiBVUyBkb2xsYXIuICovXHJcbiAgVVNEID0gJ1VTRCcsXHJcbiAgLyoqIENhbmFkaWFuIGRvbGxhci4gKi9cclxuICBDQUQgPSAnQ0FEJyxcclxufVxyXG5cclxuLyoqIFNwZWNpZmllcyBhbGwgc3VwcG9ydGVkIGxpc3RpbmcgZXhjaGFuZ2VzLiAqL1xyXG4vKlxyXG5MaXN0aW5nIEV4Y2hhbmdlXHJcblRoZSBmb2xsb3dpbmcgdGFibGUgc3BlY2lmaWVzIGFsbCBzdXBwb3J0ZWQgbGlzdGluZyBleGNoYW5nZXMuXHJcblxyXG5UeXBlXHREZXNjcmlwdGlvblxyXG5UU1hcdFRvcm9udG8gU3RvY2sgRXhjaGFuZ2UuXHJcblRTWFZcdFRvcm9udG8gVmVudHVyZSBFeGNoYW5nZS5cclxuQ05TWFx0Q2FuYWRpYW4gTmF0aW9uYWwgU3RvY2sgRXhjaGFuZ2UuXHJcbk1YXHRNb250cmVhbCBFeGNoYW5nZS5cclxuTkFTREFRXHROQVNEQVEuXHJcbk5ZU0VcdE5ldyBZb3JrIFN0b2NrIEV4Y2hhbmdlLlxyXG5OWVNFQU1cdE5ZU0UgQU1FUklDQU5cclxuQVJDQVx0TllTRSBBcmNhLlxyXG5PUFJBXHRPcHRpb24gUmVwb3J0aW5nIEF1dGhvcml0eS5cclxuUGlua1NoZWV0c1x0UGluayBTaGVldHMuXHJcbk9UQ0JCXHRPVEMgQnVsbGV0aW4gQm9hcmQuXHJcbiovXHJcbmV4cG9ydCBlbnVtIExpc3RpbmdFeGNoYW5nZSB7XHJcbiAgLyoqIFRvcm9udG8gU3RvY2sgRXhjaGFuZ2UuICovXHJcbiAgVFNYID0gJ1RTWCcsXHJcbiAgLyoqIFRvcm9udG8gVmVudHVyZSBFeGNoYW5nZS4gKi9cclxuICBUU1hWID0gJ1RTWFYnLFxyXG4gIC8qKiBDYW5hZGlhbiBOYXRpb25hbCBTdG9jayBFeGNoYW5nZS4gKi9cclxuICBDTlNYID0gJ0NOU1gnLFxyXG4gIC8qKiBNb250cmVhbCBFeGNoYW5nZS4gKi9cclxuICBNWCA9ICdNWCcsXHJcbiAgLyoqIE5BU0RBUS4gKi9cclxuICBOQVNEQVEgPSAnTkFTREFRJyxcclxuICAvKiogTmV3IFlvcmsgU3RvY2sgRXhjaGFuZ2UuICovXHJcbiAgTllTRSA9ICdOWVNFJyxcclxuICAvKiogTllTRSBBTUVSSUNBTiAqL1xyXG4gIE5ZU0VBTSA9ICdOWVNFQU0nLFxyXG4gIC8qKiBOWVNFIEFyY2EuICovXHJcbiAgQVJDQSA9ICdBUkNBJyxcclxuICAvKiogT3B0aW9uIFJlcG9ydGluZyBBdXRob3JpdHkuICovXHJcbiAgT1BSQSA9ICdPUFJBJyxcclxuICAvKiogUGluayBTaGVldHMuICovXHJcbiAgUGlua1NoZWV0cyA9ICdQaW5rU2hlZXRzJyxcclxuICAvKiogT1RDIEJ1bGxldGluIEJvYXJkLiAqL1xyXG4gIE9UQ0JCID0gJ09UQ0JCJyxcclxufVxyXG5cclxuLyoqIFNwZWNpZmllcyBhbGwgc3VwcG9ydGVkIHVzZXIgYWNjb3VudCB0eXBlcy4gKi9cclxuLypcclxuVGhlIGZvbGxvd2luZyB0YWJsZSBzcGVjaWZpZXMgYWxsIHN1cHBvcnRlZCB1c2VyIGFjY291bnQgdHlwZXMuXHJcblxyXG5UeXBlXHREZXNjcmlwdGlvblxyXG5DYXNoXHRDYXNoIGFjY291bnQuXHJcbk1hcmdpblx0TWFyZ2luIGFjY291bnQuXHJcblRGU0FcdFRheCBGcmVlIFNhdmluZ3MgQWNjb3VudC5cclxuUlJTUFx0UmVnaXN0ZXJlZCBSZXRpcmVtZW50IFNhdmluZ3MgUGxhbi5cclxuU1JSU1BcdFNwb3VzYWwgUlJTUC5cclxuTFJSU1BcdExvY2tlZC1JbiBSUlNQLlxyXG5MSVJBXHRMb2NrZWQtSW4gUmV0aXJlbWVudCBBY2NvdW50LlxyXG5MSUZcdExpZmUgSW5jb21lIEZ1bmQuXHJcblJJRlx0UmV0aXJlbWVudCBJbmNvbWUgRnVuZC5cclxuU1JJRlx0U3BvdXNhbCBSSUYuXHJcbkxSSUZcdExvY2tlZC1JbiBSSUYuXHJcblJSSUZcdFJlZ2lzdGVyZWQgUklGLlxyXG5QUklGXHRQcmVzY3JpYmVkIFJJRi5cclxuUkVTUFx0SW5kaXZpZHVhbCBSZWdpc3RlcmVkIEVkdWNhdGlvbiBTYXZpbmdzIFBsYW4uXHJcbkZSRVNQXHRGYW1pbHkgUkVTUC4gKi9cclxuZXhwb3J0IGVudW0gQWNjb3VudFR5cGUge1xyXG4gIC8qKiBDYXNoIGFjY291bnQuICovXHJcbiAgQ0FTSCA9ICdDYXNoJyxcclxuICAvKiogTWFyZ2luIGFjY291bnQuICovXHJcbiAgTUFSR0lOID0gJ01hcmdpbicsXHJcbiAgLyoqIFRheCBGcmVlIFNhdmluZ3MgQWNjb3VudC4gKi9cclxuICBURlNBID0gJ1RGU0EnLFxyXG4gIC8qKiBSZWdpc3RlcmVkIFJldGlyZW1lbnQgU2F2aW5ncyBQbGFuLiAqL1xyXG4gIFJSU1AgPSAnUlJTUCcsXHJcbiAgLyoqIFNwb3VzYWwgUlJTUC4gKi9cclxuICBTUlJTUCA9ICdTUlJTUCcsXHJcbiAgLyoqIExvY2tlZC1JbiBSUlNQLiAqL1xyXG4gIExSUlNQID0gJ0xSUlNQJyxcclxuICAvKiogTG9ja2VkLUluIFJldGlyZW1lbnQgQWNjb3VudC4gKi9cclxuICBMSVJBID0gJ0xJUkEnLFxyXG4gIC8qKiBMaWZlIEluY29tZSBGdW5kLiAqL1xyXG4gIExJRiA9ICdMSUYnLFxyXG4gIC8qKiBSZXRpcmVtZW50IEluY29tZSBGdW5kLiAqL1xyXG4gIFJJRiA9ICdSSUYnLFxyXG4gIC8qKiBTcG91c2FsIFJJRi4gKi9cclxuICBTUklGID0gJ1NSSUYnLFxyXG4gIC8qKiBMb2NrZWQtSW4gUklGLiAqL1xyXG4gIExSSUYgPSAnTFJJRicsXHJcbiAgLyoqIFJlZ2lzdGVyZWQgUklGLiAqL1xyXG4gIFJSSUYgPSAnUlJJRicsXHJcbiAgLyoqIFByZXNjcmliZWQgUklGLiAqL1xyXG4gIFBSSUYgPSAnUFJJRicsXHJcbiAgLyoqIEluZGl2aWR1YWwgUmVnaXN0ZXJlZCBFZHVjYXRpb24gU2F2aW5ncyBQbGFuLiAqL1xyXG4gIFJFU1AgPSAnUkVTUCcsXHJcbiAgLyoqIEZhbWlseSBSRVNQLiAqL1xyXG4gIEZSRVNQID0gJ0ZSRVNQJyxcclxufVxyXG5cclxuLyoqIFNwZWNpZmllcyBhbGwgc3VwcG9ydGVkIGFjY291bnQgY2xpZW50IHR5cGVzLiAqL1xyXG4vKlxyXG5DbGllbnQgQWNjb3VudCBUeXBlXHJcblRoZSBmb2xsb3dpbmcgdGFibGUgc3BlY2lmaWVzIGFsbCBzdXBwb3J0ZWQgYWNjb3VudCBjbGllbnQgdHlwZXMuXHJcblxyXG5UeXBlXHREZXNjcmlwdGlvblxyXG5JbmRpdmlkdWFsXHRBY2NvdW50IGhlbGQgYnkgYW4gaW5kaXZpZHVhbC5cclxuSm9pbnRcdEFjY291bnQgaGVsZCBqb2ludGx5IGJ5IHNldmVyYWwgaW5kaXZpZHVhbHMgKGUuZy4sIHNwb3VzZXMpLlxyXG5JbmZvcm1hbCBUcnVzdFx0Tm9uLWluZGl2aWR1YWwgYWNjb3VudCBoZWxkIGJ5IGFuIGluZm9ybWFsIHRydXN0LlxyXG5Db3Jwb3JhdGlvblx0Tm9uLWluZGl2aWR1YWwgYWNjb3VudCBoZWxkIGJ5IGEgY29ycG9yYXRpb24uXHJcbkludmVzdG1lbnQgQ2x1Ylx0Tm9uLWluZGl2aWR1YWwgYWNjb3VudCBoZWxkIGJ5IGFuIGludmVzdG1lbnQgY2x1Yi5cclxuRm9ybWFsIFRydXN0XHROb24taW5kaXZpZHVhbCBhY2NvdW50IGhlbGQgYnkgYSBmb3JtYWwgdHJ1c3QuXHJcblBhcnRuZXJzaGlwXHROb24taW5kaXZpZHVhbCBhY2NvdW50IGhlbGQgYnkgYSBwYXJ0bmVyc2hpcC5cclxuU29sZSBQcm9wcmlldG9yc2hpcFx0Tm9uLWluZGl2aWR1YWwgYWNjb3VudCBoZWxkIGJ5IGEgc29sZSBwcm9wcmlldG9yc2hpcC5cclxuRmFtaWx5XHRBY2NvdW50IGhlbGQgYnkgYSBmYW1pbHkuXHJcbkpvaW50IGFuZCBJbmZvcm1hbCBUcnVzdFx0Tm9uLWluZGl2aWR1YWwgYWNjb3VudCBoZWxkIGJ5XHJcbmEgam9pbnQgYW5kIGluZm9ybWFsIHRydXN0LlxyXG5cclxuSW5zdGl0dXRpb25cdE5vbi1pbmRpdmlkdWFsIGFjY291bnQgaGVsZCBieSBhbiBpbnN0aXR1dGlvbi5cclxuKi9cclxuZXhwb3J0IGVudW0gQ2xpZW50QWNjb3VudFR5cGUge1xyXG4gIC8qKiBBY2NvdW50IGhlbGQgYnkgYW4gaW5kaXZpZHVhbC4gKi9cclxuICBJTkRJVklEVUFMID0gJ0luZGl2aWR1YWwnLFxyXG4gIC8qKiBBY2NvdW50IGhlbGQgam9pbnRseSBieSBzZXZlcmFsIGluZGl2aWR1YWxzIChlLmcuLCBzcG91c2VzKS4gKi9cclxuICBKT0lOVCA9ICdKb2ludCcsXHJcbiAgLyoqIE5vbi1pbmRpdmlkdWFsIGFjY291bnQgaGVsZCBieSBhbiBpbmZvcm1hbCB0cnVzdC4gKi9cclxuICBJTkZPUk1BTF9UUlVTVCA9ICdJbmZvcm1hbCBUcnVzdCcsXHJcbiAgLyoqIE5vbi1pbmRpdmlkdWFsIGFjY291bnQgaGVsZCBieSBhIGNvcnBvcmF0aW9uLiAqL1xyXG4gIENPUlBPUkFUSU9OID0gJ0NvcnBvcmF0aW9uJyxcclxuICAvKiogTm9uLWluZGl2aWR1YWwgYWNjb3VudCBoZWxkIGJ5IGFuIGludmVzdG1lbnQgY2x1Yi4gKi9cclxuICBJTlZFU1RNRU5UX0NMVUIgPSAnSW52ZXN0bWVudCBDbHViJyxcclxuICAvKiogTm9uLWluZGl2aWR1YWwgYWNjb3VudCBoZWxkIGJ5IGEgZm9ybWFsIHRydXN0LiAqL1xyXG4gIEZPUk1BTF9UUlVTVCA9ICdGb3JtYWwgVHJ1c3QnLFxyXG4gIC8qKiBOb24taW5kaXZpZHVhbCBhY2NvdW50IGhlbGQgYnkgYSBwYXJ0bmVyc2hpcC4gKi9cclxuICBQQVJUTkVSU0hJUCA9ICdQYXJ0bmVyc2hpcCcsXHJcbiAgLyoqIE5vbi1pbmRpdmlkdWFsIGFjY291bnQgaGVsZCBieSBhIHNvbGUgcHJvcHJpZXRvcnNoaXAuICovXHJcbiAgU09MRV9QUk9QUklFVE9SU0hJUCA9ICdTb2xlIFByb3ByaWV0b3JzaGlwJyxcclxuICAvKiogQWNjb3VudCBoZWxkIGJ5IGEgZmFtaWx5LiAqL1xyXG4gIEZBTUlMWSA9ICdGYW1pbHknLFxyXG4gIC8qKiBOb24taW5kaXZpZHVhbCBhY2NvdW50IGhlbGQgYnkgYSBqb2ludCBhbmQgaW5mb3JtYWwgdHJ1c3QuICovXHJcbiAgSk9JTlRfQU5EX0lORk9STUFMX1RSVVNUID0gJ0pvaW50IGFuZCBJbmZvcm1hbCBUcnVzdCcsXHJcbiAgLyoqIE5vbi1pbmRpdmlkdWFsIGFjY291bnQgaGVsZCBieSBhbiBpbnN0aXR1dGlvbi4gKi9cclxuICBJTlNUSVRVVElPTiA9ICdJbnN0aXR1dGlvbicsXHJcbn1cclxuXHJcbi8qKiBTcGVjaWZpZXMgYWxsIHN1cHBvcnRlZCBhY2NvdW50IHN0YXR1cyB2YWx1ZXMuICovXHJcbi8qXHJcbkFjY291bnQgU3RhdHVzXHJcblRoZSBmb2xsb3dpbmcgdGFibGUgc3BlY2lmaWVzIGFsbCBzdXBwb3J0ZWQgYWNjb3VudCBzdGF0dXMgdmFsdWVzLlxyXG5cclxuVHlwZVxyXG5BY3RpdmVcclxuU3VzcGVuZGVkIChDbG9zZWQpXHJcblN1c3BlbmRlZCAoVmlldyBPbmx5KVxyXG5MaXF1aWRhdGUgT25seVxyXG5DbG9zZWRcclxuKi9cclxuZXhwb3J0IGVudW0gQWNjb3VudFN0YXR1cyB7XHJcbiAgLyoqIEFjdGl2ZSAqL1xyXG4gIEFDVElWRSA9ICdBY3RpdmUnLFxyXG4gIC8qKiBTdXNwZW5kZWQgKENsb3NlZCkgKi9cclxuICBTVVNQRU5ERURfQ0xPU0VEID0gJ1N1c3BlbmRlZCAoQ2xvc2VkKScsXHJcbiAgLyoqIFN1c3BlbmRlZCAoVmlldyBPbmx5KSAqL1xyXG4gIFNVU1BFTkRFRF9WSUVXX09OTFkgPSAnU3VzcGVuZGVkIChWaWV3IE9ubHkpJyxcclxuICAvKiogTGlxdWlkYXRlIE9ubHkgKi9cclxuICBMSVFVSURBVEVfT05MWSA9ICdMaXF1aWRhdGUgT25seScsXHJcbiAgLyoqIENsb3NlZCAqL1xyXG4gIENMT1NFRCA9ICdDbG9zZWQnLFxyXG59XHJcblxyXG4vKiogU3BlY2lmaWVzIGFsbCBzdXBwb3J0ZWQgbWFya2V0IGRhdGEgdGljayB0eXBlcy4gKi9cclxuLypcclxuVGljayBUeXBlXHJcblRoZSBmb2xsb3dpbmcgdGFibGUgc3BlY2lmaWVzIGFsbCBzdXBwb3J0ZWQgbWFya2V0IGRhdGEgdGljayB0eXBlcy5cclxuXHJcblR5cGVcdERlc2NyaXB0aW9uXHJcblVwXHREZXNpZ25hdGVzIGFuIHVwdGljay5cclxuRG93blx0RGVzaWduYXRlcyBhIGRvd250aWNrLlxyXG5FcXVhbFx0RGVzaWduYXRlcyBhIHRpY2sgdGhhdCB0b29rIHBsYWNlIGF0IHRoZSBzYW1lIHByaWNlIGFzIGEgcHJldmlvdXMgb25lLlxyXG4qL1xyXG5leHBvcnQgZW51bSBUaWNrVHlwZSB7XHJcbiAgLyoqIERlc2lnbmF0ZXMgYW4gdXB0aWNrLiAqL1xyXG4gIFVQID0gJ1VwJyxcclxuICAvKiogRGVzaWduYXRlcyBhIGRvd250aWNrLiAqL1xyXG4gIERPV04gPSAnRG93bicsXHJcbiAgLyoqIERlc2lnbmF0ZXMgYSB0aWNrIHRoYXQgdG9vayBwbGFjZSBhdCB0aGUgc2FtZSBwcmljZSBhcyBhIHByZXZpb3VzIG9uZS4gKi9cclxuICBFUVVBTCA9ICdFcXVhbCcsXHJcbn1cclxuXHJcbi8qKiBTcGVjaWZpZXMgYWxsIHN1cHBvcnRlZCBvcHRpb24gdHlwZXMuICovXHJcbi8qXHJcbk9wdGlvbiBUeXBlXHJcblRoZSBmb2xsb3dpbmcgdGFibGUgc3BlY2lmaWVzIGFsbCBzdXBwb3J0ZWQgb3B0aW9uIHR5cGVzLlxyXG5cclxuVHlwZVx0RGVzY3JpcHRpb25cclxuQ2FsbFx0Q2FsbCBvcHRpb24uXHJcblB1dFx0UHV0IG9wdGlvbi5cclxuKi9cclxuXHJcbmV4cG9ydCBlbnVtIE9wdGlvblR5cGUge1xyXG4gIC8qKiBDYWxsIG9wdGlvbi4gKi9cclxuICBDQUxMID0gJ0NhbGwnLFxyXG4gIC8qKiBQdXQgb3B0aW9uLiAqL1xyXG4gIFBVVCA9ICdQdXQnLFxyXG59XHJcblxyXG4vKiogU3BlY2lmaWVzIGFsbCBzdXBwb3J0ZWQgb3B0aW9uIGR1cmF0aW9uIHR5cGVzLiAqL1xyXG4vKlxyXG5PcHRpb24gRHVyYXRpb24gVHlwZVxyXG5UaGUgZm9sbG93aW5nIHRhYmxlIHNwZWNpZmllcyBhbGwgc3VwcG9ydGVkIG9wdGlvbiBkdXJhdGlvbiB0eXBlcy5cclxuXHJcblR5cGVcdERlc2NyaXB0aW9uXHJcbldlZWtseVx0V2Vla2x5IGV4cGlyeSBjeWNsZS5cclxuTW9udGhseVx0TW9udGhseSBleHBpcnkgY3ljbGUuXHJcblF1YXJ0ZXJseVx0UXVhcnRlcmx5IGV4cGlyeSBjeWNsZS5cclxuTEVBUFx0TG9uZy10ZXJtIEVxdWl0eSBBcHByZWNpYXRpb24gY29udHJhY3RzLlxyXG4qL1xyXG5leHBvcnQgZW51bSBPcHRpb25EdXJhdGlvblR5cGUge1xyXG4gIC8qKiBXZWVrbHkgZXhwaXJ5IGN5Y2xlLiAqL1xyXG4gIFdFRUtMWSA9ICdXZWVrbHknLFxyXG4gIC8qKiBNb250aGx5IGV4cGlyeSBjeWNsZS4gKi9cclxuICBNT05USExZID0gJ01vbnRobHknLFxyXG4gIC8qKiBRdWFydGVybHkgZXhwaXJ5IGN5Y2xlLiAqL1xyXG4gIFFVQVJURVJMWSA9ICdRdWFydGVybHknLFxyXG4gIC8qKiBMb25nLXRlcm0gRXF1aXR5IEFwcHJlY2lhdGlvbiBjb250cmFjdHMuICovXHJcbiAgTEVBUCA9ICdMRUFQJyxcclxufVxyXG5cclxuLyoqIFNwZWNpZmllcyBhbGwgc3VwcG9ydGVkIG9wdGlvbiBleGVyY2lzZSB0eXBlcy4gKi9cclxuLypcclxuT3B0aW9uIEV4ZXJjaXNlIFR5cGVcclxuVGhlIGZvbGxvd2luZyB0YWJsZSBzcGVjaWZpZXMgYWxsIHN1cHBvcnRlZCBvcHRpb24gZXhlcmNpc2UgdHlwZXMuXHJcblxyXG5UeXBlXHREZXNjcmlwdGlvblxyXG5BbWVyaWNhblx0QW1lcmljYW4gb3B0aW9uLlxyXG5FdXJvcGVhblx0RXVyb3BlYW4gb3B0aW9uLlxyXG4qL1xyXG5leHBvcnQgZW51bSBPcHRpb25FeGVyY2lzZVR5cGUge1xyXG4gIC8qKiBBbWVyaWNhbiBvcHRpb24uICovXHJcbiAgQU1FUklDQU4gPSAnQW1lcmljYW4nLFxyXG4gIC8qKiBFdXJvcGVhbiBvcHRpb24uICovXHJcbiAgRVVST1BFQU4gPSAnRXVyb3BlYW4nLFxyXG59XHJcblxyXG4vKiogU3BlY2lmaWVzIGFsbCBzdXBwb3J0ZWQgc2VjdXJpdHkgdHlwZXMuICovXHJcbi8qXHJcblNlY3VyaXR5IFR5cGVcclxuVGhlIGZvbGxvd2luZyB0YWJsZSBzcGVjaWZpZXMgYWxsIHN1cHBvcnRlZCBzZWN1cml0eSB0eXBlcy5cclxuXHJcblR5cGVcdERlc2NyaXB0aW9uXHJcblN0b2NrXHRDb21tb24gYW5kIHByZWZlcnJlZCBlcXVpdGllcywgRVRGcywgRVROcywgdW5pdHMsIEFEUnMsIGV0Yy5cclxuT3B0aW9uXHRFcXVpdHkgYW5kIGluZGV4IG9wdGlvbnMuXHJcbkJvbmRcdERlYmVudHVyZXMsIG5vdGVzLCBib25kcywgYm90aCBjb3Jwb3JhdGUgYW5kIGdvdmVybm1lbnQuXHJcblJpZ2h0XHRFcXVpdHkgb3IgYm9uZCByaWdodHMgYW5kIHdhcnJhbnRzLlxyXG5Hb2xkXHRQaHlzaWNhbCBnb2xkIChjb2lucywgd2FmZXJzLCBiYXJzKS5cclxuTXV0dWFsRnVuZFx0Q2FuYWRpYW4gb3IgVVMgbXV0dWFsIGZ1bmRzLlxyXG5JbmRleFx0U3RvY2sgaW5kaWNlcyAoZS5nLiwgRG93IEpvbmVzKS5cclxuKi9cclxuZXhwb3J0IGVudW0gU2VjdXJpdHlUeXBlIHtcclxuICAvKiogQ29tbW9uIGFuZCBwcmVmZXJyZWQgZXF1aXRpZXMsIEVURnMsIEVUTnMsIHVuaXRzLCBBRFJzLCBldGMuICovXHJcbiAgU1RPQ0sgPSAnU3RvY2snLFxyXG4gIC8qKiBFcXVpdHkgYW5kIGluZGV4IG9wdGlvbnMuICovXHJcbiAgT1BUSU9OID0gJ09wdGlvbicsXHJcbiAgLyoqIERlYmVudHVyZXMsIG5vdGVzLCBib25kcywgYm90aCBjb3Jwb3JhdGUgYW5kIGdvdmVybm1lbnQuICovXHJcbiAgQk9ORCA9ICdCb25kJyxcclxuICAvKiogRXF1aXR5IG9yIGJvbmQgcmlnaHRzIGFuZCB3YXJyYW50cy4gKi9cclxuICBSSUdIVCA9ICdSaWdodCcsXHJcbiAgLyoqIFBoeXNpY2FsIGdvbGQgKGNvaW5zLCB3YWZlcnMsIGJhcnMpLiAqL1xyXG4gIEdPTEQgPSAnR29sZCcsXHJcbiAgLyoqIENhbmFkaWFuIG9yIFVTIG11dHVhbCBmdW5kcy4gKi9cclxuICBNVVRVQUxGVU5EID0gJ011dHVhbEZ1bmQnLFxyXG4gIC8qKiBTdG9jayBpbmRpY2VzIChlLmcuLCBEb3cgSm9uZXMpLiAqL1xyXG4gIElOREVYID0gJ0luZGV4JyxcclxufVxyXG5cclxuLyoqIFNwZWNpZmllcyBhbGwgc3VwcG9ydGVkIG9yZGVyIHN0YXRlIGZpbHRlciB0eXBlcy4gKi9cclxuLypcclxuT3JkZXIgU3RhdGUgRmlsdGVyIFR5cGVcclxuVGhlIGZvbGxvd2luZyB0YWJsZSBzcGVjaWZpZXMgYWxsIHN1cHBvcnRlZCBvcmRlciBzdGF0ZSBmaWx0ZXIgdHlwZXMuXHJcblxyXG5UeXBlXHREZXNjcmlwdGlvblxyXG5BbGxcdEluY2x1ZGVzIGFsbCBvcmRlcnMsIHJlZ2FyZGxlc3Mgb2YgdGhlaXIgc3RhdGUuXHJcbk9wZW5cdEluY2x1ZGVzIG9ubHkgb3JkZXJzIHRoYXQgYXJlIHN0aWxsIG9wZW4uXHJcbkNsb3NlZFx0SW5jbHVkZXMgb25seSBvcmRlcnMgdGhhdCBhcmUgYWxyZWFkeSBjbG9zZWQuXHJcbiovXHJcbmV4cG9ydCBlbnVtIE9yZGVyU3RhdGVGaWx0ZXJUeXBlIHtcclxuICAvKiogSW5jbHVkZXMgYWxsIG9yZGVycywgcmVnYXJkbGVzcyBvZiB0aGVpciBzdGF0ZS4gKi9cclxuICBBTEwgPSAnQWxsJyxcclxuICAvKiogSW5jbHVkZXMgb25seSBvcmRlcnMgdGhhdCBhcmUgc3RpbGwgb3Blbi4gKi9cclxuICBPUEVOID0gJ09wZW4nLFxyXG4gIC8qKiBJbmNsdWRlcyBvbmx5IG9yZGVycyB0aGF0IGFyZSBhbHJlYWR5IGNsb3NlZC4gKi9cclxuICBDTE9TRUQgPSAnQ2xvc2VkJyxcclxufVxyXG5cclxuLyoqIFNwZWNpZmllcyBhbGwgc3VwcG9ydGVkIG9yZGVyIHNpZGUgdmFsdWVzLiAqL1xyXG4vKlxyXG5PcmRlciBBY3Rpb25cclxuVGhlIGZvbGxvd2luZyB0YWJsZSBzcGVjaWZpZXMgYWxsIHN1cHBvcnRlZCBvcmRlciBzaWRlIHZhbHVlcy5cclxuXHJcblR5cGVcdERlc2NyaXB0aW9uXHJcbkJ1eVx0RGVzaWduYXRlcyBhbiBvcmRlciB0byBwdXJjaGFzZSBhIHNlY3VyaXR5LlxyXG5TZWxsXHREZXNpZ25hdGVzIGFuIG9yZGVyIHRvIGRpc3Bvc2UgYSBzZWN1cml0eS5cclxuKi9cclxuZXhwb3J0IGVudW0gT3JkZXJBY3Rpb24ge1xyXG4gIC8qKiBEZXNpZ25hdGVzIGFuIG9yZGVyIHRvIHB1cmNoYXNlIGEgc2VjdXJpdHkuICovXHJcbiAgQlVZID0gJ0J1eScsXHJcbiAgLyoqIERlc2lnbmF0ZXMgYW4gb3JkZXIgdG8gZGlzcG9zZSBhIHNlY3VyaXR5LiAqL1xyXG4gIFNFTEwgPSAnU2VsbCcsXHJcbn1cclxuXHJcbi8qKiBTcGVjaWZpZXMgYWxsIHN1cHBvcnRlZCBjbGllbnQgb3JkZXIgc2lkZSB2YWx1ZXMuICovXHJcbi8qXHJcbk9yZGVyIFNpZGVcclxuVGhlIGZvbGxvd2luZyB0YWJsZSBzcGVjaWZpZXMgYWxsIHN1cHBvcnRlZCBjbGllbnQgb3JkZXIgc2lkZSB2YWx1ZXMuXHJcblxyXG5UeXBlXHREZXNjcmlwdGlvblxyXG5CdXlcdEJ1eVxyXG5TZWxsXHRTZWxsXHJcblNob3J0XHRTZWxsIHNob3J0LlxyXG5Db3ZcdENvdmVyIHRoZSBzaG9ydC5cclxuQlRPXHRCdXktVG8tT3Blbi5cclxuU1RDXHRTZWxsLVRvLUNsb3NlLlxyXG5TVE9cdFNlbGwtVG8tT3Blbi5cclxuQlRDXHRCdXktVG8tQ2xvc2UuXHJcbiovXHJcblxyXG5leHBvcnQgZW51bSBPcmRlclNpZGUge1xyXG4gIC8qKiBCdXkgKi9cclxuICBCVVkgPSAnQnV5JyxcclxuICAvKiogU2VsbCAqL1xyXG4gIFNFTEwgPSAnU2VsbCcsXHJcbiAgLyoqIFNlbGwgc2hvcnQuICovXHJcbiAgU0hPUlQgPSAnU2hvcnQnLFxyXG4gIC8qKiBDb3ZlciB0aGUgc2hvcnQuICovXHJcbiAgQ09WID0gJ0NvdicsXHJcbiAgLyoqIEJ1eS1Uby1PcGVuLiAqL1xyXG4gIEJUTyA9ICdCVE8nLFxyXG4gIC8qKiBTZWxsLVRvLUNsb3NlLiAqL1xyXG4gIFNUQyA9ICdTVEMnLFxyXG4gIC8qKiBTZWxsLVRvLU9wZW4uICovXHJcbiAgU1RPID0gJ1NUTycsXHJcbiAgLyoqIEJ1eS1Uby1DbG9zZS4gKi9cclxuICBCVEMgPSAnQlRDJyxcclxufVxyXG5cclxuLyoqIFNwZWNpZmllcyBhbGwgc3VwcG9ydGVkIG9yZGVyIHR5cGVzLiAqL1xyXG4vKlxyXG5PcmRlciBUeXBlXHJcblRoZSBmb2xsb3dpbmcgdGFibGUgc3BlY2lmaWVzIGFsbCBzdXBwb3J0ZWQgb3JkZXIgdHlwZXMuXHJcblxyXG5UeXBlXHJcbk1hcmtldFxyXG5MaW1pdFxyXG5TdG9wXHJcblN0b3BMaW1pdFxyXG5UcmFpbFN0b3BJblBlcmNlbnRhZ2VcclxuVHJhaWxTdG9wSW5Eb2xsYXJcclxuVHJhaWxTdG9wTGltaXRJblBlcmNlbnRhZ2VcclxuVHJhaWxTdG9wTGltaXRJbkRvbGxhclxyXG5MaW1pdE9uT3BlblxyXG5MaW1pdE9uQ2xvc2VcclxuKi9cclxuZXhwb3J0IGVudW0gT3JkZXJUeXBlIHtcclxuICAvKiogTWFya2V0ICovXHJcbiAgTUFSS0VUID0gJ01hcmtldCcsXHJcbiAgLyoqIExpbWl0ICovXHJcbiAgTElNSVQgPSAnTGltaXQnLFxyXG4gIC8qKiBTdG9wICovXHJcbiAgU1RPUCA9ICdTdG9wJyxcclxuICAvKiogU3RvcExpbWl0ICovXHJcbiAgU1RPUF9MSU1JVCA9ICdTdG9wTGltaXQnLFxyXG4gIC8qKiBUcmFpbCBTdG9wIEluIFBlcmNlbnRhZ2UgKi9cclxuICBUUkFJTF9TVE9QSU5fUEVSQ0VOVEFHRSA9ICdUcmFpbFN0b3BJblBlcmNlbnRhZ2UnLFxyXG4gIC8qKiBUcmFpbCBTdG9wIEluIERvbGxhciAqL1xyXG4gIFRSQUlMX1NUT1BfSU5fRE9MTEFSID0gJ1RyYWlsU3RvcEluRG9sbGFyJyxcclxuICAvKiogVHJhaWwgU3RvcCBMaW1pdCBJbiBQZXJjZW50YWdlICovXHJcbiAgVFJBSUxfU1RPUF9MSU1JVF9JTl9QRVJDRU5UQUdFID0gJ1RyYWlsU3RvcExpbWl0SW5QZXJjZW50YWdlJyxcclxuICAvKiogVHJhaWwgU3RvcCBMaW1pdCBJbiBEb2xsYXIgKi9cclxuICBUUkFJTF9TVE9QX0xJTUlUX0lOX0RPTExBUiA9ICdUcmFpbFN0b3BMaW1pdEluRG9sbGFyJyxcclxuICAvKiogTGltaXQgT24gT3BlbiAqL1xyXG4gIExJTUlUX09OX09QRU4gPSAnTGltaXRPbk9wZW4nLFxyXG4gIC8qKiBMaW1pdCBPbiBDbG9zZSAqL1xyXG4gIExJTUlUX09OX0NMT1NFID0gJ0xpbWl0T25DbG9zZScsXHJcbn1cclxuXHJcbi8qKiBTcGVjaWZpZXMgYWxsIHN1cHBvcnRlZCBvcmRlciBUaW1lLUluLUZvcmNlIGluc3RydWN0aW9ucy4gKi9cclxuLypcclxuT3JkZXIgVGltZS1Jbi1Gb3JjZVxyXG5UaGUgZm9sbG93aW5nIHRhYmxlIHNwZWNpZmllcyBhbGwgc3VwcG9ydGVkIG9yZGVyIFRpbWUtSW4tRm9yY2UgaW5zdHJ1Y3Rpb25zLlxyXG5cclxuVHlwZVxyXG5EYXlcclxuR29vZFRpbGxDYW5jZWxlZFxyXG5Hb29kVGlsbEV4dGVuZGVkRGF5XHJcbkdvb2RUaWxsRGF0ZVxyXG5JbW1lZGlhdGVPckNhbmNlbFxyXG5GaWxsT3JLaWxsXHJcbiovXHJcbmV4cG9ydCBlbnVtIE9yZGVyVGltZUluRm9yY2Uge1xyXG4gIC8qKiBEYXkgKi9cclxuICBEQVkgPSAnRGF5JyxcclxuICAvKiogR29vZCBUaWxsIENhbmNlbGVkICovXHJcbiAgR09PRF9USUxMX0NBTkNFTEVEID0gJ0dvb2RUaWxsQ2FuY2VsZWQnLFxyXG4gIC8qKiBHb29kIFRpbGwgRXh0ZW5kZWQgRGF5ICovXHJcbiAgR09PRF9USUxMX0VYVEVOREVEX0RBWSA9ICdHb29kVGlsbEV4dGVuZGVkRGF5JyxcclxuICAvKiogR29vZCBUaWxsIERhdGUgKi9cclxuICBHT09EX1RJTExfREFURSA9ICdHb29kVGlsbERhdGUnLFxyXG4gIC8qKiBJbW1lZGlhdGUgT3IgQ2FuY2VsICovXHJcbiAgSU1NRURJQVRFX09SX0NBTkNFTCA9ICdJbW1lZGlhdGVPckNhbmNlbCcsXHJcbiAgLyoqIEZpbGwgT3IgS2lsbCAqL1xyXG4gIEZJTExfT1JfS0lMTCA9ICdGaWxsT3JLaWxsJyxcclxufVxyXG5cclxuLyoqIFNwZWNpZmllcyBhbGwgc3VwcG9ydGVkIG9yZGVyIHN0YXRlcy4gKi9cclxuLypcclxuT3JkZXIgU3RhdGVcclxuVGhlIGZvbGxvd2luZyB0YWJsZSBzcGVjaWZpZXMgYWxsIHN1cHBvcnRlZCBvcmRlciBzdGF0ZXMuXHJcblxyXG5UeXBlXHJcbkZhaWxlZFxyXG5QZW5kaW5nXHJcbkFjY2VwdGVkXHJcblJlamVjdGVkXHJcbkNhbmNlbFBlbmRpbmdcclxuQ2FuY2VsZWRcclxuUGFydGlhbENhbmNlbGVkXHJcblBhcnRpYWxcclxuRXhlY3V0ZWRcclxuUmVwbGFjZVBlbmRpbmdcclxuUmVwbGFjZWRcclxuU3RvcHBlZFxyXG5TdXNwZW5kZWRcclxuRXhwaXJlZFxyXG5RdWV1ZWRcclxuVHJpZ2dlcmVkXHJcbkFjdGl2YXRlZFxyXG5QZW5kaW5nUmlza1Jldmlld1xyXG5Db250aW5nZW50T3JkZXJcclxuKi9cclxuZXhwb3J0IGVudW0gT3JkZXJTdGF0ZSB7XHJcbiAgLyoqIFR5cGUgKi9cclxuICBUWVBFID0gJ1R5cGUnLFxyXG4gIC8qKiBGYWlsZWQgKi9cclxuICBGQUlMRUQgPSAnRmFpbGVkJyxcclxuICAvKiogUGVuZGluZyAqL1xyXG4gIFBFTkRJTkcgPSAnUGVuZGluZycsXHJcbiAgLyoqIEFjY2VwdGVkICovXHJcbiAgQUNDRVBURUQgPSAnQWNjZXB0ZWQnLFxyXG4gIC8qKiBSZWplY3RlZCAqL1xyXG4gIFJFSkVDVEVEID0gJ1JlamVjdGVkJyxcclxuICAvKiogQ2FuY2VsIFBlbmRpbmcgKi9cclxuICBDQU5DRUxfUEVORElORyA9ICdDYW5jZWxQZW5kaW5nJyxcclxuICAvKiogQ2FuY2VsZWQgKi9cclxuICBDQU5DRUxFRCA9ICdDYW5jZWxlZCcsXHJcbiAgLyoqIFBhcnRpYWwgQ2FuY2VsZWQgKi9cclxuICBQQVJUSUFMX0NBTkNFTEVEID0gJ1BhcnRpYWxDYW5jZWxlZCcsXHJcbiAgLyoqIFBhcnRpYWwgKi9cclxuICBQQVJUSUFMID0gJ1BhcnRpYWwnLFxyXG4gIC8qKiBFeGVjdXRlZCAqL1xyXG4gIEVYRUNVVEVEID0gJ0V4ZWN1dGVkJyxcclxuICAvKiogUmVwbGFjZSBQZW5kaW5nICovXHJcbiAgUkVQTEFDRV9QRU5ESU5HID0gJ1JlcGxhY2VQZW5kaW5nJyxcclxuICAvKiogUmVwbGFjZWQgKi9cclxuICBSRVBMQUNFRCA9ICdSZXBsYWNlZCcsXHJcbiAgLyoqIFN0b3BwZWQgKi9cclxuICBTVE9QUEVEID0gJ1N0b3BwZWQnLFxyXG4gIC8qKiBTdXNwZW5kZWQgKi9cclxuICBTVVNQRU5ERUQgPSAnU3VzcGVuZGVkJyxcclxuICAvKiogRXhwaXJlZCAqL1xyXG4gIEVYUElSRUQgPSAnRXhwaXJlZCcsXHJcbiAgLyoqIFF1ZXVlZCAqL1xyXG4gIFFVRVVFRCA9ICdRdWV1ZWQnLFxyXG4gIC8qKiBUcmlnZ2VyZWQgKi9cclxuICBUUklHR0VSRUQgPSAnVHJpZ2dlcmVkJyxcclxuICAvKiogQWN0aXZhdGVkICovXHJcbiAgQUNUSVZBVEVEID0gJ0FjdGl2YXRlZCcsXHJcbiAgLyoqIFBlbmRpbmcgUmlzayBSZXZpZXcgKi9cclxuICBQRU5ESU5HX1JJU0tfUkVWSUVXID0gJ1BlbmRpbmdSaXNrUmV2aWV3JyxcclxuICAvKiogQ29udGluZ2VudCBPcmRlciAqL1xyXG4gIENPTlRJTkdFTlRfT1JERVIgPSAnQ29udGluZ2VudE9yZGVyJyxcclxufVxyXG5cclxuLyoqIFNwZWNpZmllcyBhbGwgc3VwcG9ydGVkIG9yZGVyIGV4ZWN1dGlvbiBzdGF0dXMgdmFsdWVzLiAqL1xyXG4vKlxyXG5IaXN0b3JpY2FsIERhdGEgR3JhbnVsYXJpdHlcclxuVGhlIGZvbGxvd2luZyB0YWJsZSBzcGVjaWZpZXMgYWxsIHN1cHBvcnRlZCBvcmRlciBleGVjdXRpb24gc3RhdHVzIHZhbHVlcy5cclxuXHJcblR5cGVcdERlc2NyaXB0aW9uXHJcbk9uZU1pbnV0ZVx0T25lIGNhbmRsZXN0aWNrIHBlciAxIG1pbnV0ZS5cclxuVHdvTWludXRlc1x0T25lIGNhbmRsZXN0aWNrIHBlciAyIG1pbnV0ZXMuXHJcblRocmVlTWludXRlc1x0T25lIGNhbmRsZXN0aWNrIHBlciAzIG1pbnV0ZXMuXHJcbkZvdXJNaW51dGVzXHRPbmUgY2FuZGxlc3RpY2sgcGVyIDQgbWludXRlcy5cclxuRml2ZU1pbnV0ZXNcdE9uZSBjYW5kbGVzdGljayBwZXIgNSBtaW51dGVzLlxyXG5UZW5NaW51dGVzXHRPbmUgY2FuZGxlc3RpY2sgcGVyIDEwIG1pbnV0ZXMuXHJcbkZpZnRlZW5NaW51dGVzXHRPbmUgY2FuZGxlc3RpY2sgcGVyIDE1IG1pbnV0ZXMuXHJcblR3ZW50eU1pbnV0ZXNcdE9uZSBjYW5kbGVzdGljayBwZXIgMjAgbWludXRlcy5cclxuSGFsZkhvdXJcdE9uZSBjYW5kbGVzdGljayBwZXIgMzAgbWludXRlcy5cclxuT25lSG91clx0T25lIGNhbmRsZXN0aWNrIHBlciAxIGhvdXIuXHJcblR3b0hvdXJzXHRPbmUgY2FuZGxlc3RpY2sgcGVyIDIgaG91cnMuXHJcbkZvdXJIb3Vyc1x0T25lIGNhbmRsZXN0aWNrIHBlciA0IGhvdXJzLlxyXG5PbmVEYXlcdE9uZSBjYW5kbGVzdGljayBwZXIgMSBkYXkuXHJcbk9uZVdlZWtcdE9uZSBjYW5kbGVzdGljayBwZXIgMSB3ZWVrLlxyXG5PbmVNb250aFx0T25lIGNhbmRsZXN0aWNrIHBlciAxIG1vbnRoLlxyXG5PbmVZZWFyXHRPbmUgY2FuZGxlc3RpY2sgcGVyIDEgeWVhci5cclxuKi9cclxuZXhwb3J0IGVudW0gSGlzdG9yaWNhbERhdGFHcmFudWxhcml0eSB7XHJcbiAgLyoqIE9uZSBjYW5kbGVzdGljayBwZXIgMSBtaW51dGUuICovXHJcbiAgT05FTUlOVVRFID0gJ09uZU1pbnV0ZScsXHJcbiAgLyoqIE9uZSBjYW5kbGVzdGljayBwZXIgMiBtaW51dGVzLiAqL1xyXG4gIFRXT01JTlVURVMgPSAnVHdvTWludXRlcycsXHJcbiAgLyoqIE9uZSBjYW5kbGVzdGljayBwZXIgMyBtaW51dGVzLiAqL1xyXG4gIFRIUkVFTUlOVVRFUyA9ICdUaHJlZU1pbnV0ZXMnLFxyXG4gIC8qKiBPbmUgY2FuZGxlc3RpY2sgcGVyIDQgbWludXRlcy4gKi9cclxuICBGT1VSTUlOVVRFUyA9ICdGb3VyTWludXRlcycsXHJcbiAgLyoqIE9uZSBjYW5kbGVzdGljayBwZXIgNSBtaW51dGVzLiAqL1xyXG4gIEZJVkVNSU5VVEVTID0gJ0ZpdmVNaW51dGVzJyxcclxuICAvKiogT25lIGNhbmRsZXN0aWNrIHBlciAxMCBtaW51dGVzLiAqL1xyXG4gIFRFTk1JTlVURVMgPSAnVGVuTWludXRlcycsXHJcbiAgLyoqIE9uZSBjYW5kbGVzdGljayBwZXIgMTUgbWludXRlcy4gKi9cclxuICBGSUZURUVOTUlOVVRFUyA9ICdGaWZ0ZWVuTWludXRlcycsXHJcbiAgLyoqIE9uZSBjYW5kbGVzdGljayBwZXIgMjAgbWludXRlcy4gKi9cclxuICBUV0VOVFlNSU5VVEVTID0gJ1R3ZW50eU1pbnV0ZXMnLFxyXG4gIC8qKiBPbmUgY2FuZGxlc3RpY2sgcGVyIDMwIG1pbnV0ZXMuICovXHJcbiAgSEFMRkhPVVIgPSAnSGFsZkhvdXInLFxyXG4gIC8qKiBPbmUgY2FuZGxlc3RpY2sgcGVyIDEgaG91ci4gKi9cclxuICBPTkVIT1VSID0gJ09uZUhvdXInLFxyXG4gIC8qKiBPbmUgY2FuZGxlc3RpY2sgcGVyIDIgaG91cnMuICovXHJcbiAgVFdPSE9VUlMgPSAnVHdvSG91cnMnLFxyXG4gIC8qKiBPbmUgY2FuZGxlc3RpY2sgcGVyIDQgaG91cnMuICovXHJcbiAgRk9VUkhPVVJTID0gJ0ZvdXJIb3VycycsXHJcbiAgLyoqIE9uZSBjYW5kbGVzdGljayBwZXIgMSBkYXkuICovXHJcbiAgT05FREFZID0gJ09uZURheScsXHJcbiAgLyoqIE9uZSBjYW5kbGVzdGljayBwZXIgMSB3ZWVrLiAqL1xyXG4gIE9ORVdFRUsgPSAnT25lV2VlaycsXHJcbiAgLyoqIE9uZSBjYW5kbGVzdGljayBwZXIgMSBtb250aC4gKi9cclxuICBPTkVNT05USCA9ICdPbmVNb250aCcsXHJcbiAgLyoqIE9uZSBjYW5kbGVzdGljayBwZXIgMSB5ZWFyLiAqL1xyXG4gIE9ORVlFQVIgPSAnT25lWWVhcicsXHJcbn1cclxuXHJcbi8qKiBTcGVjaWZpZXMgYWxsIHN1cHBvcnRlZCBicmFja2V0IG9yZGVyIGNvbXBvbmVudHMuICovXHJcbi8qXHJcbk9yZGVyIENsYXNzXHJcblRoZSBmb2xsb3dpbmcgdGFibGUgc3BlY2lmaWVzIGFsbCBzdXBwb3J0ZWQgYnJhY2tldCBvcmRlciBjb21wb25lbnRzLlxyXG5cclxuVHlwZVx0RGVzY3JpcHRpb25cclxuUHJpbWFyeVx0UHJpbWFyeSBvcmRlclxyXG5MaW1pdFx0UHJvZml0IGV4aXQgb3JkZXJcclxuU3RvcExvc3NcdExvc3MgZXhpdCBvcmRlclxyXG4qL1xyXG5leHBvcnQgZW51bSBPcmRlckNsYXNzIHtcclxuICAvKiogUHJpbWFyeSBvcmRlciAqL1xyXG4gIFBSSU1BUlkgPSAnUHJpbWFyeScsXHJcbiAgLyoqIFByb2ZpdCBleGl0IG9yZGVyICovXHJcbiAgTElNSVQgPSAnTGltaXQnLFxyXG4gIC8qKiBMb3NzIGV4aXQgb3JkZXIgKi9cclxuICBTVE9QTE9TUyA9ICdTdG9wTG9zcycsXHJcbn1cclxuXHJcbi8qKiBTdXBwb3J0ZWQgdHlwZXMgb2Ygc3RyYXRlZ2llcyBmb3IgbXVsdGktbGVnIHN0cmF0ZWd5IG9yZGVycy4gKi9cclxuLypcclxuU3RyYXRlZ3kgVHlwZXNcclxuVGhlIGZvbGxvd2luZyB0eXBlcyBvZiBzdHJhdGVnaWVzIGFyZSBzdXBwb3J0ZWQgZm9yIG11bHRpLWxlZyBzdHJhdGVneSBvcmRlcnNcclxuXHJcblR5cGVcdERlc2NyaXB0aW9uXHJcbkNvdmVyZWRDYWxsXHRDb3ZlcmVkIENhbGxcclxuTWFycmllZFB1dHNcdE1hcnJpZWQgUHV0XHJcblZlcnRpY2FsQ2FsbFNwcmVhZFx0VmVydGljYWwgQ2FsbFxyXG5WZXJ0aWNhbFB1dFNwcmVhZFx0VmVydGljYWwgUHV0XHJcbkNhbGVuZGFyQ2FsbFNwcmVhZFx0Q2FsZW5kYXIgQ2FsbFxyXG5DYWxlbmRhclB1dFNwcmVhZFx0Q2FsZW5kYXIgUHV0XHJcbkRpYWdvbmFsQ2FsbFNwcmVhZFx0RGlhZ29uYWwgQ2FsbFxyXG5EaWFnb25hbFB1dFNwcmVhZFx0RGlhZ29uYWwgUHV0XHJcbkNvbGxhclx0Q29sbGFyXHJcblN0cmFkZGxlXHRTdHJhZGRsZVxyXG5TdHJhbmdsZVx0U3RyYW5nbGVcclxuQnV0dGVyZmx5Q2FsbFx0QnV0dGVyZmx5IENhbGxcclxuQnV0dGVyZmx5UHV0XHRCdXR0ZXJmbHkgUHV0XHJcbklyb25CdXR0ZXJmbHlcdElyb24gQnV0dGVyZmx5XHJcbkNvbmRvckNhbGxcdENvbmRvclxyXG5DdXN0b21cdEN1c3RvbSwgb3IgdXNlciBkZWZpbmVkXHJcbiovXHJcbmV4cG9ydCBlbnVtIFN0cmF0ZWd5VHlwZXMge1xyXG4gIC8qKiBDb3ZlcmVkIENhbGwuICovXHJcbiAgQ09WRVJFRENBTEwgPSAnQ292ZXJlZENhbGwnLFxyXG4gIC8qKiBNYXJyaWVkIFB1dC4gKi9cclxuICBNQVJSSUVEUFVUUyA9ICdNYXJyaWVkUHV0cycsXHJcbiAgLyoqIFZlcnRpY2FsIENhbGwuICovXHJcbiAgVkVSVElDQUxDQUxMU1BSRUFEID0gJ1ZlcnRpY2FsQ2FsbFNwcmVhZCcsXHJcbiAgLyoqIFZlcnRpY2FsIFB1dC4gKi9cclxuICBWRVJUSUNBTFBVVFNQUkVBRCA9ICdWZXJ0aWNhbFB1dFNwcmVhZCcsXHJcbiAgLyoqIENhbGVuZGFyIENhbGwuICovXHJcbiAgQ0FMRU5EQVJDQUxMU1BSRUFEID0gJ0NhbGVuZGFyQ2FsbFNwcmVhZCcsXHJcbiAgLyoqIENhbGVuZGFyIFB1dC4gKi9cclxuICBDQUxFTkRBUlBVVFNQUkVBRCA9ICdDYWxlbmRhclB1dFNwcmVhZCcsXHJcbiAgLyoqIERpYWdvbmFsIENhbGwuICovXHJcbiAgRElBR09OQUxDQUxMU1BSRUFEID0gJ0RpYWdvbmFsQ2FsbFNwcmVhZCcsXHJcbiAgLyoqIERpYWdvbmFsIFB1dC4gKi9cclxuICBESUFHT05BTFBVVFNQUkVBRCA9ICdEaWFnb25hbFB1dFNwcmVhZCcsXHJcbiAgLyoqIENvbGxhci4gKi9cclxuICBDT0xMQVIgPSAnQ29sbGFyJyxcclxuICAvKiogU3RyYWRkbGUuICovXHJcbiAgU1RSQURETEUgPSAnU3RyYWRkbGUnLFxyXG4gIC8qKiBTdHJhbmdsZS4gKi9cclxuICBTVFJBTkdMRSA9ICdTdHJhbmdsZScsXHJcbiAgLyoqIEJ1dHRlcmZseSBDYWxsLiAqL1xyXG4gIEJVVFRFUkZMWUNBTEwgPSAnQnV0dGVyZmx5Q2FsbCcsXHJcbiAgLyoqIEJ1dHRlcmZseSBQdXQuICovXHJcbiAgQlVUVEVSRkxZUFVUID0gJ0J1dHRlcmZseVB1dCcsXHJcbiAgLyoqIElyb24gQnV0dGVyZmx5LiAqL1xyXG4gIElST05CVVRURVJGTFkgPSAnSXJvbkJ1dHRlcmZseScsXHJcbiAgLyoqIENvbmRvci4gKi9cclxuICBDT05ET1JDQUxMID0gJ0NvbmRvckNhbGwnLFxyXG4gIC8qKiBDdXN0b20sIG9yIHVzZXIgZGVmaW5lZC4gKi9cclxuICBDVVNUT00gPSAnQ3VzdG9tJyxcclxufVxyXG5cclxuLyoqXHJcbiAqIFNwZWNpZmllcyBhbGwgc3VwcG9ydGVkIFF1ZXN0cmFkZSBEZXZlbG9wZXIgUGxhdGZvcm0gRW51bWVydGlvbnMgVHlwZXNcclxuICogQHNlZSBodHRwczovL3d3dy5xdWVzdHJhZGUuY29tL2FwaS9kb2N1bWVudGF0aW9uL3Jlc3Qtb3BlcmF0aW9ucy9lbnVtZXJhdGlvbnMvZW51bWVyYXRpb25zXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IHF0RW51bWVyYXRpb25zID0ge1xyXG4gIC8qKiBTcGVjaWZpZXMgYWxsIHN1cHBvcnRlZCBjdXJyZW5jeSBjb2Rlcy4gKi9cclxuICBDdXJyZW5jeSxcclxuICAvKiogU3BlY2lmaWVzIGFsbCBzdXBwb3J0ZWQgbGlzdGluZyBleGNoYW5nZXMuICovXHJcbiAgTGlzdGluZ0V4Y2hhbmdlLFxyXG4gIC8qKiBTcGVjaWZpZXMgYWxsIHN1cHBvcnRlZCB1c2VyIGFjY291bnQgdHlwZXMuICovXHJcbiAgQWNjb3VudFR5cGUsXHJcbiAgLyoqIFNwZWNpZmllcyBhbGwgc3VwcG9ydGVkIGFjY291bnQgY2xpZW50IHR5cGVzLiAqL1xyXG4gIENsaWVudEFjY291bnRUeXBlLFxyXG4gIC8qKiBTcGVjaWZpZXMgYWxsIHN1cHBvcnRlZCBhY2NvdW50IHN0YXR1cyB2YWx1ZXMuICovXHJcbiAgQWNjb3VudFN0YXR1cyxcclxuICAvKiogU3BlY2lmaWVzIGFsbCBzdXBwb3J0ZWQgbWFya2V0IGRhdGEgdGljayB0eXBlcy4gKi9cclxuICBUaWNrVHlwZSxcclxuICAvKiogU3BlY2lmaWVzIGFsbCBzdXBwb3J0ZWQgb3B0aW9uIHR5cGVzLiAqL1xyXG4gIE9wdGlvblR5cGUsXHJcbiAgLyoqIFNwZWNpZmllcyBhbGwgc3VwcG9ydGVkIG9wdGlvbiBkdXJhdGlvbiB0eXBlcy4gKi9cclxuICBPcHRpb25EdXJhdGlvblR5cGUsXHJcbiAgLyoqIFNwZWNpZmllcyBhbGwgc3VwcG9ydGVkIG9wdGlvbiBleGVyY2lzZSB0eXBlcy4gKi9cclxuICBPcHRpb25FeGVyY2lzZVR5cGUsXHJcbiAgLyoqIFNwZWNpZmllcyBhbGwgc3VwcG9ydGVkIHNlY3VyaXR5IHR5cGVzLiAqL1xyXG4gIFNlY3VyaXR5VHlwZSxcclxuICAvKiogU3BlY2lmaWVzIGFsbCBzdXBwb3J0ZWQgb3JkZXIgc3RhdGUgZmlsdGVyIHR5cGVzLiAqL1xyXG4gIE9yZGVyU3RhdGVGaWx0ZXJUeXBlLFxyXG4gIC8qKiBTcGVjaWZpZXMgYWxsIHN1cHBvcnRlZCBvcmRlciBzaWRlIHZhbHVlcy4gKi9cclxuICBPcmRlckFjdGlvbixcclxuICAvKiogU3BlY2lmaWVzIGFsbCBzdXBwb3J0ZWQgY2xpZW50IG9yZGVyIHNpZGUgdmFsdWVzLiAqL1xyXG4gIE9yZGVyU2lkZSxcclxuICAvKiogU3BlY2lmaWVzIGFsbCBzdXBwb3J0ZWQgb3JkZXIgdHlwZXMuICovXHJcbiAgT3JkZXJUeXBlLFxyXG4gIC8qKiBTcGVjaWZpZXMgYWxsIHN1cHBvcnRlZCBvcmRlciBUaW1lLUluLUZvcmNlIGluc3RydWN0aW9ucy4gKi9cclxuICBPcmRlclRpbWVJbkZvcmNlLFxyXG4gIC8qKiBTcGVjaWZpZXMgYWxsIHN1cHBvcnRlZCBvcmRlciBzdGF0ZXMuICovXHJcbiAgT3JkZXJTdGF0ZSxcclxuICAvKiogU3BlY2lmaWVzIGFsbCBzdXBwb3J0ZWQgb3JkZXIgZXhlY3V0aW9uIHN0YXR1cyB2YWx1ZXMuICovXHJcbiAgSGlzdG9yaWNhbERhdGFHcmFudWxhcml0eSxcclxuICAvKiogU3BlY2lmaWVzIGFsbCBzdXBwb3J0ZWQgYnJhY2tldCBvcmRlciBjb21wb25lbnRzLiAqL1xyXG4gIE9yZGVyQ2xhc3MsXHJcbiAgLyoqIFN1cHBvcnRlZCB0eXBlcyBvZiBzdHJhdGVnaWVzIGZvciBtdWx0aS1sZWcgc3RyYXRlZ3kgb3JkZXJzLiAqL1xyXG4gIFN0cmF0ZWd5VHlwZXMsXHJcbn07XHJcblxyXG4vKipcclxuICogQGxpY2Vuc2UgTUlUIExJQ0VOU0VcclxuICpcclxuICogQENvcHlyaWdodCAoYykgMjAxOVxyXG4gKlxyXG4gKiBAYXV0aG9yIEJlbmphbWluIFZpbmNlbnQgS2FzYXBvZ2x1IChMdXhjaXVtKVxyXG4gKlxyXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYWxsIHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXHJcbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXHJcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxyXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4gKlxyXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxyXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICpcclxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTEwgS0lORCwgRVhQUkVTUyBPUlxyXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTEwgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcclxuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xyXG4gKiBJTiBUSEUgU09GVFdBUkUuXHJcbiAqXHJcbiAqL1xyXG4iXX0=

/***/ }),

/***/ "./node_modules/questrade-api-enumerations sync recursive":
/*!*******************************************************!*\
  !*** ./node_modules/questrade-api-enumerations/ sync ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => [];
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/questrade-api-enumerations sync recursive";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": () => /* binding */ __extends,
/* harmony export */   "__assign": () => /* binding */ __assign,
/* harmony export */   "__rest": () => /* binding */ __rest,
/* harmony export */   "__decorate": () => /* binding */ __decorate,
/* harmony export */   "__param": () => /* binding */ __param,
/* harmony export */   "__metadata": () => /* binding */ __metadata,
/* harmony export */   "__awaiter": () => /* binding */ __awaiter,
/* harmony export */   "__generator": () => /* binding */ __generator,
/* harmony export */   "__createBinding": () => /* binding */ __createBinding,
/* harmony export */   "__exportStar": () => /* binding */ __exportStar,
/* harmony export */   "__values": () => /* binding */ __values,
/* harmony export */   "__read": () => /* binding */ __read,
/* harmony export */   "__spread": () => /* binding */ __spread,
/* harmony export */   "__spreadArrays": () => /* binding */ __spreadArrays,
/* harmony export */   "__await": () => /* binding */ __await,
/* harmony export */   "__asyncGenerator": () => /* binding */ __asyncGenerator,
/* harmony export */   "__asyncDelegator": () => /* binding */ __asyncDelegator,
/* harmony export */   "__asyncValues": () => /* binding */ __asyncValues,
/* harmony export */   "__makeTemplateObject": () => /* binding */ __makeTemplateObject,
/* harmony export */   "__importStar": () => /* binding */ __importStar,
/* harmony export */   "__importDefault": () => /* binding */ __importDefault,
/* harmony export */   "__classPrivateFieldGet": () => /* binding */ __classPrivateFieldGet,
/* harmony export */   "__classPrivateFieldSet": () => /* binding */ __classPrivateFieldSet
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "?8465":
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?65c5":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?0f27":
/*!**********************!*\
  !*** path (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./build/src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;