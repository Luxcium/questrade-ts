import { _credentialsFactory } from '../private';
import { ClientProxyHandler, QuestradeAPIOptions } from '../typescript';
import { questradeApi } from './questradeAPI';

async function _redeemToken(
  refreshToken: QuestradeAPIOptions,
  proxy?: ClientProxyHandler,
) {
  const credentials = await _credentialsFactory(refreshToken, proxy);
  const questrade = await questradeApi(credentials, proxy);
  const qtApi = questrade;
  return { credentials, qtApi };
}

const redeemToken = _redeemToken;
export { redeemToken };
