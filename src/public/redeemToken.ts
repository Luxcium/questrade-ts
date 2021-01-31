import { _credentialsFactory } from '../private/auth/_credentialsFactory';
import { errorlog } from '../resources/side-effects';
import { ApiOptions, Credentials, Logger, ProxyFactory_ } from '../typescript';
import { questradeApi } from './questradeAPI';

type RedeemOptions = {
  refreshToken: ApiOptions;
  errorloger?: Logger;
  proxyFactory?: (credentials?: Credentials) => ProxyFactory_;
};

async function _redeemToken(reddemOptions: RedeemOptions) {
  const errorloger: Logger = reddemOptions.errorloger ?? errorlog;
  const refreshToken: ApiOptions = reddemOptions.refreshToken;
  const proxyFactory = reddemOptions.proxyFactory ?? null;

  const credentials = await _credentialsFactory(refreshToken, proxyFactory);

  return {
    credentials,
    qtApi: await questradeApi(credentials, proxyFactory, errorloger),
  };
}

export { _redeemToken as redeemToken };
