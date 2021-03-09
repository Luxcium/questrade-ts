import mongoose from 'mongoose';
import {
  Currency,
  HistoricalDataGranularity,
} from 'questrade-api-enumerations';

import { qtAPIv2_0 } from '..';
import { SimpleQueue } from '../private/core/next-rate-limiter/simple-queue';
import { IQuestradeAPIv2_0 } from '../public/IQuestradeAPIv2_0';
import { CandleWithInfos } from '../resources/schema/candle-with-infos';
import { StockSymbol } from '../resources/schema/stock-symbol';
import { echo, getMyToken } from '../resources/side-effects';
import { redisProxyHandler } from '../resources/side-effects/proxies/client/redis/redis-client-proxy-handler-class';
import {
  ICandle,
  ICandleWithInfos,
  IQuote,
  ISymbol,
  ISymbolInfos,
  ISymbolSearchResult,
} from '../typescript';
import { promiseOf } from '../utils';
import { willGetSNP500StringList } from './development/getSNP500List';

// -----------------------------------------------------------------------------!!

export interface QNodesValue2 {
  cb?: any;
  config: any;
  fn: <R>(config?: unknown) => R;
  functionKind?: 'other';
}

const once = { onlyOnceMain: true, onlyOnceMongoose: 0 };

export async function main() {
  echo(`Will execute main: ${once.onlyOnceMain}`);
  if (!once.onlyOnceMain) {
    return false;
  }

  once.onlyOnceMain = false;
  const { qtApi } = await mainRedis();
  const connection = await mogooseConnect();
  const apiCallQ = new SimpleQueue();
  const result = getMain(qtApi, apiCallQ, 0, 505);

  void apiCallQ;
  await result;
  void apiCallQ.addToQueue({
    config: 'any',
    fn(_): any {
      return connection.disconnect();
    },
  });

  return true;
}

main();

// -----------------------------------------------------------------------------!!

export async function getMain(
  qtApi: IQuestradeAPIv2_0,
  apiCallQ: SimpleQueue,
  startIndex: number = 0,
  endIndex?: number,
) {
  const list1 = step1(startIndex, endIndex);
  const mapCandleSticks = getCandleSticks(qtApi)();
  const mapCandleSticks2020 = mapCandleSticks('2020-01-01')('2021-01-01')();
  const mapCandleSticks2019 = mapCandleSticks('2019-01-01')('2020-01-01')();
  const mapCandleSticks2018 = mapCandleSticks('2018-01-01')('2019-01-01')();
  const mapCandleSticks2017 = mapCandleSticks('2017-01-01')('2018-01-01')();
  const mapCandleSticks2016 = mapCandleSticks('2016-01-01')('2017-01-01')();
  const mapCandleSticks2015 = mapCandleSticks('2015-01-01')('2016-01-01')();
  const results = [
    mapCandleSticks2020,
    mapCandleSticks2019,
    mapCandleSticks2018,
    mapCandleSticks2017,
    mapCandleSticks2016,
    mapCandleSticks2015,
  ].map(candleSticks => map(list1, candleSticks));

  return Promise.all(
    results.map(async result => {
      return Promise.all(
        (await result).map(async xy =>
          Promise.all(
            (await xy).map(async x => {
              if (x.valid === true) {
                const config = {
                  Model: CandleWithInfos,
                  value: x,
                };

                await apiCallQ.addToQueue({
                  config,
                  fn: saveMongo,
                });
              }

              return x;
            }),
          ),
        ),
      );
    }),
  );
}

export async function mainRedis() {
  const proxyFactory = redisProxyHandler({
    httpConnectProxy: true,
  });

  void proxyFactory;
  const { qtApi, apiCallQ } = await qtAPIv2_0({
    accountCallsPerHour: 30_000,
    accountCallsPerSecond: 30,
    marketCallsPerHour: 1500,
    marketCallsPerSecond: 20,
    proxyFactory,
    token: getMyToken,
  });

  return { apiCallQ, qtApi };
}

