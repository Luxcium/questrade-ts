import { IBalances } from '../../../../typescript';

export const _myBalances = (myBalance: Promise<IBalances>) => async () => {
  const balances = await myBalance;
  const [perCADcurrent, perUSDcurrent] = balances.perCurrencyBalances;
  const [combinedCADcurrent, combinedUSDcurrent] = balances.combinedBalances;
  const [perCADstartOfDay, perUSDstartOfDay] = balances.sodPerCurrencyBalances;
  const [
    combinedCADstartOfDay,
    combinedUSDstartOfDay,
  ] = balances.sodCombinedBalances;

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
