import { Cancel as AxiosCancel } from 'axios';

type Representative = AxiosCancel;
type Specimen = Cancel;

export interface Cancel {
  message: string;
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
