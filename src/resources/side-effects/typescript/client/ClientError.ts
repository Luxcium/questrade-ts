import { AxiosError } from 'axios';

import { ClientRequestConfig } from './ClientRequestConfig';
import { ClientResponse } from './ClientResponse';

void function testFunction(specimen: AxiosError): ClientError {
  return specimen;
};

export interface ClientError<T = any> extends Error {
  config: ClientRequestConfig;
  code?: string;
  request?: any;
  response?: ClientResponse<T>;
  isAxiosError: boolean;
  toJSON: () => object;
}
