import { _credentialsFactory } from '../private/auth/credentialsFactory';
import {
  ClientHandlerFactory,
  Logger,
  QuestradeAPIOptions,
} from '../typescript';
import { questradeApi } from './questradeAPI';

async function _redeemToken(
  refreshToken: QuestradeAPIOptions,
  proxy?: ClientHandlerFactory,
  errorlog: Logger = (error: any) => error,
) {
  const credentials = await _credentialsFactory(refreshToken, proxy);
  const questrade = await questradeApi(credentials, proxy, errorlog);
  const qtApi = questrade;
  return { credentials, qtApi };
}

export { _redeemToken as redeemToken };
