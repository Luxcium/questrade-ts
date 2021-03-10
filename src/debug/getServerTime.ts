import { IQuestradeAPIv2_0 } from '../public/IQuestradeAPIv2_0';

export function getServerTime(qtApi: IQuestradeAPIv2_0) {
  return async () => {
    return qtApi.account.getServerTime();
  };
}
