import { Credentials, ICandle, ICandles, IProxy } from '../../../../typescript';
import { getHash } from '../../../../utils';
import { _axiosGetApi } from '../../../routes';

// + _getCandles
/** _getCandles */
export const _getCandles = (credentials: Credentials, proxy?: IProxy) => (
  symbolID: number
) => (interval: string = 'OneDay') => (startDate: string) => async (
  endDate: string
): Promise<ICandle[]> => {
  try {
    return (
      await _axiosGetApi(
        credentials,
        proxy
      )<ICandles>(
        `/markets/candles/${symbolID}?startTime=${startDate}&endTime=${endDate}&interval=${interval}`
      )()
    ).candles.map(result => {
      result.symbolID = symbolID;
      result.granularity = interval;
      const [short, long] = getHash(JSON.stringify(result));
      result.hash = { short, long };
      return result;
    });
  } catch (error) {
    console.error(error);
    return [];
  }
};
