import { Credentials } from '../../../typescript';

/** PROVIDE: credentials and accountEndpoint string, THEN GET: a endpoint string */
export const _endpointFormatAccount = (credentials: Credentials) => (
  accountEndpoint: string
): string => `/accounts/${credentials.accountNumber}${accountEndpoint}`;
