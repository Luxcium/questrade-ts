import { Credentials } from '../../core/libraries';

export const endpointFormatAccount = (
  credentials: Credentials,
  endpoint: string
): string => `/accounts/${credentials.accountNumber}${endpoint}`;
