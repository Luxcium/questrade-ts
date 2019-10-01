import { Credentials } from '../typescript';

// # _delayedCrednetialsFunction
/** PROVIDE: credentials first and function of type (C: Credentials) => Promise<R> with R return type last THEN GET: an extra 'async () =>' that will return a Promise<R>, added at the end of composition chain */
export const _delayedCrednetialsFunction = (credentials: Credentials) => <
  T = any
>(
  functionX: (C: Credentials) => Promise<T>
) => async () => functionX(credentials);
