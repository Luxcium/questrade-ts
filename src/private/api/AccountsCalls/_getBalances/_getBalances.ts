import { sideEffects } from '../../../../resources/side-effects';
import {
  ClientProxyHandler,
  Credentials,
  IBalances,
} from '../../../../typescript';
import { _clientAccountGetApi } from '../../../routes/clientAccountGetApi/_clientAccountGetApi';

const { errorlog } = sideEffects;

// + _getBalances
/** _getBalances */
export const _getBalances = (
  credentials: Credentials,
  proxy?: ClientProxyHandler,
) => async (): Promise<IBalances> => {
  try {
    return _clientAccountGetApi(credentials, proxy)<IBalances>('/balances')();
  } catch (error) {
    void errorlog(error);

    return {
      combinedBalances: [],
      perCurrencyBalances: [],
      sodCombinedBalances: [],
      sodPerCurrencyBalances: [],
    };
  }
};
