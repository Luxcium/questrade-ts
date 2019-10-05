import { _redeemToken } from '../../../../api';
import { axios } from '../../__mocks__/axios';
describe('redeemToken', () => {
  it('should be mokable', async (done: any) => {
    const redeemToken = _redeemToken(axios);
    console.log(await redeemToken('MOKABLE'));
    done();
  });
});
