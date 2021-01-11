import { Canceler as AxiosCanceler } from 'axios';

type Representative = AxiosCanceler;
type Specimen = Canceler;

export interface Canceler {
  (message?: string): void;
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
