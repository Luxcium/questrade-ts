import { SimpleQueue } from '../private/core/next-rate-limiter/simple-queue';
import { echo } from '../resources/side-effects';
import { getSymbolIDSearchAndStockSymbolDbSave } from './getSymbolIDSearchAndStockSymbolDbSave';
import { mainRedis } from './mainRedis';
import { mogooseConnect } from './mogooseConnect';
import { willGetAllSymbolSearchResult } from './willGetAllSymbolSearchResult';
import { willGetSnP500List } from './willGetSnP500List';
import { willGetSymbolIdAndFirstSymbol } from './willGetSymbolIdAndFirstSymbol';

export const once = { onlyOnceMain: true, onlyOnceMongoose: 0 };

export async function main() {
  echo(`Will execute main: ${once.onlyOnceMain}`);
  if (!once.onlyOnceMain) {
    return false;
  }

  once.onlyOnceMain = false;
  const { qtApi } = await mainRedis();
  const connection = await mogooseConnect();
  const apiCallQ = new SimpleQueue();
  const list1 = willGetSnP500List({ endIndex: 505, startIndex: 0 });
  const list2 = willGetAllSymbolSearchResult(qtApi, list1);
  const list3 = willGetSymbolIdAndFirstSymbol(list2);
  const list4 = getSymbolIDSearchAndStockSymbolDbSave(qtApi, apiCallQ, list3);

  void list4;
  const result = list4; // getMain(qtApi, apiCallQ, list1);

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

void 0;

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
