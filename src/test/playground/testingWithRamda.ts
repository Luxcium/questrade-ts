// tslint:disable  no-implicit-dependencies
import { default as R, identity as I } from 'ramda';
import { Tedis } from 'tedis';
import { redeemToken } from '../../';
import { willGetSNP500List } from './getSNP500List';
// import { stockIdOf } from './../functions/questrade/stockIdOf';
import { getSymbolDetails } from './questrade';

// no auth

export const testIt = () =>
  (async () => {
    //
    const tedis = new Tedis({
      port: 6379,
      host: '127.0.0.1',
    });
    //
    try {
      const { qtApi } = await redeemToken('AN00tx5rD6xP5kPcZveLOJB1i74gaBX70');
      // tslint:disable-next-line: no-debugger
      debugger;
      const getDetailsForItems = async (item: string) => {
        try {
          return getSymbolDetails(qtApi)(item);
        } catch (error) {
          return;
        }
      };
      // console.log(await getDetailsForItems('AAPL'));
      const get500 = (await willGetSNP500List())[0];
      get500./* slice(0, 10). */ map(async item => {
        try {
          const details = await getDetailsForItems(item);
          console.log('details :', details);
        } catch (error) {
          console.log('error :', error);
        }
      });

      // try {
      //   const details = await getDetailsForItems(myItem);
      //   console.log('details :', details);
      // } catch (error) {
      //   console.log('error :', error);
      // }

      // const descriptors = Object.getOwnPropertyNames(details);
      // getOwnPropertyDescriptors(details)
      // for (const fieldName in details) {
      //   if (details.hasOwnProperty(fieldName)) {
      //     const value = fieldName;
      //     const status = await tedis.hset(
      //       item,
      //       fieldName,
      //       JSON.stringify(value)
      //     );
      //     status ? console.log(item, fieldName, value) : console.log(null);
      //   }
      // }

      // const AAPL = await stockIdOf(qtApi)('AAPL');
      // const AAPLQuote = await qtApi.getQuotes.byStockIds([AAPL]);
      // console.log(AAPLQuote);
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
      I([qtApi, R, get500, Tedis]);
    } catch (error) {
      console.log(error.message);
    } finally {
      tedis.close();
    }

    return void 0;
  })().catch(error => console.log('error message:', error.message));
