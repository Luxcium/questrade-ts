import type { ProxyHandlerOptions } from '../../../../resources/side-effects/types';
import type {
  IOptionChain,
  IOptionChains,
  Logger,
} from '../../../../typescript';
import { urlEncode } from '../../../../utils';

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
      await clientGetApi<IOptionChains>(
        `/symbols/${urlEncode(symbolID)}/options`,
        {
          noCaching: true,
        },
      )()
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
