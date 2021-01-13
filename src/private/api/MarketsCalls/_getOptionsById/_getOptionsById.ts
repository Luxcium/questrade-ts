import { ProxyHandlerOptions } from '../../../../resources/side-effects/types';
import { IOptionChain, IOptionChains, Logger } from '../../../../typescript';

// + _getOptionsById
/*
  |-···――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――···-|
*/
/** _getOptionsSymbols */
export const _getOptionsById = (
  clientGetApi: <R>(
    endpoint: string,
    handlerOptions: ProxyHandlerOptions,
  ) => () => Promise<R>,
  errorlog: Logger = (...error: any[]) => error,
) => async (symbolID: number): Promise<IOptionChain[]> => {
  try {
    return (
      await clientGetApi<IOptionChains>(`/symbols/${symbolID}/options`, {
        noCaching: true,
      })()
    ).optionChain;
    /*
  |-···――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――···-|
    */
  } catch (error) {
    void errorlog(error);

    return [];
  }
};
/*
  |-···――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――···-|
*/
