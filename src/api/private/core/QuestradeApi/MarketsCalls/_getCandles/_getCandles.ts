import { AxiosStatic, default as axios } from 'axios';
import { _axiosGetApi } from '../../../..';
import { ICandle, ICandles } from '../../../../../typings';
import { getHash } from '../../../../../utils';
import { Credentials } from '../../../../typescript';

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
