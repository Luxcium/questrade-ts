import { Credentials } from '../../../../typescript';

const _urlSeprator = () => '/';
const _baseAcctUrlStr = (): string => 'accounts';
const _credAcctNmbrProp = (C: Credentials): string => C.accountNumber;

const _endPtAccountBaseURL: EndPtAccountBaseURL = getCredAcctProp => urlSep => accountStr => creds => accountEndpoint =>
  `${urlSep()}${accountStr()}${urlSep()}${getCredAcctProp(
    creds
  )}${accountEndpoint}`;
/** PROVIDE: credentials and accountEndpoint string, THEN GET: a endpoint string */
export const _endpointFormatAccount = _endPtAccountBaseURL(_credAcctNmbrProp)(
  _urlSeprator
)(_baseAcctUrlStr);

export type EndPtAccountBaseURL = (
  getCredAcctProp: (credentials: Credentials) => string
) => (
  urlSep: () => string
) => (
  acctUrlStr: () => string
) => (credentials: Credentials) => (accountEndpoint: string) => string;

// const separator = _urlSeprator('/');
// const accountBaseUrl = ;
// const credAcctNmbrProp = (credentials: Credentials) =>
//   _credAcctNmbrProp(credentials);

// const _endpointFormatAccountBase = (base: string = baseAccountUrl()) => (
//   credentials: Credentials
// ) => (accountEndpoint: string): string =>
//   `${base}${credentials.accountNumber}${accountEndpoint}`;
