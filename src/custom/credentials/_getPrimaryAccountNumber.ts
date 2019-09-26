import { AcountNumber, IAccount } from '../../core/types';

export const _getPrimaryAccountNumber = async (
  accounts: IAccount[]
): Promise<AcountNumber> => {
  if (accounts.length < 1) {
    throw new Error('No account number found');
  }

  if (accounts.length === 1) {
    return accounts[0].number;
  }

  const primary = accounts.filter((account: any) => account.isPrimary);
  if (primary.length > 0) {
    return primary[0].number;
  }

  return accounts[0].number;
};
