import { _oAuthHttpCredentials } from '../../private/auth/clientCredentials_oAUTH/xx-http-auth-xx';
import { _emptyCredentials } from '../../private/auth/credentialsFactory';
import { void0 } from '../../utils';

describe('auth Credential from QuestradeApi via HTTP CLIENT', () => {
  it('should be able to recive a keydir', async done => {
    const credentials = await _oAuthHttpCredentials({
      account: 12_345_678,
      apiVersion: 'v1',
      test: false,
      practiceAccount: false,
      seedToken: 'MOCK',
      keyDir: './keys/MOCKdir',
    });
    void0(credentials);
    done();
  });
  it('should be able to recive a keyfile', async done => {
    const credentials = await _oAuthHttpCredentials({
      account: 12_345_678,
      apiVersion: 'v1',
      test: false,
      practiceAccount: false,
      seedToken: 'MOCK',
      keyFile: 'MOCKfile',
    });
    void0(credentials);
    done();
  });
  it('should not be able to recive an empty string', async done => {
    let canReciveEmptyString: boolean;
    let credentials = _emptyCredentials();
    try {
      canReciveEmptyString = true;
      credentials = await _oAuthHttpCredentials('');
    } catch {
      canReciveEmptyString = false;
    }
    expect(canReciveEmptyString).toBe(false);
    void0(credentials);
    done();
  });
  it('should not be able to recive an empty account number', async done => {
    const credentials = await _oAuthHttpCredentials({
      account: '',
      apiVersion: 'v1',
      test: false,
      practiceAccount: false,
      seedToken: 'MOCK',
      keyFile: 'MOCKfile',
    });
    void0(credentials);
    done();
  });

  it('should not be able to recive a file path as a string containing the token', async done => {
    const credentials = await _oAuthHttpCredentials('./keys/MOCK');
    void0(credentials);
    done();
  });
});
