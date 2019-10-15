import * as utils from '../../../../utils';
import { _getQuestradeApi } from '../../../QuestradeApi_QtApi';
import { _credentialsFactory } from '../_credentialsFactory';

export const _redeemToken = async (refreshToken: string) => {
  const credentials = await _credentialsFactory(refreshToken);
  const questrade = await _getQuestradeApi(credentials);
  const qtApi = questrade;
  return { qtApi, credentials, utils };
};
