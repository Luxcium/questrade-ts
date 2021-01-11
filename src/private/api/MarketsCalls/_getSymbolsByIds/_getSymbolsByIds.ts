// import { errorlog } from '../../../../resources/side-effects';
import { ISymbol, ISymbols, Logger } from '../../../../typescript';

// + _getSymbolsByIDs
/** _getSymbolFromSymbolID */
export const _getSymbolsByIds = (
  clientGetApi: <R>(endpoint: string) => () => Promise<R>,
  errorlog: Logger = (...error: any[]) => error,
) => async (stockId: number[]): Promise<ISymbol[]> => {
  try {
    return (await clientGetApi<ISymbols>(`/symbols?ids=${stockId.join()}`)())
      .symbols;
  } catch (error) {
    void errorlog(error);

    return [];
  }
};
