import { SimpleQueue } from '../../private/core/next-rate-limiter/simple-queue';
import { IQuestradeAPIv2_0 } from '../../public/IQuestradeAPIv2_0';
import { getSnP500List } from '../../utils';
import { step2 } from './step2';
import { step3 } from './step3';
import { step4 } from './step4';

export async function getMain(
  qtApi: IQuestradeAPIv2_0,
  apiCallQ: SimpleQueue,
  startIndex: number = 0,
  endIndex?: number,
) {
  const list1 = getSnP500List(startIndex, endIndex);
  const list2 = step2(qtApi, apiCallQ, list1);
  const list3 = step3(list2);
  const list4 = step4(qtApi, apiCallQ, list3);
  const list5 = (await list4).map(symbolID => {
    return qtApi.market.getCandlesByStockId(symbolID)();
  });

  const list21 = list5.map(daterange => daterange('2021-01-01')('2021-03-05'));
  const list20 = list5.map(daterange => daterange('2020-01-01')('2021-01-01'));
  const list19 = list5.map(daterange => daterange('2019-01-01')('2020-01-01'));
  const list18 = list5.map(daterange => daterange('2018-01-01')('2019-01-01'));
  const list17 = list5.map(daterange => daterange('2017-01-01')('2018-01-01'));
  const list16 = list5.map(daterange => daterange('2016-01-01')('2017-01-01'));

  return [list21, list20, list19, list18, list17, list16]; // .map(list =>

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
}
