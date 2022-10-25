import { _credentialsFactory } from '../../private';

describe('Name of the group', () => {
  it('should ', done => {
    _credentialsFactory({
      account: 12345678,
      apiVersion: 'v1',
      test: false,
      practiceAccount: false,
      seedToken: 'MOCK',
      keyFile: 'MOCKfile',
    });

    done();
  });
});
