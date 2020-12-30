import {
  AccountStatus,
  AccountType,
  ClientAccountType,
} from 'questrade-api-enumerations';

export type AcountNumberString = string;

export interface IAccount {
  type: AccountType;
  number: AcountNumberString;
  status: AccountStatus;
  isPrimary: boolean;
  isBilling: boolean;
  clientAccountType: ClientAccountType;
}

export interface IAccounts {
  accountList: IAccount[];
}
