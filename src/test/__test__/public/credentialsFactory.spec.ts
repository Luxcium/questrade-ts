import { redeemToken } from '../../../api/public';

describe('description', () => {
  it('proto test ', async done => {
    const { qtApi } = await redeemToken('MOCKMOCK');
    console.log(qtApi.myBalances);
    done();
  });
});
