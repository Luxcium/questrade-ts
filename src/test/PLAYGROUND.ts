import { default as ƒ } from 'ramda';
import { redeemToken } from '..';
import { log, setDateRange, void0 } from '../api/utils';
import { IQtApiAccount } from '../typescript';
// tslint:disable-next-line: no-unused-expression

(async () => {
  const dateRange = setDateRange(2);

  const redeem = await redeemToken('BfHXYThKbYiRAmEMYzEvMTWeFyiYFQBJ0')
    .then(result => {
      return result;
    })
    .catch(err => console.log(err));
  if (!redeem) {
    throw new Error('Redeem token did not return acceptable response');
  }
  const today = new Date(Date.now()).toISOString();
  const { credentials, qtApi } = redeem;
  // log;

  async function totalExecutions(
    stockSymbol: string,
    side: 'STC' | 'BTO' = 'STC',
    qtApiAccount: IQtApiAccount
  ) {
    const stock = stockSymbol.toLowerCase();
    return (await dateRange(qtApiAccount.executions, today))
      .filter(item => {
        const itemSymbol = item.symbol.toLowerCase().indexOf(stock) >= 0;
        return !!item.price && !!itemSymbol; // (
      })
      .filter(item => item.side === side)
      .map(item => {
        // console.log(item);
        const comissionCharged = !!item.commission ? item.commission : 0;
        const avgExecPrice = !!item.price
          ? item.price * item.quantity * 100
          : 0;
        const creationTime = !!item.timestamp ? item.timestamp : '';
        const comission =
          side === 'STC' ? comissionCharged * -1 : comissionCharged * 1;

        const priceTotal =
          side === 'STC'
            ? avgExecPrice + comission
            : -1 * (avgExecPrice + comission);
        return [creationTime, priceTotal, comissionCharged, avgExecPrice] as [
          string,
          number,
          number,
          number
        ];
      })
      .reduce((prev, item) => item[1] + prev, 0);
  }
  log(
    'totalExecutions:',
    await totalExecutions('bac', 'STC', qtApi.get.account)
  );

  const _stcTotal = (getAccount: IQtApiAccount) => (stockSymbol: string) =>
    totalExecutions(stockSymbol, 'STC', getAccount);
  const _btoTotal = (getAccount: IQtApiAccount) => (stockSymbol: string) =>
    totalExecutions(stockSymbol, 'BTO', getAccount);
  const btoTotal = _btoTotal(qtApi.get.account);
  const stcTotal = _stcTotal(qtApi.get.account);
  const netStcBto = async (stockSymbol: string) =>
    (await stcTotal(stockSymbol)) + (await btoTotal(stockSymbol));

  log(await stcTotal('bac'), await btoTotal('bac'), await netStcBto('bac'));

  void0([dateRange, credentials, qtApi, ƒ, log]);
})().catch(error => console.log('PlayGround error message:', error.message));

export const xyz = (async () => {
  //
  return void 0 && ƒ;
})().catch(error => console.log('error message:', error.message));
// order id 584497639
