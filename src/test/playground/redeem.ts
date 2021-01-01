// tslint:disable-next-line: no-var-requires
import { redeemToken } from '../..';
import { getMyToken } from '../../get-token';

// inside of an async function or async IIFE
(async () => {
  const echo = console.log;

  const { qtApi, credentials } = await redeemToken(getMyToken());

  // Validate the server time as your hello world for this package
  const serverTime = qtApi.serverTime;
  echo(serverTime);
  // inside an async function use await qt.get.<... some properties or methods>
  echo(await qtApi.myBalances());
  echo(credentials);
  echo(await qtApi.account.getBalances());
  echo(credentials);
  echo(await qtApi.market.getAllMarkets());
  echo(credentials);
  echo(JSON.stringify(credentials.accessToken));
  echo(JSON.stringify(credentials.accountNumber));
  /*
   echo(JSON.stringify(credentials.accessToken: string;
   echo(JSON.stringify(credentials.accountNumber: string;
   echo(JSON.stringify(credentials.apiServer: string;
   echo(JSON.stringify(credentials.apiUrl: string;
   echo(JSON.stringify(credentials.apiVersion: string;
   echo(JSON.stringify(credentials.authUrl: string;
   echo(JSON.stringify(credentials.expiresAt?: string;
   echo(JSON.stringify(credentials.expiresAtRaw?: number;
   echo(JSON.stringify(credentials.expiresIn: number;
   echo(JSON.stringify(credentials.keyDir: string;
   echo(JSON.stringify(credentials.keyFile: string;
   echo(JSON.stringify(credentials.practice: boolean;
   echo(JSON.stringify(credentials.tokenExpiration?: Date;
   echo(JSON.stringify(credentials.refreshToken: string;
   echo(JSON.stringify(credentials.seedToken: string;
   echo(JSON.stringify(credentials.serverTime?: Date;
   echo(JSON.stringify(credentials.serverTimeRaw?: number;
   echo(JSON.stringify(credentials.tokenType: string;
   echo(JSON.stringify(credentials.remainingRequests?: ITimeRateLimiter;
   echo(JSON.stringify(credentials.response_?: AxiosResponse<any>;
   echo(JSON.stringify(credentials.config_?: CoreApiConfig<any>;
   echo(JSON.stringify(credentials.urlHash64?: string;
   echo(JSON.stringify(credentials.urlHashHex?: string;
   echo(JSON.stringify(credentials.urlTime?: Date;
   echo(JSON.stringify(credentials.serverTime_?: string | number | Date;
   echo(JSON.stringify(credentials.expiresAt_?: string | number | Date;
 */
  // you can use a try/catch block to manage error instead:
})().catch(error => console.error(error.message));
