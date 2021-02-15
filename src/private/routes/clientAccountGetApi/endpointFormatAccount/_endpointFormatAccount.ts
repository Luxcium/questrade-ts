import { Credentials, EndPtAccountBaseURL } from '../../../../typescript';

const _urlSeprator = (): string => '/';
const _baseAcctUrlStr = (): string => 'accounts';
const _credAcctNmbrProp = (credentials: Credentials): string =>
  credentials.accountNumber;

const _endPtAccountBaseURL: EndPtAccountBaseURL = getCredAcctProp => urlSep => accountStr => (
  credentials,
  proxy,
) => accountEndpoint =>
  `${urlSep()}${accountStr()}${urlSep()}${getCredAcctProp(
    credentials,
    proxy,
  )}${accountEndpoint}`;

/** PROVIDE: credentials and accountEndpoint string, THEN GET: a endpoint string */
export const _endpointFormatAccount = _endPtAccountBaseURL(_credAcctNmbrProp)(
  _urlSeprator,
)(_baseAcctUrlStr);
