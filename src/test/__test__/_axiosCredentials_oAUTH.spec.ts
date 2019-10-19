import { _oAuthAxiosCredentials } from '../../private/auth/axiosCredentials_oAUTH';
import { _emptyCredentials } from '../../private/auth/credentialsFactory';
import { void0 } from '../../utils';

describe('', () => {
  it('should be able to recive a keydir', async done => {
    const credentials = await _oAuthAxiosCredentials({
      account: 12345678,
      apiVersion: 'v1',
      test: false,
      practiceAccount: false,
      seedToken: 'MOCK',
      keyDir: './keys/MOCKdir',
    });
    // console.log(credentials);
    void0(credentials);
    done();
  });
  it('should be able to recive a keyfile', async done => {
    const credentials = await _oAuthAxiosCredentials({
      account: 12345678,
      apiVersion: 'v1',
      test: false,
      practiceAccount: false,
      seedToken: 'MOCK',
      keyFile: 'MOCKfile',
    });
    // console.log(credentials);
    void0(credentials);
    done();
  });
  it('should not be able to recive an empty string', async done => {
    let canReciveEmptyString: boolean;
    let credentials = _emptyCredentials();
    try {
      canReciveEmptyString = true;
      credentials = await _oAuthAxiosCredentials('');
    } catch (e) {
      console.error(e.message);
      canReciveEmptyString = false;
    }
    expect(canReciveEmptyString).toBe(false);
    void0(credentials);
    done();
  });
  it('should not be able to recive an empty account number', async done => {
    const credentials = await _oAuthAxiosCredentials({
      account: '',
      apiVersion: 'v1',
      test: false,
      practiceAccount: false,
      seedToken: 'MOCK',
      keyFile: 'MOCKfile',
    });
    // console.log(credentials);
    void0(credentials);
    done();
  });

  it('should not be able to recive a file path as a string containing the token', async done => {
    const credentials = await _oAuthAxiosCredentials('./keys/MOCK');
    // console.log(credentials);
    void0(credentials);
    done();
  });
});
