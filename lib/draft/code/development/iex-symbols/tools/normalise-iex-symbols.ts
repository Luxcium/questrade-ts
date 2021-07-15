import { IEXSymbolItem } from '../typings/symbol-item-typings';

export function normaliseIEXSymbolList(
  iexSymbols: IEXSymbolItem[],
): IEXSymbolItem[] {
  const strignified: string = JSON.stringify(iexSymbols).toString();
  const parsedBack = JSON.parse(strignified) as IEXSymbolItem[];
  const parsedBackSet: Iterable<IEXSymbolItem> = new Set(
    parsedBack.map(item => ({
      ...item,
      symbol: item.symbol.split('=')[0],
    })),
  );

  return [...parsedBackSet];
}
