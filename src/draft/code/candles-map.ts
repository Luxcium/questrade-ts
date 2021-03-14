import { ICandle } from '../../typescript';
import { mogooseConnectAndSaveCandleMaper } from './mogoose-connect-and-save-candle-maper';

export function candlesMap(candels: ICandle[]) {
  return candels.map(mogooseConnectAndSaveCandleMaper);
}
