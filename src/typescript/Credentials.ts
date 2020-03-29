import { ITimeRateLimiter } from '.';

export interface Credentials {
  accessToken: string;
  accountNumber: string;
  apiServer: string;
  apiUrl: string;
  apiVersion: string;
  authUrl: string;
  expiresAt?: string;
  expiresAtRaw?: number;
  expiresIn: number;
  keyDir: string;
  keyFile: string;
  practice: boolean;
  tokenExpiration?: Date;
  refreshToken: string;
  seedToken: string;
  serverTime?: Date;
  serverTimeRaw?: number;
  tokenType: string;
  remainingRequests?: ITimeRateLimiter;
  toString(): string;
  toValue(): string;
}
