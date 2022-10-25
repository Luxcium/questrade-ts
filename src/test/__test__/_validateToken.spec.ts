import { _validateToken } from '../../private/auth/axiosCredentials_oAUTH/_validateToken';

describe('oAuth Validate Token', () => {
  it('should validate with a numeric account number', async () => {
    _validateToken({
      account: 12345678,
      apiVersion: 'v1',
      test: false,
      practiceAccount: false,
      seedToken: '',
      keyFile: '',
      keyDir: '',
    });
  });
  it('should validate with a string account number', async () => {
    _validateToken({
      account: '12345678',
      apiVersion: 'v1',
      test: false,
      practiceAccount: false,
      seedToken: '',
      keyFile: '',
      keyDir: '',
    });
  });
  it('should validate with a key file', async () => {
    _validateToken({
      account: '12345678',
      apiVersion: 'v1',
      test: false,
      practiceAccount: false,
      seedToken: '',
      keyFile: 'MOCKfile',
      keyDir: '',
    });
  });
  it('should validate with a key dir',  async () => {
    await(async () =>
      _validateToken({
        account: '12345678',
        apiVersion: 'v1',
        test: false,
        practiceAccount: false,
        seedToken: '',
        keyFile: '',
        keyDir: './build/tmp',
      }))();

  });
});
