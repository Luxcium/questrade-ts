// import { errorlog } from '../../../../resources/side-effects';
import type { ProxyHandlerOptions } from '../../../../resources/side-effects/types';
import type { IEquitySymbol, Logger } from '../../../../typescript';
import { _getEquitySymbolAll } from './_getEquitySymbolAll';

// + _getEquitySymbol
/** _getEquitySymbol */
export const _getEquitySymbol = (
  clientGetApi: <R>(
    endpoint: string,
    handlerOptions: ProxyHandlerOptions,
  ) => () => Promise<R>,
  errorlog: Logger = (...error: any[]) => error,
) => async (prefix: string, offset = 0): Promise<IEquitySymbol[]> => {
  try {
    //
    const symbols = await _getEquitySymbolAll(clientGetApi)(prefix, offset);
    const count = symbols.length;
    let result: IEquitySymbol | null = null;

    if (symbols[0]) {
      [result] = symbols;
      result.count = count || 0;
      result.all = symbols;

      return [result];
    }

    return [];
    //
  } catch (error) {
    //
    errorlog(error);

    return [];

    //
  }
};
