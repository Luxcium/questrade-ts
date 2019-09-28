import { ICandle } from '../../types';

export const transformCandle = (stockSymbol: string, symbolId: number) => (
  obj: ICandle
) => ({
  start: new Date(obj.start!).getTime(),
  end: new Date(obj.end!).getTime(),
  startTime: new Date(obj.start!),
  endTime: new Date(obj.end!),
  day: Math.floor(new Date(obj.start!).getTime() / 86400000),
  stockSymbol,
  symbolId,
  candel: {
    low: obj.low!,
    high: obj.high!,
    open: obj.open!,
    close: obj.close!,
    volume: obj.volume!,
  },
});
