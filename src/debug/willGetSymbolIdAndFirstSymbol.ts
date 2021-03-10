import { IEquitySymbol } from '../typescript';
import { mapping } from './mapping';


export async function willGetSymbolIdAndFirstSymbol(
  list: Promise<IEquitySymbol[][]>
) {
  return mapping(list, (item: IEquitySymbol[]) => {
    const symbolItems = item;
    const [symbolItem] = symbolItems;
    const symbolId = symbolItem?.symbolId || 1;

    return {
      symbolId,
      symbolItem,
      symbolItems,
    };
  });
}
