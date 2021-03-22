export interface IRefreshCreds {
  readonly access_token: string;
  readonly api_server: string;
  readonly expires_in: number;
  readonly refresh_token: string;
  readonly token_type: string;
}
