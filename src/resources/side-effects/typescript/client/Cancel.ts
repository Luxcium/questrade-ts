import { Cancel as AxiosCancel } from 'axios';

void function testFunction(specimen: AxiosCancel): Cancel {
  return specimen;
};

export interface Cancel {
  message: string;
}
