import { AxiosStatic, default as axios } from 'axios';
import { _axiosGetApi } from '../../..';
import { IOptionChains } from '../../../../typescript';
import { Credentials } from '../../../typescript';

// + _getOptionsById
/** _getOptionsSymbols */
export const _getOptionsById = (_axios: AxiosStatic = axios) => (
  credentials: Credentials
) => async (symbolID: number) =>
  (await _axiosGetApi(_axios)(credentials)<IOptionChains>(
    `/symbols/${symbolID}/options`
  )()).optionChain;
