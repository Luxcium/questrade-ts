import { SimpleQueue } from '../private/core/next-rate-limiter/simple-queue';
import { IQuestradeAPIv2_0 } from '../public/IQuestradeAPIv2_0';
import { IEquitySymbol } from '../typescript';
import { searchAndStockSymbolDbSave } from './symbolSearchAndStockSymbolMongoSave';

export async function getSymbolIDSearchAndStockSymbolDbSave(
  qtApi: IQuestradeAPIv2_0,
  apiCallQ: SimpleQueue,
  list: Promise<
    {
      symbolId: number;
      symbolItem: IEquitySymbol;
      symbolItems: IEquitySymbol[];
    }[]
  >,
) {
  return Promise.all(
    (await list).map(async items => {
      await Promise.all(
        searchAndStockSymbolDbSave(qtApi)(apiCallQ)(items.symbolItems),
      );

      return items.symbolId;
    }),
  );
}
