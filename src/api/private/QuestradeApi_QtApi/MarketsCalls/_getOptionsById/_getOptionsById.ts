import {
  Credentials,
  IOptionChain,
  IOptionChains,
} from '../../../../../typescript';
import { _axiosGetApi } from '../../../core/API_Request_AXIOS';

// + _getOptionsById
/** _getOptionsSymbols */
export const _getOptionsById = (credentials: Credentials) => async (
  symbolID: number
): Promise<IOptionChain[]> =>
  (await _axiosGetApi(credentials)<IOptionChains>(
    `/symbols/${symbolID}/options`
  )()).optionChain;
