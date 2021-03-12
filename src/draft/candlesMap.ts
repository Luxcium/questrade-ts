import { ICandle } from '../typescript';
import { mogooseConnectAndSaveCandleMaper } from "./mogooseConnectAndSaveCandleMaper";


export function candlesMap(candels: ICandle[]) {
  return candels.map(mogooseConnectAndSaveCandleMaper);
}
