// tslint:disable: variable-name
import { _getEndPoinFactory } from '.';
import { QtApi } from '../../libraries';
import { ICandles } from '../../types';
export const _getCandles = (qtApi: Promise<QtApi>) => (startDate: string) => (
  interval: string = 'OneDay'
) => (endDate: string) => async (symbolID: string): Promise<ICandles> => {
  return _getEndPoinFactory<ICandles>(
    `/markets/candles/${symbolID}?startTime=${startDate}&endTime=${endDate}&interval=${interval}`
  )(qtApi);
};
