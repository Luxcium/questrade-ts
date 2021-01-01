import { Credentials, IProxy } from '../../../../typescript';

const _urlSeprator = () => '/';
const _baseAcctUrlStr = (): string => 'accounts';
const _credAcctNmbrProp = (credentials: Credentials): string =>
  credentials.accountNumber;

const _endPtAccountBaseURL: EndPtAccountBaseURL = getCredAcctProp => urlSep => accountStr => (
  credentials,
  proxy
) => accountEndpoint =>
  `${urlSep()}${accountStr()}${urlSep()}${getCredAcctProp(
    credentials,
    proxy
  )}${accountEndpoint}`;
/** PROVIDE: credentials and accountEndpoint string, THEN GET: a endpoint string */
export const _endpointFormatAccount = _endPtAccountBaseURL(_credAcctNmbrProp)(
  _urlSeprator
)(_baseAcctUrlStr);

export type EndPtAccountBaseURL = (
  getCredAcctProp: (credentials: Credentials, proxy: IProxy) => string
) => (
  urlSep: () => string
) => (
  acctUrlStr: () => string
) => (
  credentials: Credentials,
  proxy: IProxy
) => (accountEndpoint: string) => string;
