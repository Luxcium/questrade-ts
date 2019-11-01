// tslint:disable-next-line: no-implicit-dependencies
import { default as R, identity as I } from 'ramda';
import { redeemToken } from '../../';
import { willGetSNP500List } from './getSNP500List';
// import { stockIdOf } from './../functions/questrade/stockIdOf';
import { getSymbolDetails } from './questrade';

(async () => {
  //
  const { qtApi } = await redeemToken('UwCYna2fYevd3EsKUuOBIfovqrAMlHOW0');
  const getDetailsForItems = (item: string) => getSymbolDetails(qtApi)(item);
  const get500 = (await willGetSNP500List())[0];
  get500.map(item => console.log(getDetailsForItems(item)));

  // const AAPL = await stockIdOf(qtApi)('AAPL');
  // const AAPLQuote = await qtApi.getQuotes.byStockIds([AAPL]);
  // console.log(AAPLQuote);
  R.identity(getDetailsForItems);
  // console.log(get500);
  // .map(async item => {
  //   console.log('item :', item);
  //   // const detailsForItems = await getDetailsForItems(item);
  //   // console.log(detailsForItems);
  //   // return detailsForItems;
  // });
  // const getall500 = Promise.all(get500);
  // (await getall500).map(console.log);
  // console.log();
  I([qtApi, R]);
  return void 0;
})().catch(error => console.log('error message:', error.message));
