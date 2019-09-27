import { AxiosResponse, default as axios } from 'axios';
import { access, constants, readFileSync, writeFileSync } from 'fs';
import { dirname } from 'path';
import {
  /* AxiosClient, */ Credentials,
  defaultCredentials,
} from '../../libraries';
// import { ICreds } from '../../types';
import { sync } from '../../utils/mkdirp';

export const _oAuthLogic = async (options: any): Promise<Credentials> => {
  // const axiosClient: AxiosClient<ICreds> = _axiosClient;
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

  if (typeof options === 'undefined' || !options) {
    throw new Error('questrade_missing_api_key or options');
  }
  if (typeof options === 'string' && options.indexOf('/') !== -1) {
    credentials.keyFile = options;
  }
  if (typeof options === 'string' && options.indexOf('/') === -1) {
    credentials.seedToken = options;
  }
  if (typeof options === 'object') {
    credentials.practice = !!options.practiceAccount;
    credentials.keyDir = options.keyDir || './keys';
    credentials.apiVersion = options.apiVersion || 'v1';
    credentials.keyFile = options.keyFile || '';
    credentials.seedToken = options.seedToken || '';
    credentials.accountNumber = `${options.account}` || '';
  }
  credentials.authUrl = credentials.practice
    ? 'https://practicelogin.q.com'
    : 'https://login.questrade.com';

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
  try {
    // %% %% %%
    const axiosConfig: any = {
      url: `${credentials.authUrl}/oauth2/token`,
      params: {
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
      },
    };

    // const returnedData: AxiosResponse<any> = ; //_axiosClient<any>(
    // );

    let response: AxiosResponse<any>;
    try {
      try {
        response = await axios(axiosConfig);
      } catch (error) {
        console.error(error.message);
        throw new Error(error.message);
      }

      /// validating response.data is not NaN, "", '', 0, false, null or undefined
      if (!response.data) {
        throw new Error('Invalid data back from axios client');
      } else {
        // return response as AxiosResponse<any>;
      }
    } catch (error) {
      /// error handling must be taken care of when calling axioClient Function
      throw error;
    }

    const { data: refreshCreds } = response;
    credentials.accessToken = refreshCreds.access_token;
    credentials.apiServer = refreshCreds.api_server;
    credentials.expiresIn = refreshCreds.expires_in;
    credentials.refreshToken = refreshCreds.refresh_token;
    credentials.tokenType = refreshCreds.token_type;
    credentials.apiUrl = `${credentials.apiServer}${credentials.apiVersion}`;
    writeFileSync(credentials.keyFile, credentials.refreshToken, 'utf8');
  } catch (authError) {
    console.error('Authentication error:', authError.message);
  }
  return credentials;
};

/*



*/
