// tslint:disable: prefer-const
import { _accountEndPoinFactory } from '.';
import { QtApi } from '../../../libraries';
import { Balances, IBalances } from '../../../types';
export const _getBalances = (qtApi: QtApi) => async (): Promise<Balances> => {
  const balances: IBalances = await _accountEndPoinFactory<IBalances>(
    '/balances'
  )(qtApi);

  let {
    perCurrencyBalances,
    combinedBalances,
    sodPerCurrencyBalances,
    sodCombinedBalances,
  } = balances;

  const balanceList = [
    perCurrencyBalances,
    combinedBalances,
    sodPerCurrencyBalances,
    sodCombinedBalances,
  ];
  const newbalanceList = balanceList.map(item => {
    const [CAD, USD] = item;
    return { CAD, USD };
  });

  const [
    perCurrencyBalancesTransformed,
    combinedBalancesTransformed,
    sodPerCurrencyBalancesTransformed,
    sodCombinedBalancesTransformed,
  ] = newbalanceList;
  return {
    perCurrencyBalances: perCurrencyBalancesTransformed,
    combinedBalances: combinedBalancesTransformed,
    sodPerCurrencyBalances: sodPerCurrencyBalancesTransformed,
    sodCombinedBalances: sodCombinedBalancesTransformed,
  };
};
