import { AxiosPromise } from 'axios';

import { ClientResponse } from './ClientResponse';

void function testFunction(specimen: AxiosPromise): ClientPromise {
  return specimen;
};

export interface ClientPromise<T = any> extends Promise<ClientResponse<T>> {}
