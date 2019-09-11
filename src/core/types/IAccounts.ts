// - ------------------------------------------------------------------------ //
import {
  AccountStatus,
  AccountType as UserAccountType,
  ClientAccountType,
} from 'questrade-api-enumerations';

// -------------------------------------------------------------------------- //
// - Copyright (c) Benjamin Vincent Kasapoglu (Luxcium). All rights reserved.
// - Licensed under the MIT License.
// - See License.txt in the project root for license information.
// - ------------------------------------------------------------------------ //

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
// - ------------------------------------------------------------------------ //
