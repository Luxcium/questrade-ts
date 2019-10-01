import { Credentials } from '../typescript';
import { _axiosApiPostEndpointFactory, _delayedFunctionCredentials } from './';

// # _axiosApiPostEndpointFactoryD
/** PROVIDE: endpoint string with R return type, postData with D data type and credentials THEN GET: a '() => Promise<R>' */
export const _axiosApiPostEndpointFactoryD = <R>(endpoint: string) => <D = any>(
  postData: D
) => (credentials: Credentials) =>
  _delayedFunctionCredentials<R>(
    _axiosApiPostEndpointFactory<R>(endpoint)<D>(postData)
  )(credentials);
