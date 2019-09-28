// tslint:disable: variable-name
import { QtApi } from '../../../libraries';
import { IAccount, IAccounts } from '../../../types';
export const _getAccounts = (qtApi: QtApi) => async (): Promise<IAccount[]> => {
  try {
    const { accounts } = await (await qtApi).get<IAccounts>('/accounts');
    return accounts;
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
};
