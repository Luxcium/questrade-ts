import { dirname } from 'path';
import {
  access,
  constants,
  ICreds,
  readFileSync,
  sync,
  writeFileSync,
} from '.';
import { axiosClient, AxiosClient } from './axiosClient';
import { Credentials } from './Credentials';

export async function oAuthLogic(
  credentials: Credentials,
  _axiosClient: AxiosClient<ICreds> = axiosClient
): Promise<Credentials> {
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
    await access(credentials.keyFile, constants.F_OK, async none => {
      if (none) {
        await writeFileSync(credentials.keyFile, credentials.seedToken, {
          encoding: 'utf8',
        });
      }
    });
  }
  try {
    const { data: refreshCreds } = await _axiosClient({
      url: `${credentials.authUrl}/oauth2/token`,
      params: {
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
      },
    });
    credentials.accessToken = refreshCreds.access_token;
    credentials.apiServer = refreshCreds.api_server;
    credentials.expiresIn = refreshCreds.expires_in;
    credentials.refreshToken = refreshCreds.refresh_token;
    credentials.tokenType = refreshCreds.token_type;
    credentials.apiUrl = `${credentials.apiServer}${credentials.apiVersion}`;
    writeFileSync(credentials.keyFile, credentials.refreshToken, 'utf8');
    // await self.getPrimaryAccountNumber();
    // await self.qtGetMarketsNames();
  } catch (authError) {
    console.error('Authentication error:', authError.message);
  }
  return credentials;
}
