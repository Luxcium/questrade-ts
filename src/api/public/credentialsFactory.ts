import { _credentialsFactory } from '../private';
import { questradeApi } from './questradeAPI';

const _redeemToken = async (refreshToken: string) => {
  const credentials = await _credentialsFactory(refreshToken);
  const questrade = await questradeApi(credentials);
  const qtApi = questrade;
  return { qtApi, credentials };
};

const redeemToken = _redeemToken;
export { redeemToken };
