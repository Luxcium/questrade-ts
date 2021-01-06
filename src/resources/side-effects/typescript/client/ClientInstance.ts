import { AxiosInstance } from 'axios';

import { ClientPromise } from './ClientPromise';
import { ClientRequestConfig } from './ClientRequestConfig';
import { ClientResponse } from './ClientResponse';

void function testFunction(specimen: AxiosInstance): ClientInstance {
  return specimen;
};

export interface ClientInstance {
  (config: ClientRequestConfig): ClientPromise;
  (url: string, config?: ClientRequestConfig): ClientPromise;
  defaults: ClientRequestConfig;
  interceptors: {
    request: {
      use(
        onFulfilled?: (
          value: ClientRequestConfig,
        ) => ClientRequestConfig | Promise<ClientRequestConfig>,
        onRejected?: (error: any) => any,
      ): number;
      eject(id: number): void;
    };
    response: {
      use(
        onFulfilled?: (
          value: ClientRequestConfig,
        ) => ClientRequestConfig | Promise<ClientRequestConfig>,
        onRejected?: (error: any) => any,
      ): number;
      eject(id: number): void;
    };
  };
  getUri(config?: ClientRequestConfig): string;
  request<T = any, R = ClientResponse<T>>(
    config: ClientRequestConfig,
  ): Promise<R>;
  get<T = any, R = ClientResponse<T>>(
    url: string,
    config?: ClientRequestConfig,
  ): Promise<R>;
  delete<T = any, R = ClientResponse<T>>(
    url: string,
    config?: ClientRequestConfig,
  ): Promise<R>;
  head<T = any, R = ClientResponse<T>>(
    url: string,
    config?: ClientRequestConfig,
  ): Promise<R>;
  options<T = any, R = ClientResponse<T>>(
    url: string,
    config?: ClientRequestConfig,
  ): Promise<R>;
  post<T = any, R = ClientResponse<T>>(
    url: string,
    data?: any,
    config?: ClientRequestConfig,
  ): Promise<R>;
  put<T = any, R = ClientResponse<T>>(
    url: string,
    data?: any,
    config?: ClientRequestConfig,
  ): Promise<R>;
  patch<T = any, R = ClientResponse<T>>(
    url: string,
    data?: any,
    config?: ClientRequestConfig,
  ): Promise<R>;
}
