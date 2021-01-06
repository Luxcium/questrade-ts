import { CancelTokenSource as AxiosCancelTokenSource } from 'axios';

import { Cancel } from './Cancel';
import { Canceler } from './Canceler';

type Representative = AxiosCancelTokenSource;
type Specimen = CancelTokenSource;

export interface CancelTokenSource {
  token: {
    promise: Promise<Cancel>;
    reason?: Cancel;
    throwIfRequested(): void;
  };
  cancel: Canceler;
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
