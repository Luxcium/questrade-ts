import { IQuestradeAPIv2_0 } from '../../public/IQuestradeAPIv2_0';
import { candlesMap } from './candlesMap_b';


export function symbIDtoCandle(qtApi: IQuestradeAPIv2_0) {
  return (list: Promise<number>[]) => (startTime: string) => async (
    endTime: string
  ) => {
    return list.map(async (symbolId) => {
      const candels = await qtApi.market.getCandlesByStockId(await symbolId)()(
        new Date(startTime).toISOString()
      )(new Date(endTime).toISOString());

      await Promise.all(candlesMap(candels));

      return symbolId;
    });
  };
}
