import { Enumerations } from '..';

export const testEnumerations = async () => {
  const testCurrency = async () => {
    const currency = Enumerations.Currency;

    console.log('/** Specifies all supported currency codes. */\n', currency);

    return currency;
  };
  const testListingExchange = async () => {
    const listingexchange = Enumerations.ListingExchange;

    console.log(
      '/** Specifies all supported listing exchanges. */\n',
      listingexchange
    );

    return listingexchange;
  };
  const testAccountType = async () => {
    const accounttype = Enumerations.AccountType;

    console.log(
      '/** Specifies all supported user account types. */\n',
      accounttype
    );

    return accounttype;
  };
  const testClientAccountType = async () => {
    const clientaccounttype = Enumerations.ClientAccountType;

    console.log(
      '/** Specifies all supported account client types. */\n',
      clientaccounttype
    );

    return clientaccounttype;
  };
  const testAccountStatus = async () => {
    const accountstatus = Enumerations.AccountStatus;

    console.log(
      '/** Specifies all supported account status values. */\n',
      accountstatus
    );

    return accountstatus;
  };
  const testTickType = async () => {
    const ticktype = Enumerations.TickType;

    console.log(
      '/** Specifies all supported market data tick types. */\n',
      ticktype
    );

    return ticktype;
  };
  const testOptionType = async () => {
    const optiontype = Enumerations.OptionType;

    console.log('/** Specifies all supported option types. */\n', optiontype);

    return optiontype;
  };
  const testOptionDurationType = async () => {
    const optiondurationtype = Enumerations.OptionDurationType;

    console.log(
      '/** Specifies all supported option duration types. */\n',
      optiondurationtype
    );

    return optiondurationtype;
  };
  const testOptionExerciseType = async () => {
    const optionexercisetype = Enumerations.OptionExerciseType;

    console.log(
      '/** Specifies all supported option exercise types. */\n',
      optionexercisetype
    );

    return optionexercisetype;
  };
  const testSecurityType = async () => {
    const securitytype = Enumerations.SecurityType;

    console.log(
      '/** Specifies all supported security types. */\n',
      securitytype
    );

    return securitytype;
  };
  const testOrderStateFilterType = async () => {
    const orderstatefiltertype = Enumerations.OrderStateFilterType;

    console.log(
      '/** Specifies all supported order state filter types. */\n',
      orderstatefiltertype
    );

    return orderstatefiltertype;
  };
  const testOrderAction = async () => {
    const orderaction = Enumerations.OrderAction;

    console.log(
      '/** Specifies all supported order side values. */\n',
      orderaction
    );

    return orderaction;
  };
  const testOrderSide = async () => {
    const orderside = Enumerations.OrderSide;

    console.log(
      '/** Specifies all supported client order side values. */\n',
      orderside
    );

    return orderside;
  };
  const testOrderType = async () => {
    const ordertype = Enumerations.OrderType;

    console.log('/** Specifies all supported order types. */\n', ordertype);

    return ordertype;
  };
  const testOrderTimeInForce = async () => {
    const ordertimeinforce = Enumerations.OrderTimeInForce;

    console.log(
      '/** Specifies all  ordertimeinforcesupported order Time-In-Force instructions. */\n',
      ordertimeinforce
    );

    return ordertimeinforce;
  };
  const testOrderState = async () => {
    const orderstate = Enumerations.OrderState;

    console.log('/** Specifies all supported order states. */\n', orderstate);

    return orderstate;
  };
  const testHistoricalDataGranularity = async () => {
    const historicaldatagranularity = Enumerations.HistoricalDataGranularity;

    console.log(
      '/** Specifies all supported historicaldatagranularity order execution status values. */\n',
      historicaldatagranularity
    );

    return historicaldatagranularity;
  };
  const testOrderClass = async () => {
    const orderclass = Enumerations.OrderClass;

    console.log(
      '/** Specifies all supported bracket order components. */\n',
      orderclass
    );

    return orderclass;
  };
  const testStrategyTypes = async () => {
    const strategytypes = Enumerations.StrategyTypes;

    console.log(
      '/** Supported t strategytypesypes of strategies for multi-leg strategy orders. */\n',
      strategytypes
    );

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
