// tslint:disable: variable-name
import { _getAccounts } from '.';
import { QtApi } from '../../../libraries';
import { AcountNumber } from '../../../types';
export const _getPrimaryAccountNumber = async (
  qtApi: Promise<QtApi>
): Promise<AcountNumber> => {
  const accounts = await _getAccounts(qtApi);
  if (accounts.length < 1) {
    throw new Error('No account number found');
  }

  if (accounts.length === 1) {
    return accounts[0].number;
  }

  const primary = accounts.filter(account => account.isPrimary);
  if (primary.length > 0) {
    return primary[0].number;
  }

  return accounts[0].number;
};
