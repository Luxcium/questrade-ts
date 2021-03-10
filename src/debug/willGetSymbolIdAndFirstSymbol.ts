import { ISymbolSearchResult } from '../typescript';
import { mapping } from './mapping';


export async function willGetSymbolIdAndFirstSymbol(
  list: Promise<ISymbolSearchResult[][]>
) {
  return mapping(list, (item: ISymbolSearchResult[]) => {
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
