import { AxiosError } from 'axios';

import { ClientRequestConfig } from './ClientRequestConfig';
import { ClientResponse } from './ClientResponse';

type Representative = AxiosError;
type Specimen = ClientError;

export interface ClientError<T = any> extends Error {
  config: ClientRequestConfig;
  code?: string;
  request?: any;
  response?: ClientResponse<T>;
  isAxiosError: boolean;
  toJSON: () => object;
}

interface Input {
  sampleA: Specimen;
  sampleB: Representative;
}
interface ReversedOutput {
  sampleA: Representative;
  sampleB: Specimen;
}

void function testFunction(sample: Input): ReversedOutput {
  return sample;
};
