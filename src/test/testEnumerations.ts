import { Enumerations } from '../api';

export const testEnumerations = async () => {
  const testCurrency = async (mute: boolean = true) => {
    const currency = Enumerations.Currency;
    if (!mute) {
      console.log('/** Specifies all supported currency codes. */\n', currency);
    }
    return currency;
  };
  const testListingExchange = async (mute: boolean = true) => {
    const listingexchange = Enumerations.ListingExchange;
    if (!mute) {
      console.log(
        '/** Specifies all supported listing exchanges. */\n',
        listingexchange
      );
    }
    return listingexchange;
  };
  const testAccountType = async (mute: boolean = true) => {
    const accounttype = Enumerations.AccountType;
    if (!mute) {
      console.log(
        '/** Specifies all supported user account types. */\n',
        accounttype
      );
    }
    return accounttype;
  };
  const testClientAccountType = async (mute: boolean = true) => {
    const clientaccounttype = Enumerations.ClientAccountType;
    if (!mute) {
      console.log(
        '/** Specifies all supported account client types. */\n',
        clientaccounttype
      );
    }
    return clientaccounttype;
  };
  const testAccountStatus = async (mute: boolean = true) => {
    const accountstatus = Enumerations.AccountStatus;
    if (!mute) {
      console.log(
        '/** Specifies all supported account status values. */\n',
        accountstatus
      );
    }
    return accountstatus;
  };
  const testTickType = async (mute: boolean = true) => {
    const ticktype = Enumerations.TickType;
    if (!mute) {
      console.log(
        '/** Specifies all supported market data tick types. */\n',
        ticktype
      );
    }
    return ticktype;
  };
  const testOptionType = async (mute: boolean = true) => {
    const optiontype = Enumerations.OptionType;
    if (!mute) {
      console.log('/** Specifies all supported option types. */\n', optiontype);
    }
    return optiontype;
  };
  const testOptionDurationType = async (mute: boolean = true) => {
    const optiondurationtype = Enumerations.OptionDurationType;
    if (!mute) {
      console.log(
        '/** Specifies all supported option duration types. */\n',
        optiondurationtype
      );
    }
    return optiondurationtype;
  };
  const testOptionExerciseType = async (mute: boolean = true) => {
    const optionexercisetype = Enumerations.OptionExerciseType;
    if (!mute) {
      console.log(
        '/** Specifies all supported option exercise types. */\n',
        optionexercisetype
      );
    }
    return optionexercisetype;
  };
  const testSecurityType = async (mute: boolean = true) => {
    const securitytype = Enumerations.SecurityType;
    if (!mute) {
      console.log(
        '/** Specifies all supported security types. */\n',
        securitytype
      );
    }
    return securitytype;
  };
  const testOrderStateFilterType = async (mute: boolean = true) => {
    const orderstatefiltertype = Enumerations.OrderStateFilterType;
    if (!mute) {
      console.log(
        '/** Specifies all supported order state filter types. */\n',
        orderstatefiltertype
      );
    }
    return orderstatefiltertype;
  };
  const testOrderAction = async (mute: boolean = true) => {
    const orderaction = Enumerations.OrderAction;
    if (!mute) {
      console.log(
        '/** Specifies all supported order side values. */\n',
        orderaction
      );
    }
    return orderaction;
  };
  const testOrderSide = async (mute: boolean = true) => {
    const orderside = Enumerations.OrderSide;
    if (!mute) {
      console.log(
        '/** Specifies all supported client order side values. */\n',
        orderside
      );
    }
    return orderside;
  };
  const testOrderType = async (mute: boolean = true) => {
    const ordertype = Enumerations.OrderType;
    if (!mute) {
      console.log('/** Specifies all supported order types. */\n', ordertype);
    }
    return ordertype;
  };
  const testOrderTimeInForce = async (mute: boolean = true) => {
    const ordertimeinforce = Enumerations.OrderTimeInForce;
    if (!mute) {
      console.log(
        '/** Specifies all  ordertimeinforcesupported order Time-In-Force instructions. */\n',
        ordertimeinforce
      );
    }
    return ordertimeinforce;
  };
  const testOrderState = async (mute: boolean = true) => {
    const orderstate = Enumerations.OrderState;
    if (!mute) {
      console.log('/** Specifies all supported order states. */\n', orderstate);
    }
    return orderstate;
  };
  const testHistoricalDataGranularity = async (mute: boolean = true) => {
    const historicaldatagranularity = Enumerations.HistoricalDataGranularity;
    if (!mute) {
      console.log(
        '/** Specifies all supported historicaldatagranularity order execution status values. */\n',
        historicaldatagranularity
      );
    }
    return historicaldatagranularity;
  };
  const testOrderClass = async (mute: boolean = true) => {
    const orderclass = Enumerations.OrderClass;
    if (!mute) {
      console.log(
        '/** Specifies all supported bracket order components. */\n',
        orderclass
      );
    }
    return orderclass;
  };
  const testStrategyTypes = async (mute: boolean = true) => {
    const strategytypes = Enumerations.StrategyTypes;
    if (!mute) {
      console.log(
        '/** Supported t strategytypesypes of strategies for multi-leg strategy orders. */\n',
        strategytypes
      );
    }
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
