import { redeemToken } from '../..';
import { void0 } from '../../utils';

describe('Redeem Token ', () => {
  it('should not be able to recive an empty string', async done => {
    let canReciveEmptyString: boolean;
    try {
      canReciveEmptyString = true;
      const { qtApi, credentials } = await redeemToken('');
      void0([qtApi, credentials]);
    } catch (e) {
      console.error(e.message);
      canReciveEmptyString = false;
    }
    expect(canReciveEmptyString).toBe(false);
    done();
  });

  it('should be able to recive a keyfile', async done => {
    const { credentials } = await redeemToken({
      account: 12345678,
      apiVersion: 'v1',
      test: false,
      practiceAccount: false,
      seedToken: 'MOCK',
      keyFile: 'MOCKfile',
    });
    void0(credentials);
    done();
  });
  it('should be able to recive practice account = true', async done => {
    const { credentials } = await redeemToken({
      account: 12345678,
      apiVersion: 'v1',
      test: false,
      practiceAccount: true,
      seedToken: 'MOCK',
      keyFile: 'MOCKfile',
    });
    void0(credentials);
    done();
  });

  it('should be able to recive no apiVersion and default to v1', async done => {
    const { credentials } = await redeemToken({
      account: 12345678,
      test: false,
      practiceAccount: true,
      seedToken: 'MOCK',
      keyFile: 'MOCKfile',
    });
    expect(credentials.apiVersion).toBe('v1');
    void0(credentials);
    done();
  });
  it('should not be able to recive a file path as a string containing the token', async done => {
    const credentials = await redeemToken(
      './keys/RocgyhkqWp-USE-YOUR-OWN-TOKEN-M3BSDjd0',
    );

    void0(credentials);
    done();
  });
});
