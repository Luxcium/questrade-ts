"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
exports.testEnumerations = async () => {
    const testCurrency = async () => {
        const currency = __1.Enumerations.Currency;
        console.log('/** Specifies all supported currency codes. */\n', currency);
        return currency;
    };
    const testListingExchange = async () => {
        const listingexchange = __1.Enumerations.ListingExchange;
        console.log('/** Specifies all supported listing exchanges. */\n', listingexchange);
        return listingexchange;
    };
    const testAccountType = async () => {
        const accounttype = __1.Enumerations.AccountType;
        console.log('/** Specifies all supported user account types. */\n', accounttype);
        return accounttype;
    };
    const testClientAccountType = async () => {
        const clientaccounttype = __1.Enumerations.ClientAccountType;
        console.log('/** Specifies all supported account client types. */\n', clientaccounttype);
        return clientaccounttype;
    };
    const testAccountStatus = async () => {
        const accountstatus = __1.Enumerations.AccountStatus;
        console.log('/** Specifies all supported account status values. */\n', accountstatus);
        return accountstatus;
    };
    const testTickType = async () => {
        const ticktype = __1.Enumerations.TickType;
        console.log('/** Specifies all supported market data tick types. */\n', ticktype);
        return ticktype;
    };
    const testOptionType = async () => {
        const optiontype = __1.Enumerations.OptionType;
        console.log('/** Specifies all supported option types. */\n', optiontype);
        return optiontype;
    };
    const testOptionDurationType = async () => {
        const optiondurationtype = __1.Enumerations.OptionDurationType;
        console.log('/** Specifies all supported option duration types. */\n', optiondurationtype);
        return optiondurationtype;
    };
    const testOptionExerciseType = async () => {
        const optionexercisetype = __1.Enumerations.OptionExerciseType;
        console.log('/** Specifies all supported option exercise types. */\n', optionexercisetype);
        return optionexercisetype;
    };
    const testSecurityType = async () => {
        const securitytype = __1.Enumerations.SecurityType;
        console.log('/** Specifies all supported security types. */\n', securitytype);
        return securitytype;
    };
    const testOrderStateFilterType = async () => {
        const orderstatefiltertype = __1.Enumerations.OrderStateFilterType;
        console.log('/** Specifies all supported order state filter types. */\n', orderstatefiltertype);
        return orderstatefiltertype;
    };
    const testOrderAction = async () => {
        const orderaction = __1.Enumerations.OrderAction;
        console.log('/** Specifies all supported order side values. */\n', orderaction);
        return orderaction;
    };
    const testOrderSide = async () => {
        const orderside = __1.Enumerations.OrderSide;
        console.log('/** Specifies all supported client order side values. */\n', orderside);
        return orderside;
    };
    const testOrderType = async () => {
        const ordertype = __1.Enumerations.OrderType;
        console.log('/** Specifies all supported order types. */\n', ordertype);
        return ordertype;
    };
    const testOrderTimeInForce = async () => {
        const ordertimeinforce = __1.Enumerations.OrderTimeInForce;
        console.log('/** Specifies all  ordertimeinforcesupported order Time-In-Force instructions. */\n', ordertimeinforce);
        return ordertimeinforce;
    };
    const testOrderState = async () => {
        const orderstate = __1.Enumerations.OrderState;
        console.log('/** Specifies all supported order states. */\n', orderstate);
        return orderstate;
    };
    const testHistoricalDataGranularity = async () => {
        const historicaldatagranularity = __1.Enumerations.HistoricalDataGranularity;
        console.log('/** Specifies all supported historicaldatagranularity order execution status values. */\n', historicaldatagranularity);
        return historicaldatagranularity;
    };
    const testOrderClass = async () => {
        const orderclass = __1.Enumerations.OrderClass;
        console.log('/** Specifies all supported bracket order components. */\n', orderclass);
        return orderclass;
    };
    const testStrategyTypes = async () => {
        const strategytypes = __1.Enumerations.StrategyTypes;
        console.log('/** Supported t strategytypesypes of strategies for multi-leg strategy orders. */\n', strategytypes);
        return strategytypes;
    };
    return {
        testCurrency,
        testListingExchange,
        testAccountType,
        testClientAccountType,
        testAccountStatus,
        testTickType,
        testOptionType,
        testOptionDurationType,
        testOptionExerciseType,
        testSecurityType,
        testOrderStateFilterType,
        testOrderAction,
        testOrderSide,
        testOrderType,
        testOrderTimeInForce,
        testOrderState,
        testHistoricalDataGranularity,
        testOrderClass,
        testStrategyTypes,
    };
};
//# sourceMappingURL=testEnumerations.js.map