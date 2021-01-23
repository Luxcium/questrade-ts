import { _credentialsFactory } from '../private/auth/_credentialsFactory';
import { errorlog } from '../resources/side-effects';
import {
  ClientHandlerFactory,
  Credentials,
  Logger,
  QuestradeAPIOptions,
} from '../typescript';
import { questradeApi } from './questradeAPI';

type RedeemOptions = {
  refreshToken: QuestradeAPIOptions;
  errorloger?: Logger;
  proxyFactory?: (credentials?: Credentials) => ClientHandlerFactory;
};
async function _redeemToken(reddemOptions: RedeemOptions) {
  const errorloger: Logger = reddemOptions.errorloger ?? errorlog;
  const refreshToken: QuestradeAPIOptions = reddemOptions.refreshToken;
  const proxyFactory = reddemOptions.proxyFactory;

  const credentials = await _credentialsFactory(refreshToken, proxyFactory);

  return {
    credentials,
    qtApi: await questradeApi(credentials, proxyFactory, errorloger),
  };
}

export { _redeemToken as redeemToken };
