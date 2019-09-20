// tslint:disable: variable-name
import { _getBalances } from '.';
import { QtApi } from '../../libraries';
export const _balances = (qtApi: Promise<QtApi>) => {
  const combinedCADCurrent = async () =>
    (await _getBalances(qtApi)).combinedBalances.CAD;
  const combinedUSDCurrent = async () =>
    (await _getBalances(qtApi)).combinedBalances.USD;
  const CADCurrent = async () =>
    (await _getBalances(qtApi)).perCurrencyBalances.CAD;

  const USDCurrent = async () =>
    (await _getBalances(qtApi)).perCurrencyBalances.USD;
  const combinedCADStartOfDay = async () =>
    (await _getBalances(qtApi)).sodCombinedBalances.CAD;
  const combinedUSDStartOfDay = async () =>
    (await _getBalances(qtApi)).sodCombinedBalances.USD;
  const CADStartOfDay = async () =>
    (await _getBalances(qtApi)).sodPerCurrencyBalances.CAD;
  const USDStartOfDay = async () =>
    (await _getBalances(qtApi)).sodPerCurrencyBalances.USD;

  return {
    current: {
      CAD: CADCurrent,
      USD: USDCurrent,
      allInCAD: combinedCADCurrent,
      allInUSD: combinedUSDCurrent,
    },
    startOfDay: {
      CAD: CADStartOfDay,
      USD: USDStartOfDay,
      allInCAD: combinedCADStartOfDay,
      allInUSD: combinedUSDStartOfDay,
    },
  };
};
