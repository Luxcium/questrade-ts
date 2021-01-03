import {
  AxiosProxyHandler,
  Credentials,
  IOptionChain,
  IOptionChains,
} from '../../../../typescript';
import { _axiosGetApi } from '../../../routes';

// + _getOptionsById
/*
  |-···――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――···-|
*/
/** _getOptionsSymbols */
export const _getOptionsById = (
  credentials: Credentials,
  proxy?: AxiosProxyHandler,
) => async (symbolID: number): Promise<IOptionChain[]> => {
  try {
    return (
      await _axiosGetApi(
        credentials,
        proxy,
      )<IOptionChains>(`/symbols/${symbolID}/options`)()
    ).optionChain;
    /*
  |-···――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――···-|
    */
  } catch (error) {
    console.error(error);
    return [];
  }
};
/*
  |-···――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――···-|
*/
