import { _logErrors } from '../../private/core/_logErrors';

test('should log error', done => {
  _logErrors(new Error('error testing'), undefined);
  _logErrors(new Error('error testing'), 'message');
  done();
});
