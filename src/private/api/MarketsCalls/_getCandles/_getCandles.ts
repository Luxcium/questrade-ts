// import { errorlog } from '../../../../resources/side-effects';
import { ICandle, ICandles, Logger } from '../../../../typescript';
// TODO: remove dependencies to nodeJS crypt-module making it optional ...
import { endpointFormatDateTool } from '../../../../utils';

// + _getCandles endpointFormatDateTool
/** _getCandles */
export const _getCandles = (
  clientGetApi: <R>(endpoint: string) => () => Promise<R>,
  errorlog: Logger = (...error: any[]) => error,
) => (symbolID: number) => (interval: string = 'OneDay') => (
  startDate: string,
) => async (endDate: string): Promise<ICandle[]> => {
  try {
    return (
      //
      (
        await clientGetApi<ICandles>(
          `/markets/candles/${symbolID}?${endpointFormatDateTool(
            startDate,
            endDate,
          )}&interval=${interval}`,
        )()
      ).candles.map(result => {
        result.symbolID = symbolID;
        result.granularity = interval;

        // // TODO: remove dependencies to nodeJS crypto module making it optional ...
        // const [short, long] = getHash(JSON.stringify(result));
        // result.hash = { short, long };
        return result;
      })
    );
  } catch (error) {
    void errorlog(error);
    return [];
  }
};
