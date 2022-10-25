import { getHash } from '../../utils';

test('should test getHash', done => {
  getHash('data', 'sha1', 5);
  getHash('data');

  done();
});
