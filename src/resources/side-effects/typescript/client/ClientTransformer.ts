import { AxiosTransformer } from 'axios';

void function testFunction(specimen: AxiosTransformer): ClientTransformer {
  return specimen;
};

export interface ClientTransformer {
  (data: any, headers?: any): any;
}
