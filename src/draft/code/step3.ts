import { IEquitySymbol } from '../../typescript';


export async function step3(list: Promise<IEquitySymbol[][]>) {
  return Promise.all(
    (await list).map(async (item) => {
      const symbolItems = item;
      const [symbolItem] = symbolItems;
      const symbolId = symbolItem?.symbolId || 1;

      return {
        symbolId,
        symbolItem,
        symbolItems,
      };
    })
  );
}
