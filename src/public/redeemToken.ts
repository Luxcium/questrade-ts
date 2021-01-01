import { _credentialsFactory } from '../private';
import { QuestradeAPIOptions } from '../typescript';
import { questradeApi } from './questradeAPI';

const _redeemToken = async (refreshToken: QuestradeAPIOptions, proxy?: any) => {
  const credentials = await _credentialsFactory(refreshToken);
  const questrade = await questradeApi(credentials, proxy);
  const qtApi = questrade;
  return { qtApi, credentials };
};

const redeemToken = _redeemToken;
export { redeemToken };
