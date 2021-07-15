import { CancelToken as AxiosCancelToken } from 'axios';

import { Cancel } from './Cancel';

type Representative = AxiosCancelToken;
type Specimen = CancelToken;

export interface CancelToken {
  promise: Promise<Cancel>;
  reason?: Cancel;
  throwIfRequested(): void;
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
