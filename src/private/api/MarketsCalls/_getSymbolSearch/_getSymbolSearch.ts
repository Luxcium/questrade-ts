import {
  AxiosProxyHandler,
  Credentials,
  ISymbolSearchResult,
} from '../../../../typescript';
import { _getSymbolSearchAll } from './_getSymbolSearchAll';

// + _getSymbolSearch
/** _getSymbolSearch */
export const _getSymbolSearch = (
  credentials: Credentials,
  proxy?: AxiosProxyHandler
) => async (
  prefix: string,
  offset: number = 0
): Promise<ISymbolSearchResult[]> => {
  try {
    //
    const symbols = await _getSymbolSearchAll(credentials, proxy)(
      prefix,
      offset
    );
    const count = symbols.length;
    let result: ISymbolSearchResult | null = null;
    if (!!symbols[0]) {
      result = symbols[0];
      result.count = count || 0;
      result.all = symbols;
      return [result];
    }
    return [];
    //
  } catch (error) {
    //
    console.log(error);
    return [];

    //
  }
};
