import { getIEXSymbolList } from './get-iex-list';
import { IEXSymbolItem } from './typings/symbol-item-typings';

export const mapableIEXSymbols = async (
  mapper: <R>(item: IEXSymbolItem) => R,
) => (await getIEXSymbolList()).map(item => mapper(item));
