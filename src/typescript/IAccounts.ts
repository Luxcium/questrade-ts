import {
  AccountStatus,
  AccountType as UserAccountType,
  ClientAccountType,
} from 'api/enums/qtEnumerations';

export type AcountNumberString = string;

export interface IAccount {
  type: UserAccountType;
  number: AcountNumberString;
  status: AccountStatus;
  isPrimary: boolean;
  isBilling: boolean;
  clientAccountType: ClientAccountType;
}

export interface IAccounts {
  accounts: IAccount[];
}
