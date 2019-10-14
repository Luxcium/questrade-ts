import { AxiosStatic, default as axios } from 'axios';
import {
  Credentials,
  IOptionChain,
  IOptionChains,
} from '../../../../../typescript';
import { _axiosGetApi } from '../../../core/API_RequestFactory_AXIOS';

// + _getOptionsById
/** _getOptionsSymbols */
export const _getOptionsById = (_axios: AxiosStatic = axios) => (
  credentials: Credentials
) => async (symbolID: number): Promise<IOptionChain[]> =>
  (await _axiosGetApi(_axios)(credentials)<IOptionChains>(
    `/symbols/${symbolID}/options`
  )()).optionChain;
