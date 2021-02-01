import { _credentialsFactory } from '../private/auth/_credentialsFactory';
import { errorlog } from '../resources/side-effects';
import { ApiOptions, Logger } from '../typescript';
import { preValidateToken } from '../utils';
import { questradeApiFactory } from './questradeAPI';

export async function questradeAPI(apiOptions: ApiOptions) {
  const errorloger: Logger = apiOptions.errorloger ?? errorlog;
  const proxyFactory = apiOptions.proxyFactory ?? null;
  apiOptions.token = preValidateToken(apiOptions);
  const credentials = await _credentialsFactory(apiOptions, proxyFactory);

  return {
    credentials,
    qtApi: await questradeApiFactory(credentials, proxyFactory, errorloger),
  };
}
