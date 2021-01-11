import {
  ClientProxyHandler,
  Credentials,
  IOptionChain,
  IOptionChains,
} from '../../../../typescript';
import { _clientGetApi } from '../../../routes';

// + _getOptionsById
/*
  |-···――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――···-|
*/
/** _getOptionsSymbols */
export const _getOptionsById = (
  credentials: Credentials,
  proxy?: ClientProxyHandler,
  errorlog: (error: any) => any = (error: any) => error,
) => async (symbolID: number): Promise<IOptionChain[]> => {
  try {
    return (
      await _clientGetApi(
        credentials,
        proxy,
      )<IOptionChains>(`/symbols/${symbolID}/options`)()
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
