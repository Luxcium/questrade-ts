import { AxiosStatic } from 'axios';

import { CancelStatic } from './CancelStatic';
import { CancelTokenStatic } from './CancelTokenStatic';
import { ClientError } from './ClientError';
import { ClientInstance } from './ClientInstance';
import { ClientRequestConfig } from './ClientRequestConfig';

type Representative = AxiosStatic;
type Specimen = ClientStatic;

export interface ClientStatic extends ClientInstance {
  create(config?: ClientRequestConfig): ClientInstance;
  Cancel: CancelStatic;
  CancelToken: CancelTokenStatic;
  isCancel(value: any): boolean;
  all<T>(values: (T | Promise<T>)[]): Promise<T[]>;
  spread<T, R>(callback: (...args: T[]) => R): (array: T[]) => R;
  isAxiosError(payload: any): payload is ClientError;
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
