import { _credentialsFactory } from '../private';
import {
  ClientStaticHandlerFactory,
  Logger,
  QuestradeAPIOptions,
} from '../typescript';
import { questradeApi } from './questradeAPI';

async function _redeemToken(
  refreshToken: QuestradeAPIOptions,
  proxy?: ClientStaticHandlerFactory,
  errorlog: Logger = (error: any) => error,
) {
  const credentials = await _credentialsFactory(refreshToken, proxy);
  const questrade = await questradeApi(credentials, proxy, errorlog);
  const qtApi = questrade;
  return { credentials, qtApi };
}

const redeemToken = _redeemToken;
export { redeemToken };
