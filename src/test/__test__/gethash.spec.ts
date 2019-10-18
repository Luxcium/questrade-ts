import { getHash } from '../../utils';

test('should test getHash', async done => {
  getHash('data', 'sha1', 5);
  getHash('data');

  done();
});
