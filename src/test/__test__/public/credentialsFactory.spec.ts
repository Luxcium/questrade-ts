import { redeemToken } from '../../../api/public';
import { IQuestradeApi } from '../../../typescript';

describe('description', () => {
  let qtApi: IQuestradeApi;
  beforeAll(async done => {
    qtApi = (await redeemToken('MOCKMOCK')).qtApi;
    console.log(qtApi.myBalances);
    done();
  });
  it('proto test ', async done => {
    console.log(await qtApi.myBalances());
    done();
  });
});
