import { _credentialsFactory } from '../../private';

describe('Name of the group', () => {
  it('should ', async done => {
    _credentialsFactory({
      account: 12_345_678,
      apiVersion: 'v1',
      test: false,
      practiceAccount: false,
      seedToken: 'MOCK',
      keyFile: 'MOCKfile',
    });

    done();
  });
});
