// import { errorlog } from '../../../../resources/side-effects';
import { ISymbols, Logger } from '../../../../typescript';

// + _getSymbolSearchCount
/** _getSymbolSearch */
export const _getSymbolSearchCount = (
  clientGetApi: <R>(endpoint: string) => () => Promise<R>,
  errorlog: Logger = (...error: any[]) => error,
) => async (prefix: string): Promise<number> => {
  try {
    const endpoint = `/symbols/search?prefix=${prefix}`;
    const getSymbols = clientGetApi<ISymbols>(endpoint);
    const symbols = await getSymbols();

    return symbols.symbols.length;
  } catch (error) {
    void errorlog(error);

    return Number.NaN;
  }
};
