import { _axiosGetApi } from '../..';
import { Credentials, IOptionChains } from '../../../typescript';

// + _getOptionsById
/** _getOptionsSymbols */
export const _getOptionsById = (credentials: Credentials) => async (
  symbolID: number
) =>
  (await _axiosGetApi(credentials)<IOptionChains>(
    `/symbols/${symbolID}/options`
  )()).optionChain;
