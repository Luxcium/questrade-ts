import { Canceler as AxiosCanceler } from 'axios';

void function testFunction(specimen: AxiosCanceler): Canceler {
  return specimen;
};

export interface Canceler {
  (message?: string): void;
}
