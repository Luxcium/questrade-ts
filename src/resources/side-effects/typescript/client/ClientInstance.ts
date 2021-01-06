import { AxiosInstance } from 'axios';

import { ClientInterceptorManager } from './ClientInterceptorManager';
import { ClientPromise } from './ClientPromise';
import { ClientRequestConfig } from './ClientRequestConfig';
import { ClientResponse } from './ClientResponse';

type Representative = AxiosInstance;
type Specimen = ClientInstance;

export interface ClientInstance {
  (config: ClientRequestConfig): ClientPromise;
  (url: string, config?: ClientRequestConfig): ClientPromise;
  defaults: ClientRequestConfig;
  interceptors: {
    request: ClientInterceptorManager<ClientRequestConfig>;
    response: ClientInterceptorManager<ClientResponse>;
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

interface Input {
  sampleA: Specimen;
  sampleB: Representative;
}
interface ReversedOutput {
  sampleA: Representative;
  sampleB: Specimen;
}
type Sample = Representative & Specimen;
void function testFunction(sample: Input): ReversedOutput {
  const returnSample: {
    sampleA: Sample;
    sampleB: Sample;
  } = sample;
  return returnSample;
};

/*

src/resources/side-effects/typescript/client/ClientInstance.ts:80:9 - error TS2322: Type 'Input' is not assignable to type '{ sampleA: Sample; sampleB: Sample; }'.
  Types of property 'sampleA' are incompatible.
    Type 'ClientInstance' is not assignable to type 'Sample'.
      Type 'ClientInstance' is not assignable to type 'AxiosInstance'.
        The types of 'interceptors.response.use' are incompatible between these types.
          Type '(onFulfilled?: ((value: ClientRequestConfig) => ClientRequestConfig | Promise<ClientRequestConfig>) | undefined, onRejected?: ((error: any) => any) | undefined) => number' is not assignable to type '(onFulfilled?: ((value: ClientResponse<any>) => ClientResponse<any> | Promise<ClientResponse<any>>) | undefined, onRejected?: ((error: any) => any) | undefined) => number'.
            Types of parameters 'onFulfilled' and 'onFulfilled' are incompatible.
              Types of parameters 'value' and 'value' are incompatible.

                Type 'ClientRequestConfig' is missing the following properties from type 'ClientResponse<any>':
                 status, statusText, config


src/resources/side-effects/typescript/client/ClientStatic.ts:32:9 - error TS2322: Type 'Input' is not assignable to type '{ sampleA: Sample; sampleB: Sample; }'.
  Types of property 'sampleA' are incompatible.
    Type 'ClientStatic' is not assignable to type 'Sample'.
      Type 'ClientStatic' is not assignable to type 'AxiosStatic'.
        The types of 'create(...).interceptors.response.use' are incompatible between these types.
          Type '(onFulfilled?: ((value: ClientRequestConfig) => ClientRequestConfig | Promise<ClientRequestConfig>) | undefined, onRejected?: ((error: any) => any) | undefined) => number' is not assignable to type '(onFulfilled?: ((value: ClientResponse<any>) => ClientResponse<any> | Promise<ClientResponse<any>>) | undefined, onRejected?: ((error: any) => any) | undefined) => number'.
            Types of parameters 'onFulfilled' and 'onFulfilled' are incompatible.
              Types of parameters 'value' and 'value' are incompatible.
                Type 'ClientRequestConfig' is not assignable to type 'ClientResponse<any>'.

32   const returnSample: {
           ~~~~~~~~~~~~
*/
