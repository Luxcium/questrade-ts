import { _unSafeAxiosGetData } from './tools/_un-pure-un-safe-axios-get-data';
import { normaliseIEXSymbolList } from './tools/normalise-iex-symbols';
import { iextradingUrl } from './typings/constituents-uri-to-json';
import { IEXSymbolItem } from './typings/symbol-item-typings';

export async function getUnsafeRawIEXList(): Promise<IEXSymbolItem[]> {
  return _unSafeAxiosGetData<IEXSymbolItem[]>(iextradingUrl);
}

export async function getIEXSymbolList(): Promise<IEXSymbolItem[]> {
  const dataGet = await getUnsafeRawIEXList();

  return normaliseIEXSymbolList(dataGet);
}
