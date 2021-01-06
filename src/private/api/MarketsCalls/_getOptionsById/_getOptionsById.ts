import { sideEffects } from '../../../../resources/side-effects/default-behaviour';
import {
  AxiosProxyHandler,
  Credentials,
  IOptionChain,
  IOptionChains,
} from '../../../../typescript';
import { _axiosGetApi } from '../../../routes';

const { errorlog } = sideEffects;

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
    void errorlog(error);

    return [];
  }
};
/*
  |-···――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――···-|
*/
