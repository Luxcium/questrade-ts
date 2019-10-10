import { AxiosStatic, default as axios } from 'axios';
import { _credentialsFactory } from '../private';
import { questradeApi } from './questradeAPI';

const _redeemToken = (_axios: AxiosStatic = axios) => async (
  refreshToken: string
) => {
  const credentials = await _credentialsFactory(_axios)(refreshToken);
  const questrade = await questradeApi(credentials);
  const qtApi = questrade;
  return { qtApi, credentials };
};

const redeemToken = _redeemToken(axios);
export { redeemToken };
