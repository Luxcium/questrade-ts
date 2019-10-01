import { Credentials } from '../typescript';
import { _axiosApiGetEndpointFactory, _delayedFunctionCredentials } from './';

// # _axiosApiGetEndpointFactoryD
/** PROVIDE: endpoint string with R return type and credentials THEN GET: a '() => Promise<R>' */
// todo: verify this seem to be wrong ...
export const _axiosApiGetEndpointFactoryD = <R>(endpoint: string) => (
  credentials: Credentials
) =>
  _delayedFunctionCredentials(
    _axiosApiGetEndpointFactory<R>(endpoint)(credentials)
  )(credentials);
