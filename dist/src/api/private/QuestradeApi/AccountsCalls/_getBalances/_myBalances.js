"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._myBalances = (balances) => {
    const myBalances = balances;
    const [perCADcurrent, perUSDcurrent] = myBalances.perCurrencyBalances;
    const [combinedCADcurrent, combinedUSDcurrent] = myBalances.combinedBalances;
    const [perCADstartOfDay, perUSDstartOfDay,] = myBalances.sodPerCurrencyBalances;
    const [combinedCADstartOfDay, combinedUSDstartOfDay,] = myBalances.sodCombinedBalances;
    const perCurrency = {
        CAD: {
            startOfDay: perCADstartOfDay,
            current: perCADcurrent,
        },
        USD: {
            startOfDay: perUSDstartOfDay,
            current: perUSDcurrent,
        },
    };
    const combined = {
        CAD: {
            startOfDay: combinedCADstartOfDay,
            current: combinedCADcurrent,
        },
        USD: {
            startOfDay: combinedUSDstartOfDay,
            current: combinedUSDcurrent,
        },
    };
    const CAD = {
        perCurrency: {
            startOfDay: perCADstartOfDay,
            current: perCADcurrent,
        },
        combined: {
            startOfDay: combinedCADstartOfDay,
            current: combinedCADcurrent,
        },
    };
    const USD = {
        combined: {
            startOfDay: combinedUSDstartOfDay,
            current: combinedUSDcurrent,
        },
        perCurrency: {
            startOfDay: perUSDstartOfDay,
            current: perUSDcurrent,
        },
    };
    const current = {
        perCurrency: {
            CAD: perCADcurrent,
            USD: perUSDcurrent,
        },
        combined: {
            CAD: combinedCADcurrent,
            USD: combinedUSDcurrent,
        },
    };
    const startOfDay = {
        combined: {
            CAD: combinedCADstartOfDay,
            USD: combinedUSDstartOfDay,
        },
        perCurrency: {
            CAD: perCADstartOfDay,
            USD: perUSDstartOfDay,
        },
    };
    return { perCurrency, combined, current, startOfDay, CAD, USD };
};
//# sourceMappingURL=_myBalances.js.map