import { Credentials } from '../typescript';

// # _delayedFunctionCredentials
/** PROVIDE: function with R return type first (function of type (C: Credentials) => Promise<R>) and provide credentials last THEN GET: an extra 'async () =>' that will return a Promise<R>, added at the end of composition chain */
export const _delayedFunctionCredentials = <R>(
  functionX: (C: Credentials) => Promise<R>
) => (credentials: Credentials) => async () => functionX(credentials);
