// tslint:disable  no-implicit-dependencies
import { default as R, identity as I } from 'ramda';
import { redeemToken } from '../..';
import { willGetSNP500List } from './getSNP500List';
// import { stockIdOf } from './../functions/questrade/stockIdOf';
import { getSymbolDetails } from './questrade';

// no auth

export const testIt = () =>
  (async () => {
    // const tedis = new Tedis({
    //   port: 6379,
    //   host: '127.0.0.1',
    // });
    try {
      const { qtApi } = await redeemToken('LMeOBW0M3xC94xu85jlSNgBHgsXFgz3N0');

      const getDetailsForItem = async (item: string) =>
        getSymbolDetails(qtApi)(item);

      const get500List = (await willGetSNP500List())[0].slice(0, 1);

      await Promise.all(
        get500List.map(async (item: string) => {
          const detailsForItem = await getDetailsForItem(item);
          console.log(detailsForItem);
          // for (const fieldName in detailsForItem) {
          // if (detailsForItem.hasOwnProperty(fieldName)) {
          // detailsForItem Object.
          // tslint:disable-next-line: no-any
          // const value = (detailsForItem as any)[fieldName];
          // const status = await tedis.hset(
          //   item,
          //   fieldName,
          //   JSON.stringify(value)
          // );
          // console.log(item, fieldName, value);
          //  console.log(null);
          // }
          // }
        })
      );

      I([qtApi, R]);
    } catch (error) {
      console.log(error.message);
    } finally {
      // tedis.close();
    }

    return void 0;
  })().catch(error => console.log('error message:', error.message));
