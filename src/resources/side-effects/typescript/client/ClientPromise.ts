import { AxiosPromise } from 'axios';

import { ClientResponse } from './ClientResponse';

type Representative = AxiosPromise;
type Specimen = ClientPromise;

export interface ClientPromise<T = any> extends Promise<ClientResponse<T>> {}

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
