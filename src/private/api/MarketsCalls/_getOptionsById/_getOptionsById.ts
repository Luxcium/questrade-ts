import { errorlog } from '../../../../resources/side-effects';
import {
  ClientProxyHandler,
  Credentials,
  IOptionChain,
  IOptionChains,
} from '../../../../typescript';
import { _clientGetApi } from '../../../routes';

// const { errorlog } = sideEffects;

// + _getOptionsById
/*
  |-···――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――···-|
*/
/** _getOptionsSymbols */
export const _getOptionsById = (
  credentials: Credentials,
  proxy?: ClientProxyHandler,
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
