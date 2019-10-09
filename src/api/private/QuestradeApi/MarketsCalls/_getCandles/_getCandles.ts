import { AxiosStatic, default as axios } from 'axios';
import { Credentials, ICandle, ICandles } from '../../../../typescript';
import { getHash } from '../../../../utils';
import { _axiosGetApi } from '../../../core/AxiosRequestApiFactory';

// + _getCandles
/** _getCandles */
export const _getCandles = (_axios: AxiosStatic = axios) => (
  credentials: Credentials
) => (startDate: string) => (endDate: string) => (
  interval: string = 'OneDay'
) => async (symbolID: number): Promise<ICandle[]> =>
  (await _axiosGetApi(_axios)(credentials)<ICandles>(
    `/markets/candles/${symbolID}?startTime=${startDate}&endTime=${endDate}&interval=${interval}`
  )()).candles.map(result => {
    result.symbolID = symbolID;
    result.granularity = interval;
    const [short, long] = getHash(JSON.stringify(result));
    result.hash = { short, long };
    return result;
  });
