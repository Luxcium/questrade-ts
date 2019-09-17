// - Copyright (c) Benjamin Vincent Kasapoglu (Luxcium). All rights reserved.
// - Licensed under the MIT License.
// - See License.txt in the project root for license information.
import { _getAccounts } from '.';
import { QtApi } from '../../../libraries';
import { AcountNumber } from '../../../types';

export const _getPrimaryAccountNumber = (qtApi: QtApi) => async (): Promise<
  AcountNumber
> => {
  const accounts = await _getAccounts(qtApi)();
  if (accounts.length < 1) {
    throw new Error('No account number found');
  }
  // if only one retur the only one ...
  if (accounts.length === 1) {
    return accounts[0].number;
  }
  // if more than one return the first one marked primary
  const primary = accounts.filter(account => account.isPrimary);
  if (primary.length > 0) {
    return primary[0].number;
  }
  // if none marked primary and more than one return first one
  return accounts[0].number;
};
