import { AxiosStatic, default as axios } from 'axios';
import * as utils from '../../../../utils';
import { _getQuestradeApi } from '../../../QuestradeApi_QtApi';
import { _credentialsFactory } from '../_credentialsFactory';

export const _redeemToken = (_axios: AxiosStatic = axios) => async (
  refreshToken: string
) => {
  const credentials = await _credentialsFactory(_axios)(refreshToken);
  const questrade = await _getQuestradeApi(_axios)(credentials);
  const qtApi = questrade;
  return { qtApi, credentials, utils };
};
