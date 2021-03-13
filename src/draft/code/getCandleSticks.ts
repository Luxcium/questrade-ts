import {
  Currency,
  HistoricalDataGranularity,
} from 'questrade-api-enumerations';

import { IQuestradeAPIv2_0 } from '../../public/IQuestradeAPIv2_0';
import { echo } from '../../resources/side-effects';
import { ICandleWithInfos, ISymbolInfo } from '../../typescript';
import { getFirstStockResult } from './getFirstStockResult';
import { getServerTime } from './getServerTime';

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
      symbolInfos: ISymbolInfo,
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
        symbolID,
        symbolName,
        valid: !!symbolID,
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
              end,
              start,
              ...candle_
            } = candle;

            const candleStickOCHLV = [open, close, high, low, volume];

            return {
              end,
              ...candle_,
              candleStickOCHLV,
              epochEnd,
              epochStart: epochStart - epochEnd,
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
