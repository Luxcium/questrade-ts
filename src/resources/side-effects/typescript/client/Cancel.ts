import { Cancel as AxiosCancel } from 'axios';

type Representative = AxiosCancel;
type Specimen = Cancel;

void function testFunction(rep: Representative, spec: Specimen): Sample {
  return rep && spec;
};

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
type Sample = Representative & Specimen;
void function testFunction(sample: Input): ReversedOutput {
  const returnSample: {
    sampleA: Sample;
    sampleB: Sample;
  } = sample;
  return returnSample;
};