export async function mogooseConnect() {
  if (once.onlyOnceMongoose > 0) {
    throw new Error('Error when trying to db.connect(): ALREADY CONNECTED');
  }

  once.onlyOnceMongoose += 1;

  let connection: typeof mongoose;
  try {
    connection = await mongoose.connect('mongodb://127.0.0.1:27017/test', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.error('db.connect() ERROR:', error);

    throw new Error(`Error when trying to db.connect(): ${error.message}`);
  }

  console.log("we're connected!");
  console.info(`once.onlyOnceMongoose === ${once.onlyOnceMongoose}`);

  return {
    disconnect: async () => {
      console.log(
        'db disconnected!',
        await connection.disconnect().then(t => {
          once.onlyOnceMongoose -= 1;
          console.info(`once.onlyOnceMongoose === ${once.onlyOnceMongoose}`);

          return t;
        }),
      );
    },
  };
}

export async function step1(startIndex: number = 0, endIndex?: number) {
  return (await willGetSNP500StringList()).slice(startIndex, endIndex);
}

//
export const getStock = (qtApi: IQuestradeAPIv2_0) => async (
  symbol: string | Promise<string>,
  offset?: number,
): Promise<ISymbolSearchResult[]> => {
  const symb = await promiseOf(symbol);

  return qtApi.search.stock(symb, offset);
};

export const getFirstStockResult = (qtApi: IQuestradeAPIv2_0) => async (
  symbol: string | Promise<string>,
  offset?: number,
): Promise<ISymbolSearchResult> => {
  const symb = await promiseOf(symbol);
  const [firstResult] = await qtApi.search.stock(symb, offset);

  return firstResult;
};

export const getStockId = (qtApi: IQuestradeAPIv2_0) => async (
  symbol: string | Promise<string>,
  offset?: number,
): Promise<number> => {
  const symb = await promiseOf(symbol);
  const [firstResult] = await qtApi.search.stock(symb, offset);

  return firstResult?.symbolId || 1;
};

export const getMarketQuote = (qtApi: IQuestradeAPIv2_0) => async (
  stockId: number | Promise<number>,
): Promise<IQuote> => {
  const id = await promiseOf(stockId);
  const [firstResult] = await qtApi.getQuotes.byStockIds([id]);

  return firstResult;
};

export const getMarketQuotes = (qtApi: IQuestradeAPIv2_0) => async (
  stockIds: number[] | Promise<number[]>,
): Promise<IQuote[]> => {
  const idList = await promiseOf(stockIds);

  return qtApi.getQuotes.byStockIds([...idList]);
};

export const getSymbol = (qtApi: IQuestradeAPIv2_0) => async (
  stockId: number | Promise<number>,
): Promise<ISymbol> => {
  const id = await promiseOf(stockId);
  const [firstResult] = await qtApi.getSymbols.byStockIds([id]);

  return firstResult;
};

export function getSymbols(qtApi: IQuestradeAPIv2_0) {
  return async (stockIds: number[] | Promise<number[]>): Promise<ISymbol[]> => {
    const idList = await promiseOf(stockIds);

    return qtApi.getSymbols.byStockIds([...idList]);
  };
}

export const getServerTime = (qtApi: IQuestradeAPIv2_0) => async () => {
  return qtApi.account.getServerTime();
};

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
export async function map<R, T>(
  list: Promise<T[]>,
  funct: (item: T) => R,
): Promise<R[]> {
  return (await list).map(funct);
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

export type GetCandelStick = (
  symbol: string | Promise<string>,
) => Promise<ICandleWithInfos[]>;

export function getCandleSticks(qtApi: IQuestradeAPIv2_0) {
  const serverTime_ = getServerTime(qtApi)();

  return (
    interval:
      | string
      | HistoricalDataGranularity = HistoricalDataGranularity.ONEDAY,
  ) => (startTime: string) => (endTime: string) => (offset?: number) => async (
    symbol: string | Promise<string>,
  ): Promise<ICandleWithInfos[]> => {
    let description: string,
      serverTime: Date,
      symbolID: number,
      symbolInfos: ISymbolInfos,
      symbolName: string;

    try {
      const firstStockResult = await getFirstStockResult(qtApi)(symbol, offset);
      const {
        currency = Currency.USD,
        symbol: symbolName_ = 'N/A',
        symbolId = Number.NaN,
        securityType = 'N/A',
        description: description_ = 'N/A',
        listingExchange = 'N/A',
      } = firstStockResult;

      symbolName = symbolName_;
      symbolID = symbolId;
      description = description_;
      serverTime = await serverTime_;
      symbolInfos = {
        currency,
        description,
        listingExchange,
        securityType,
        serverTime,
        symbolId,
        symbolName,
        valid: !!symbolId,
      };
    } catch (error) {
      console.error(error.message);

      return [
        {
          valid: false,
        },
      ];
    }

    try {
      const candleList = await qtApi.market.getCandlesByStockId(symbolID)(
        interval.toString(),
      )(startTime)(endTime);

      return candleList.map(
        (candle): ICandleWithInfos => {
          try {
            const strStart = candle.start?.toString() ?? Date.now();
            const strEnd = candle.end?.toString() ?? Date.now();
            const epochStart = new Date(strStart).valueOf() / 1000;
            const epochEnd = new Date(strEnd).valueOf() / 1000;
            const {
              open = -1,
              close = -1,
              high = -1,
              low = -1,
              volume = -1,
              ...candle_
            } = candle;

            const candleStickOCHLV = [open, close, high, low, volume];

            return {
              ...candle_,
              candleStickOCHLV,
              epochEnd,
              epochStart,
              ...symbolInfos,
            };
          } catch (error) {
            echo(error.message);

            return {
              valid: false,
            };
          }
        },
      );
    } catch (error) {
      console.error(error.message);

      return [
        {
          valid: false,
        },
      ];
    }
  };
}

export async function step2(qtApi: IQuestradeAPIv2_0, list: Promise<string[]>) {
  return Promise.all((await list).map(getStock(qtApi)));
}

export async function step3(list: Promise<ISymbolSearchResult[][]>) {
  return map(list, (item: ISymbolSearchResult[]) => {
    const symbolItems = item;
    const [symbolItem] = symbolItems;
    const symbolId = symbolItem?.symbolId || 1;

    return {
      symbolId,
      symbolItem,
      symbolItems,
    };
  });
}

export async function step4(
  qtApi: IQuestradeAPIv2_0,
  apiCallQ: SimpleQueue,
  list: Promise<
    {
      symbolId: number;
      symbolItem: ISymbolSearchResult;
      symbolItems: ISymbolSearchResult[];
    }[]
  >,
) {
  return Promise.all(
    (await list).map(async items => {
      const { symbolId, symbolItems } = items;
      symbolItems.map(async symbItem => {
        const symbId = symbItem?.symbolId || 1;
        const stockIds = [symbId];
        const symbol = await qtApi.getSymbols.byStockIds(stockIds);
        symbol.map(async (uniqueSymbol: ISymbol) => {
          const config = { Model: StockSymbol, value: uniqueSymbol };

          apiCallQ.addToQueue({
            config,
            fn: saveMongo,
          });

          return uniqueSymbol;
        });
      });

      return symbolId;
    }),
  );
}

export function symbIDtoCandle(qtApi: IQuestradeAPIv2_0) {
  return (list: Promise<number>[]) => (startTime: string) => async (
    endTime: string,
  ) => {
    return list.map(async symbolId => {
      const candels = await qtApi.market.getCandlesByStockId(await symbolId)()(
        new Date(startTime).toISOString(),
      )(new Date(endTime).toISOString());

      await Promise.all(candlesMap(candels));

      return symbolId;
    });
  };
}

function candlesMap(candels: ICandle[]) {
  return candels.map(mogooseConnectAndSaveCandleMaper);
}

async function mogooseConnectAndSaveCandleMaper<T>(
  val: T,
  index: number,
  array: T[],
) {
  const value = JSON.parse(JSON.stringify(val)) as T;

  void index;
  void array;

  return value;
}

export async function saveMongo<T, D extends mongoose.Document<T>>(config: {
  value: T;
  Model: mongoose.Model<D>;
}): Promise<void | D> {
  const { value, Model } = config;
  console.log('will process');

  const doc = new Model(value);

  return doc
    .save()
    .then(result => {
      console.log('Document saved →', result);

      return result;
    })
    .catch(console.error.bind(console, 'Model.save() ERROR:'));
}

// export async function getMainOLD(
//   qtApi: IQuestradeAPIv2_0,
//   apiCallQ: SimpleQueue,
//   startIndex: number = 0,
//   endIndex?: number,
// ) {
//   const list1 = step1(startIndex, endIndex);
//   // const list2 = step2(qtApi /* , apiCallQ */, list1);
//   // const list3 = step3(list2);
//   // const list4 = step4(qtApi, apiCallQ, list3);
//   // const list5 = (await list4).map(symbolID => {
//   void apiCallQ;
//   // return qtApi.market.getCandlesByStockId(symbolID)();
//   // });
//   const mapCandleSticks = getCandleSticks(qtApi)()('2021-01-01')(
//     '2021-03-05',
//   )();

//   const result = await map(list1, mapCandleSticks);

//   result.map(async xy =>
//     (await xy).map(x => {
//       if (x.valid === true) {
//         const config = {
//           Model: CandleWithInfos,
//           value: x,
//         };

//         apiCallQ.addToQueue({
//           config,
//           fn: saveMongo,
//         });
//       }

//       return x;
//       // return x.valid
//       //   ? console.log(x)
//       //   : console.error('********* !!! ERROR:', x);
//     }),
//   );

// CandleWithInfos

// const list21 = list5.map(daterange => daterange('2021-01-01')('2021-03-05'));
// const list20 = list5.map(daterange => daterange('2020-01-01')('2021-01-01'));
// const list19 = list5.map(daterange => daterange('2019-01-01')('2020-01-01'));
// const list18 = list5.map(daterange => daterange('2018-01-01')('2019-01-01'));
// const list17 = list5.map(daterange => daterange('2017-01-01')('2018-01-01'));
// const list16 = list5.map(daterange => daterange('2016-01-01')('2017-01-01'));

// return [list21, list20, list19, list18, list17, list16]; // .map(list =>
//   list.map(async candles => {
//     (await candles).map(candle => {
//       const config = { Model: Candle, value: candle };
//       apiCallQ.addToQueue({
//         config,
//         fn: saveMongo,
//       });

//       return candle;
//     });
//   }),
// );
// }

// const matrixRatio = [
//   [open / open, open / close, open / high, open / low],
//   [close / open, close / close, close / high, close / low],
//   [high / open, high / close, high / high, high / low],
//   [low / open, low / close, low / high, low / low],
// ];

// const matrixDiff = [
//   [open - open, open - close, open - high, open - low],
//   [close - open, close - close, close - high, close - low],
//   [high - open, high - close, high - high, high - low],
//   [low - open, low - close, low - high, low - low],
// ];

/*

symbol → Symbol name.
symbolId → Internal unique symbol identifier.
description → Symbol description.
currency → Symbol currency (ISO format).
securityType → (Stock, Option, Bond, Right, Gold, MutualFund, Index)
listingExchange → (TSX,TSXV,CNSX,MX,NASDAQ,NYSE,NYSEAM,ARCA,OPRA,PinkSheets,OTCBB)
serverTime → Current server time in ISO format and Eastern time zone.


? & % + *******************************************-
OneMinute	One candlestick per 1 minute.
TwoMinutes	One candlestick per 2 minutes.
ThreeMinutes	One candlestick per 3 minutes.
FourMinutes	One candlestick per 4 minutes.
FiveMinutes	One candlestick per 5 minutes.
TenMinutes	One candlestick per 10 minutes.
FifteenMinutes	One candlestick per 15 minutes.
TwentyMinutes	One candlestick per 20 minutes.
HalfHour	One candlestick per 30 minutes.
OneHour	One candlestick per 1 hour.
TwoHours	One candlestick per 2 hours.
FourHours	One candlestick per 4 hours.
OneDay	One candlestick per 1 day.
OneWeek	One candlestick per 1 week.
OneMonth	One candlestick per 1 month.
OneYear	One candlestick per 1 year.
? & % + *******************************************-
Parameter	Type	Description
id
integer
Internal symbol identifier.
Can occur in the ‘location’ header only.
startTime
DateTime
Beginning of the candlestick range.
endTime
DateTime
End of the candlestick range.
interval
Enumeration
Interval of a single candlestick.
See Historical Data Granularity for all allowed values.
? & % + *******************************************-
*/
