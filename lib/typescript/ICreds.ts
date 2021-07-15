export interface ICreds {
  /** accessToken (access_token) */
  readonly accessToken: string;
  /** apiServer (api_server) */
  readonly apiServer: string;
  /** expiresIn (expires_in)*/
  readonly expiresIn: number;
  /** refreshToken (refresh_token) */
  readonly refreshToken: string;
  /** tokenType (token_type)*/
  readonly tokenType: string;
}
