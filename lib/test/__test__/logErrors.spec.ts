import { _logErrors } from '../../private/core/end-point-connector/_logErrors';

test('should log error', async done => {
  _logErrors(new Error('error testing'));
  _logErrors(new Error('error testing'), 'message');
  done();
});
