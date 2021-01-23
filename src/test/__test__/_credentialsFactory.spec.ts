import { _credentialsFactory } from '../../private/auth/_credentialsFactory';

describe('Name of the group', () => {
  it('should ', async done => {
    _credentialsFactory({
      account: 12_345_678,
      apiVersion: 'v1',
      keyFile: 'MOCKfile',
      practiceAccount: false,
      seedToken: 'MOCK',
      test: false,
    });

    done();
  });
});
