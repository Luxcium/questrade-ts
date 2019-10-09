import { AxiosStatic, default as axios } from 'axios';
import { _credentialsFactory, _getQuestradeApi } from '../..';
import * as utils from '../../../utils';

export const _redeemToken = (_axios: AxiosStatic = axios) => async (
  refreshToken: string
) => {
  const credentials = await _credentialsFactory(_axios)(refreshToken);
  const questrade = _getQuestradeApi(_axios)(credentials);
  const qtApi = questrade;
  return { qtApi, credentials, utils };
};
