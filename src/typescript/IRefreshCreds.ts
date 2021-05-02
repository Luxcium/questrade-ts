export interface IRefreshCreds {
  readonly access_token: string;
  readonly api_server: string;
  readonly expires_in: number;
  readonly refresh_token: string;
  readonly token_type: string;
}

// export function convertToCreds(refreshCreds: IRefreshCreds): ICreds {
//   return {
//     accessToken: refreshCreds.access_token,
//     apiServer: refreshCreds.api_server,
//     expiresIn: refreshCreds.expires_in,
//     refreshToken: refreshCreds.refresh_token,
//     tokenType: refreshCreds.token_type,
//   };
// }

// export interface ICreds {
//   /** accessToken (access_token) */
//   readonly accessToken: string;
//   /** apiServer (api_server) */
//   readonly apiServer: string;
//   /** expiresIn (expires_in)*/
//   readonly expiresIn: number;
//   /** refreshToken (refresh_token) */
//   readonly refreshToken: string;
//   /** tokenType (token_type)*/
//   readonly tokenType: string;
// }
