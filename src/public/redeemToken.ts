import { _credentialsFactory } from '../private/auth/_credentialsFactory';
import { errorlog } from '../resources/side-effects';
import { ApiOptions, Logger } from '../typescript';
import { preValidateToken } from '../utils';
import { questradeApiFactory } from './questradeAPI';

export async function questradeAPI(apiOptions: ApiOptions) {
  //
  const errorloger: Logger = apiOptions.errorloger ?? errorlog;
  apiOptions.token = preValidateToken(apiOptions);

  const proxyFactory = apiOptions.proxyFactory ?? undefined;
  const credentials = await _credentialsFactory(apiOptions, proxyFactory);

  // const proxyFactory_: ProxyFactory_ = proxyFactory(credentials);
  return {
    credentials,
    qtApi: await questradeApiFactory(credentials, proxyFactory, errorloger),
  };
}
