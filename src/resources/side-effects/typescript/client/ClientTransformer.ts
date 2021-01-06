import { AxiosTransformer } from 'axios';

type Representative = AxiosTransformer;
type Specimen = ClientTransformer;
export interface ClientTransformer {
  (data: any, headers?: any): any;
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
