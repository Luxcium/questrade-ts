import { Credentials } from '../../../typescript';

const STRING_PRIVATE = '[string:Private]';

const _defaultCredentials: Credentials = {
  accessToken: '',
  accountNumber: '',
  apiServer: '',
  apiUrl: '',
  apiVersion: 'v1',
  authUrl: '',
  expiresAt: undefined,
  expiresIn: 0,
  fromCache: false,
  fromApi: true,
  keyDir: './keys',
  keyFile: '',
  practiceAccount: false,
  refreshToken: '',
  seedToken: '',
  serverTime: undefined,
  toString(indent: string | number | undefined = 4) {
    return JSON.stringify(
      {
        ...{
          ...this,

          config_: {
            ...this.config_,
            headers: {
              ...this.config_?.headers,
              Authorization: `${(
                (this.config_?.headers?.Authorization as string) ?? ''
              ).slice(0, 15)} [Redacted] ...`,
            },
          },
        },
        accessToken: STRING_PRIVATE,
        keyFile: './keys/[Private]',
        refreshToken: STRING_PRIVATE,
        response_: {
          ...this.response_,
          headers: {
            ...this.response_?.headers,

            Authorization: `${(
              (this.config_?.headers?.Authorization as string) ?? ''
            ).slice(0, 15)} [Redacted] ...`,
          },
          request: {
            ...this.response_?.request,
            _header: '[HTTP Header Fields]',
            _redirectable: '[Writable]',
            agent: '[Agent]',
            res: ' [IncomingMessage]',
            socket: '[TLSSocket]',
          },
          ...{
            ...this.response_?.config,
            config: {
              ...this.response_?.config?.headers,
              headers: {
                // ...this.response_?.config?.headers?.Authorization,

                Authorization: `${
                  (this.config_?.headers?.Authorization as string).slice(
                    0,
                    15,
                  ) ?? ''
                } [Redacted] ...`,
              },
            },
          },
        },
        seedToken: STRING_PRIVATE,
      },
      null,
      indent,
    );
  },
  toValue() {
    return JSON.parse(
      JSON.stringify({
        ...this,
        accessToken: STRING_PRIVATE,
        config_: {
          ...this.config_,
          headers: {
            ...this.config_?.headers,
            Authorization: `${(
              (this.config_?.headers?.Authorization as string) ?? ''
            ).slice(0, 15)} [Redacted] ...`,
          },
        },
        keyFile: './keys/[Private]',
        refreshToken: STRING_PRIVATE,
        response_: {
          ...this.response_,
          config: {
            ...this.response_?.config,
            // ...this.response_?.config?.headers,
            Authorization: `${(
              (this.config_?.headers?.Authorization as string) ?? ''
            ).slice(0, 15)} [Redacted] ...`,
          },
          headers: {
            ...this.response_?.headers,

            Authorization: `${(
              (this.config_?.headers?.Authorization as string) ?? ''
            ).slice(0, 15)} [Redacted] ...`,
          },
          request: {
            ...this.response_?.request,
            _header: '[HTTP Header Fields]',
            _redirectable: '[Writable]',
            agent: '[Agent]',
            res: '[IncomingMessage]',
            socket: '[TLSSocket]',
          },
        },
        seedToken: STRING_PRIVATE,
      }),
    );
  },
  tokenExpiration: undefined,
  tokenType: '',
};

const _emptyCredentials = () => {
  const credentials: Credentials = _defaultCredentials;

  credentials.accountNumber = '';
  credentials.apiVersion = 'v1';
  credentials.keyDir = './keys';
  credentials.keyFile = '';
  credentials.practiceAccount = false;
  credentials.seedToken = '';
  credentials.expiresIn = 0;
  credentials.tokenType = '';
  credentials.refreshToken = '';
  credentials.accessToken = '';
  credentials.apiUrl = '';
  credentials.apiServer = '';
  credentials.fromCache = false;
  return credentials;
};

export { _defaultCredentials, _emptyCredentials };
// config_:null = _config;
// response_:null = response;
// configurl_:null = `${_config.url}`.split('questrade.com/')[1];
// urlTimeUTC:null = new Date(credentials.response_.headers.date);
// ?.Authorization
