import { AxiosResponse, default as axios } from 'axios';
import { access, constants, readFileSync, writeFileSync } from 'fs';
import { dirname } from 'path';
import { Credentials, defaultCredentials } from '../../core/libraries';
import { sync } from '../../core/utils/mkdirp';

export const _oAuthCredentials = async (
  token: string
): Promise<Credentials> => {
  const { refreshToken, credentials } = validateToken(token);
  const axiosConfig = {
    url: `${credentials.authUrl}/oauth2/token`,
    params: {
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    },
  };

  const response: AxiosResponse<any> = await axios(axiosConfig);

  if (!response.data) {
    throw new Error(
      '!! validate credntials Invalid data back from axios client'
    );
  }
  return writeToken(credentials, response);
};

const writeToken = (
  credentials: Credentials,
  response: AxiosResponse<any>
): Credentials => {
  const { data: refreshCreds } = response;
  credentials.accessToken = refreshCreds.access_token;
  credentials.apiServer = refreshCreds.api_server;
  credentials.expiresIn = refreshCreds.expires_in;
  credentials.refreshToken = refreshCreds.refresh_token;
  credentials.tokenType = refreshCreds.token_type;
  credentials.apiUrl = `${credentials.apiServer}${credentials.apiVersion}`;
  writeFileSync(credentials.keyFile, credentials.refreshToken, 'utf8');

  return credentials;
};

const validateToken = (options: any) => {
  const credentials = buildCredentialsFromToken(options);
  let refreshToken: string = credentials.seedToken || '';
  try {
    if (!!credentials.keyFile) {
      sync(dirname(credentials.keyFile));
    } else {
      sync(credentials.keyDir);
    }
    credentials.keyFile =
      credentials.keyFile || `${credentials.keyDir}/${credentials.seedToken}`;
    refreshToken = readFileSync(credentials.keyFile, 'utf8');
  } catch (_) {
    credentials.keyFile =
      credentials.keyFile || `${credentials.keyDir}/${credentials.seedToken}`;
    access(credentials.keyFile, constants.F_OK, async none => {
      if (none) {
        writeFileSync(credentials.keyFile, credentials.seedToken, {
          encoding: 'utf8',
        });
      }
    });
  }
  return { refreshToken, credentials };
};

const buildCredentialsFromToken = (token: any) => {
  const credentials = emptyCredentials();

  if (typeof token === 'undefined' || token === undefined) {
    throw new Error('questrade_missing_api_key or options');
  }
  if (typeof token === 'string' && token.indexOf('/') !== -1) {
    credentials.keyFile = token;
  }
  if (typeof token === 'string' && token.indexOf('/') === -1) {
    credentials.seedToken = token;
  }
  if (typeof token === 'object') {
    credentials.practice =
      token.practiceAccount === undefined ? false : !!token.practiceAccount;
    credentials.keyDir = token.keyDir || './keys';
    credentials.apiVersion = token.apiVersion || 'v1';
    credentials.keyFile = token.keyFile || '';
    credentials.seedToken = token.seedToken || '';
    credentials.accountNumber = `${token.account}` || '';
  }
  credentials.authUrl = credentials.practice
    ? 'https://practicelogin.q.com'
    : 'https://login.questrade.com';

  return credentials;
};

const emptyCredentials = () => {
  const credentials: Credentials = defaultCredentials;
  credentials.accountNumber = '';
  credentials.apiVersion = 'v1';
  credentials.keyDir = './keys';
  credentials.keyFile = '';
  credentials.practice = false;
  credentials.seedToken = '';
  credentials.expiresIn = 0;
  credentials.tokenType = '';
  credentials.refreshToken = '';
  credentials.accessToken = '';
  credentials.apiUrl = '';
  credentials.apiServer = '';
  return credentials;
};
