import type { IBalances, Logger } from '../../../../typescript';

// + _getBalances
/** _getBalances */
export const _getBalances = (
  clientAccountGetApi: <R>(accountEndpoint: string) => () => Promise<R>,
  errorlog: Logger = (...error: any[]) => error,
) => async (): Promise<IBalances> => {
  try {
    return await clientAccountGetApi<IBalances>('/balances')();
  } catch (error) {
    void errorlog(error);

    return {
      combinedBalances: [],
      perCurrencyBalances: [],
      sodCombinedBalances: [],
      sodPerCurrencyBalances: [],
    };
  }
};
