import { Credentials } from './Credentials';

export type RawApiGet = (crendentials: Credentials) => ApiGet;
export type ApiGet = <T>(endpoint: string) => Promise<T>;
