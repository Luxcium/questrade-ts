// Import { errorlog } from '../../../../resources/side-effects';
import { ProxyHandlerOptions } from '../../../../resources/side-effects/types';
import { ICandle, ICandles, Logger } from '../../../../typescript';
// TODO: remove dependencies to nodeJS crypt-module making it optional ...
import { urlEncode, urlEncodeDateTool } from '../../../../utils';

// + _getCandles endpointFormatDateTool
/** _getCandles */
export const _getCandles = (
  clientGetApi: <R>(
    endpoint: string,
    handlerOptions: ProxyHandlerOptions,
  ) => () => Promise<R>,
  errorlog: Logger = (...error: any[]) => error,
) => (symbolID: number) => (interval: string = 'OneDay') => (
  startDate: string,
) => async (endDate: string): Promise<ICandle[]> => {
  try {
    return (
      //
      (
        await clientGetApi<ICandles>(
          `/markets/candles/${urlEncode(symbolID)}?${urlEncodeDateTool(
            startDate,
            endDate,
          )}&interval=${urlEncode(interval)}`,
          { noCaching: true },
        )()
      ).candles.map(result => {
        result.symbolID = symbolID;
        result.granularity = interval;

        return result;
      })
    );
  } catch (error) {
    void errorlog(error.message);

    return [];
  }
};
