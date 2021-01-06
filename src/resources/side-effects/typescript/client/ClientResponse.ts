import { AxiosResponse } from 'axios';

import { ClientRequestConfig } from './ClientRequestConfig';

type Representative = AxiosResponse;
type Specimen = ClientResponse;

export interface ClientResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: any;
  config: ClientRequestConfig;
  request?: any;
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
