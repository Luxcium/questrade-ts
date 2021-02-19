import { questradeApiFactory } from '../private/api/_getQuestradeApi';
import { _credentialsFactory } from '../private/auth/_credentialsFactory';
import { ApiCallQ_ } from '../private/core/next-rate-limiter/queue';
import { errorlog } from '../resources/side-effects';
import { ApiOptions, Logger } from '../typescript';
import { preValidateToken } from '../utils';

export async function questradeAPI(apiOptions: ApiOptions) {
  //

  const errorloger: Logger = apiOptions.errorloger ?? errorlog;
  const apiCallQ = new ApiCallQ_();
  void apiCallQ;

  apiOptions.token = preValidateToken(apiOptions);
  const proxyFactory = apiOptions.proxyFactory ?? null;
  const credentials = await _credentialsFactory(
    apiOptions,
    apiCallQ,
    proxyFactory,
  );

  return {
    credentials,
    qtApi: await questradeApiFactory(
      credentials,
      apiCallQ,
      proxyFactory,
      errorloger,
    ),
  };
}
