import { sideEffects } from '../../resources/side-effects';

const { _validateToken } = sideEffects;
describe('oAuth Validate Token', () => {
  it('should validate with a numeric account number', async () => {
    _validateToken({
      account: 12_345_678,
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
  it('should validate with a key dir', async done => {
    await (async () =>
      _validateToken({
        account: '12345678',
        apiVersion: 'v1',
        test: false,
        practiceAccount: false,
        seedToken: '',
        keyFile: '',
        keyDir: './build/tmp',
      }))();
    done();
  });
});
