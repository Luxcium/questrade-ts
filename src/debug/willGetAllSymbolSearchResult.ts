import { IQuestradeAPIv2_0 } from '../public/IQuestradeAPIv2_0';
import { ISymbolSearchResult } from '../typescript';
import { getStock } from './getStock';

//

export async function willGetAllSymbolSearchResult(
  qtApi: IQuestradeAPIv2_0,
  list: Promise<string[]>
): Promise<ISymbolSearchResult[][]> {
  return Promise.all((await list).map(symbol => getStock(qtApi)(symbol)));
}
