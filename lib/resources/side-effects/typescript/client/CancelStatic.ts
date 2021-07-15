import { CancelStatic as AxiosCancelStatic } from 'axios';

import { Cancel } from './Cancel';

type Representative = AxiosCancelStatic;
type Specimen = CancelStatic;

export interface CancelStatic {
  new (message?: string): Cancel;
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
