import { QuestradeAPIv2_0 } from '../../public/IQuestradeAPIv2_0';

export function getServerTime(qtApi: QuestradeAPIv2_0) {
  return async () => {
    return qtApi.account.getServerTime();
  };
}
