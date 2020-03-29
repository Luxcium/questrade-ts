"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
exports._myBalances = function (myBalances) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, perCADcurrent, perUSDcurrent, _b, combinedCADcurrent, combinedUSDcurrent, _c, perCADstartOfDay, perUSDstartOfDay, _d, combinedCADstartOfDay, combinedUSDstartOfDay, perCurrency, combined, CAD, USD, current, startOfDay;
    return tslib_1.__generator(this, function (_e) {
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