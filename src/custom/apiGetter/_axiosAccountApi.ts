import { _axiosApi } from '..';
import { Credentials } from '../../core/libraries';

export const _axiosAccountApi = (credentials: Credentials) => <T = any>(
  endpoint: string
) => async () =>
  _axiosApi(credentials)('GET')<null>(null)<T>(
    endpointFormatAccount(credentials, endpoint)
  );

const endpointFormatAccount = (
  credentials: Credentials,
  endpoint: string
): string => `/accounts/${credentials.accountNumber}${endpoint}`;
