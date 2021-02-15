import { errorlog } from '../../resources/side-effects';
import { AcountNumberString, IAccount } from '../../typescript';

/** pROVIDE: IAccount[] THEN GET:  a 'primaryAccountNumber string'  */
export function _getPrimaryAccountNumber(
  accounts: IAccount[],
): AcountNumberString {
  if (!accounts || accounts.length === 0) {
    void errorlog(
      "WARNING('No account number found') will default to '11111111' ",
    );

    return '11111111';
  }

  if (accounts.length === 1) {
    return accounts[0].number;
  }

  const primary = accounts.filter(account => account.isPrimary);

  if (primary.length > 0) {
    return primary[0].number;
  }

  return accounts[0].number;
}
