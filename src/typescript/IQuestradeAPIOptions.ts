export interface IQuestradeAPIOptions {
  practiceAccount?: boolean;
  test?: boolean;
  keyDir?: string;
  apiVersion?: string;
  keyFile?: string;
  token: seedToken;
  account?: string | number;
  accountcallsPerHour?: number;
  accountcallsPerSecond?: number;
  marketDatacallsPerHour?: number;
  marketDatacallsPerSecond?: number;
}

type seedToken = string;

type keyFile = string;

export type QuestradeAPIOptions = IQuestradeAPIOptions | seedToken | keyFile;
