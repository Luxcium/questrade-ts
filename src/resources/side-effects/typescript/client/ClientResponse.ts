import { AxiosResponse } from 'axios';

import { ClientRequestConfig } from './ClientRequestConfig';

void function testFunction(specimen: AxiosResponse): ClientResponse {
  return specimen;
};

export interface ClientResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: any;
  config: ClientRequestConfig;
  request?: any;
}
