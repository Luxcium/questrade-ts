import {
  AccountStatus,
  AccountType as UserAccountType,
  ClientAccountType,
} from 'questrade-api-enumerations';

export type AcountNumber = string | number;

export interface IAccount {
  type: UserAccountType;
  number: AcountNumber;
  status: AccountStatus;
  isPrimary: boolean;
  isBilling: boolean;
  clientAccountType: ClientAccountType;
}

export interface IAccounts {
  accounts: IAccount[];
}
