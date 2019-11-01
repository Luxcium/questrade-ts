import { redeemToken } from 'questrade-ts';
import redis from 'redis';
import { willGetSNP500List } from '../getSNP500List';
import { getSymbolDetails, getSymbolId } from './';
import { myToken } from './ramdaQT';

export function timingLoop(snp500Array: string[]) {
  return (hertz: number) => (mappingFunction: any, finallyFunction: any) => {
    console.time('timingLoop');
    const mappingLoop = (snp500list: string[] | null, _hertz: number) => {
      setTimeout(async () => {
        if (!!snp500list) {
          const [head, ...tail] = snp500list;
          mappingFunction(head);
          const list = tail.length > 0 ? tail : null;
          mappingLoop(list, _hertz);
        } else {
          finallyFunction(() => console.timeEnd('timingLoop'));
        }
      }, 1);
    };

    return () => mappingLoop(snp500Array, hertz);
  };
}

function setStockSymbolRedisClient(
  port: number,
  host?: string,
  options?: redis.ClientOpts
) {
  const myRedisClient = redis.createClient(port, host, options);
  myRedisClient.on('error', err => {
    console.error('Error ', err);
  });
  return (symboldetails: any) => {
    return async (stockSymbol: string) => {
      const key = stockSymbol;
      const value = await symboldetails(stockSymbol);
      const valueString = JSON.stringify(value);
      console.log('object', key, valueString);

      return;
    };
  };
}

async function getSnP500StringList() {
  const [symbolsAndList] = await willGetSNP500List();
  return symbolsAndList;
}

export { setStockSymbolRedisClient, getSnP500StringList, getSymbolId };

const isReady: boolean = true;
(async IIFE => {
  if (IIFE.isReady) {
    const { qtApi, credentials } = await redeemToken(myToken);
    // credentials.remainingRequests.maximums
    const snp500List = await IIFE.getSnP500StringList();
    const getSymbol = IIFE.getSymbolDetails(qtApi);
    const mySnp500List = snp500List.slice(0, 500);

    const { timingLoop: timinloop } = IIFE;

    const myLoop = timinloop(mySnp500List)(5)(
      async (stockSymbol: string) => {
        const value = await getSymbol(stockSymbol);
        const valueString = JSON.stringify(value);
        console.log(valueString);
        if (!!credentials && !!credentials.remainingRequests) {
          console.log('timingLoop.ts', credentials.remainingRequests);
        }

        /* TESTING: COMMENTS */

        return;
      },
      async (cb: any) => {
        cb();
      }
    );
    myLoop();
    myLoop();
    myLoop();
    myLoop();

    return { qtApi, mysnp500List: mySnp500List /*, StockSymbolRedisClient */ };
  }
  return;
})({
  timingLoop,
  setStockSymbolRedisClient,
  getSnP500StringList,
  getSymbolDetails,
  isReady,
}).catch(error => console.log('error message:', error.message));

// import { IQuestradeApi } from 'questrade-ts/typings/typescript';
// import { getSymbolId } from './';
// *** mappingLoop -----------v
// *** mappingLoop -----------^
// closeFuntion:any,
// ***
// myRedisClient.SET(key, valueString);
// myRedisClient.GET(key, console.info);
// ***
// closeFuntion(myRedisClient)
// .map(async item => {
// console.time('sometime');
// return tuningFork(0.5).then(async () => {
// console.log(await getSymbol(item));
// console.timeEnd('sometime');
// });
// });
// await tuningFork(2);
// const StockSymbolRedisClient = IIFE.setStockSymbolRedisClient(6379);
// console.log(await getSymbol('AAPL'));
// await StockSymbolRedisClient(getSymbol)('AAPL');
// StockSymbolRedisClient(getSymbol)('AAPL');
// ***
// myRedisClient.SET(key, valueString);
// TESTING: COMMENTS
// myRedisClient.GET(key, console.info);
// ***
// myRedisClient.quit()
