import {
  ClientRequestConfig,
  ClientResponse,
} from '../resources/side-effects/types';
import {
  ITimeRateLimiter,
  ProxyFactory_,
  UrlDataAndHashes,
  VebosityLevel,
} from '.';

export interface Credentials {
  accessToken: string;
  accountCallsPerHour?: number;
  accountCallsPerSecond?: number;
  accountNumber: string;
  apiServer: string;
  apiUrl: string;
  apiVersion: string;
  authUrl: string;
  caching?: boolean;
  config_?: ClientRequestConfig;
  configUrl_?: string;
  debugVebosity: VebosityLevel;
  errorloger?: any;
  expiresAt_?: string | number | Date;
  expiresAt?: string;
  expiresAtRaw?: number;
  expiresIn: number;
  fromApi: boolean;
  fromCache: boolean;
  hashes?: UrlDataAndHashes;
  keyDir: string;
  keyFile: string;
  marketCallsPerHour?: number;
  marketCallsPerSecond?: number;
  practiceAccount: boolean;
  proxy?: any;
  proxyFactory?: (credentials?: Credentials) => ProxyFactory_;
  refreshToken: string;
  remainingRequests?: ITimeRateLimiter;
  response_?: ClientResponse<any>;
  seedToken: string;
  serverTime_?: string | number | Date;
  serverTime?: Date;
  serverTimeRaw?: number;
  testing?: boolean;
  tokenExpiration?: Date;
  tokenType: string;
  toString(): string;
  toValue(): string;
  urlTimeUTC?: Date;
  xRatelimitRemaining?: number;
  xRatelimitReset?: number;
}

/**
 *
 *### Authorization Code flow
 *
 *  - Register your personal application in API Center to get an API key and
 *   secret.  Your API consumer key is your client_id and consumer secret is
 *   your client_secret. (NOTE: Client secret is optional and can be omitted in
 *   authorization flow)
 *
 *
 *  - Your application requests authorization by redirecting your user to
 *    {@link https://login.questrade.com/oauth2/authorize}.
 *
 *   with your client_id,
 *   response_type set to 'code' and the URL the user should be redirected back
 *   to after the authorization process (redirect_uri). Scopes can also be
 *   passed (scope) in a comma-delimited list to request further permissions.
 *   Enter the following URL into your browser or direct your users to it for
 *   authentication:
 *   {@link https://login.questrade.com/oauth2/authorize?client_id=CLIENT_ID&response_type=code&redirect_uri=https://www.example.com}
 *
 *  - Questrade will prompt for a login box, where user will need to enter
 *   credential to continue.
 *
 *
 *  - Next page, will prompt with authorization box asking the user whether it's
 *   okay to give access to your application.
 *
 *
 *  - If the user authorizes your application, Questrade redirects the user back
 *   to the redirect URI you specified with a verification token passed as a
 *   query parameter named code. This code can then be exchanged for an access
 *   token.  {@link http://www.example.com/?code=<code>}
 *
 *
 *  - To exchange the code for an access token, you must send a POST request to
 *   {@link https://login.questrade.com/oauth2/token} with the code, client_id, and
 *   redirect_uri. {@link https://login.questrade.com/oauth2/token?client_id=<clientid="">&code=<code>&grant_type=authorization_code&redirect_uri=http://www.example.com}
 *
 *
 *  - The response will return with an access_token, scope, user_id and username.
 *
 *      \{
 *        "access_token": "C3lTUKuNQrAAmSD/TPjuV/HI7aNrAwDp",
 *        "token_type": "Bearer" ,
 *        "expires_in":  300 ,
 *        "refresh_token":  "aSBe7wAAdx88QTbwut0tiu3SYic3ox8F",
 *        "api_server":  "https://api01.iq.questrade.com"
 *      \}
 *
 */

// access_token
// token_type
// expires_in
// refresh_token
// api_server
export interface AuthCredsX {
  /** accessToken (access_token) */
  accessToken: string;
  /** apiServer (api_server) */
  apiServer: string;
  /** expiresIn (expires_in)*/
  expiresIn: number;
  /** tokenType (token_type)*/
  tokenType: string;
  /** refreshToken (refresh_token) */
  refreshToken: string;
}
export interface AuthCreds {
  /** accessToken (access_token) */
  accessToken: string;
  /** accountNumber */
  accountNumber: string;
  /** apiServer (api_server) */
  apiServer: string;
  /** apiUrl */
  apiUrl: string;
  /** apiVersion */
  apiVersion: string;
  /** authUrl */
  authUrl: string;
  /** expiresAt_ */
  expiresAt_?: string | number | Date;
  /** expiresAt */
  expiresAt?: string;
  /** expiresAtRaw */
  expiresAtRaw?: number;
  /** expiresIn (expires_in)*/
  expiresIn: number;
  /** fromApi */
  fromApi: boolean;
  /** fromCache */
  fromCache: boolean;
  /** hashes */
  hashes?: UrlDataAndHashes;
  /** keyDir */
  keyDir: string;
  /** keyFile */
  keyFile: string;
  /** marketCallsPerHour */
  marketCallsPerHour?: number;
  /** marketCallsPerSecond */
  marketCallsPerSecond?: number;
  /** practiceAccount */
  practiceAccount: boolean;
  /** proxy */
  proxy?: any;
  /** proxyFactory */
  proxyFactory?: (credentials?: Credentials) => ProxyFactory_;
  /** refreshToken (refresh_token) */
  refreshToken: string;
  /** remainingRequests */
  remainingRequests?: ITimeRateLimiter;
  /** response_ */
  response_?: ClientResponse<any>;
  /** seedToken */
  seedToken: string;
  /** serverTime_ */
  serverTime_?: string | number | Date;
  /** serverTime */
  serverTime?: Date;
  /** serverTimeRaw */
  serverTimeRaw?: number;
  /** testing */
  testing?: boolean;
  /** tokenExpiration */
  tokenExpiration?: Date;
  /** tokenType (token_type)*/
  tokenType: string;
  /** toString */
  toString(): string;
  /** toValue */
  toValue(): string;
  /** urlTimeUTC */
  urlTimeUTC?: Date;
  /** xRatelimitRemaining */
  xRatelimitRemaining?: number;
  /** xRatelimitReset */
  xRatelimitReset?: number;
}
