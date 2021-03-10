import { IQuestradeAPIv2_0 } from '../public/IQuestradeAPIv2_0';
import { IEquitySymbol } from '../typescript';
import { getStock } from './getStock';

//

export async function willGetAllEquitySymbolResult(
  qtApi: IQuestradeAPIv2_0,
  list: Promise<string[]>,
): Promise<IEquitySymbol[][]> {
  return Promise.all((await list).map(symbol => getStock(qtApi)(symbol)));
}
