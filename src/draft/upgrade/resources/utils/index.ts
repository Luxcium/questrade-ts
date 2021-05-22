import { IAccount } from '../../../../typescript';

export { makeApiUrl } from './make-api-url';
export { oAuthConfig } from './o_auth-config';
export { preValidateToken } from './pre-validate-token';

export const isLenghtOne = <T>(A: T[]) => A.length === 1;
export const hasLenght = <T>(A: T[]) => A.length > 0;
export const head = <T>(A: T[]) => A[0];

export const getPrimary = (accounts: IAccount[]) =>
  accounts.filter(account => account.isPrimary);
