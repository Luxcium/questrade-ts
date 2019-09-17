import { _questradeApi } from '../../../api';
import { QtApi } from '../../../libraries';
import { _accounts, _getPrimaryAccountNumber } from '../_Accounts';

export const questrade = async (options: any) => {
  const qtApi: QtApi = await _questradeApi(options);

  qtApi.credentials.accountNumber = await _getPrimaryAccountNumber(qtApi)();

  return { qtApi, accounts: _accounts(qtApi) };
};
