import {
  AccountStatus,
  AccountType,
  ClientAccountType,
} from 'questrade-api-enumerations';

export type AcountNumberString = string;

export interface IAccount {
  readonly type: AccountType;
  readonly number: AcountNumberString;
  readonly status: AccountStatus;
  readonly isPrimary: boolean;
  readonly isBilling: boolean;
  readonly clientAccountType: ClientAccountType;
}

export interface IAccounts {
  accounts: IAccount[];
}
