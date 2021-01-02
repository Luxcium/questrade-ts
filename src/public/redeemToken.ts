import { _credentialsFactory } from '../private';
import { AxiosProxyHandler, QuestradeAPIOptions } from '../typescript';
import { questradeApi } from './questradeAPI';

const _redeemToken = async (
  refreshToken: QuestradeAPIOptions,
  proxy?: AxiosProxyHandler
) => {
  const credentials = await _credentialsFactory(refreshToken, proxy);
  const questrade = await questradeApi(credentials, proxy);
  const qtApi = questrade;
  return { qtApi, credentials };
};

const redeemToken = _redeemToken;
export { redeemToken };
