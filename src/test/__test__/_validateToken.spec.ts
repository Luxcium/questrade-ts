import { validateToken } from '../../resources/side-effects';

describe('oAuth Validate Token', () => {
  it('should validate with a numeric account number', async () => {
    validateToken({
      account: 12_345_678,
      apiVersion: 'v1',
      keyDir: '',
      keyFile: '',
      practiceAccount: false,
      seedToken: '',
      test: false,
    });
  });
  it('should validate with a string account number', async () => {
    validateToken({
      account: '12345678',
      apiVersion: 'v1',
      keyDir: '',
      keyFile: '',
      practiceAccount: false,
      seedToken: '',
      test: false,
    });
  });
  it('should validate with a key file', async () => {
    validateToken({
      account: '12345678',
      apiVersion: 'v1',
      keyDir: '',
      keyFile: 'MOCKfile',
      practiceAccount: false,
      seedToken: '',
      test: false,
    });
  });
  it('should validate with a key dir', async done => {
    await (async () =>
      validateToken({
        account: '12345678',
        apiVersion: 'v1',
        keyDir: './build/tmp',
        keyFile: '',
        practiceAccount: false,
        seedToken: '',
        test: false,
      }))();
    done();
  });
});
