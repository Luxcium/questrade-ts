import { Credentials } from '../../../../typescript';

const _urlSeprator = () => '/';
const _baseAcctUrlString = (): string => 'accounts';
const _credAcctNmbrProperty = (C: Credentials): string => C.accountNumber;

const _endPtAccountBaseURL: EndPtAccountBaseURL = getCredAcctProperty => urlSeparator => accountString => creds => accountEndpoint =>
  `${urlSeparator()}${accountString()}${urlSeparator()}${getCredAcctProperty(
    creds
  )}${accountEndpoint}`;
/** PROVIDE: credentials and accountEndpoint string, THEN GET: a endpoint string */
export const _endpointFormatAccount = _endPtAccountBaseURL(
  _credAcctNmbrProperty
)(_urlSeprator)(_baseAcctUrlString);

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
