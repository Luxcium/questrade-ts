import { QuestradeAPIOptions } from '../types';
import {
  // getAccessToken,
  oAuthLogic,
  validateAuthOptions,
} from './getAccessToken';

export { apiGet } from './apiGet';

export function thatFunct(options: QuestradeAPIOptions, theThis: any) {
  theThis.accountNumber = '';
  theThis.apiVersion = 'v1';
  theThis.keyDir = './keys';
  theThis._keyFile = '';
  theThis.practice = false;
  theThis._seedToken = '';
  theThis.expiresIn = 0;
  theThis.tokenType = '';
  theThis.refreshToken = '';
  theThis.accessToken = '';
  theThis.apiUrl = '';
  theThis.apiServer = '';
  validateAuthOptions(theThis, options);

  theThis.authUrl = theThis.practice
    ? 'https://practicelogin.q.com'
    : 'https://login.questrade.com';

  // !!
  oAuthLogic(theThis)
    .then((self: any) => {
      self
        .qtGetTime()
        .then((time: any) => {
          console.info('Server Time:', new Date(time).toLocaleString());
          console.info(
            'self',
            self.tokenType,
            'token expire in',
            self.expiresIn / 60,
            'minutes'
          );
          self.emit('ready', self);
        })
        .catch((err: Error) => {
          console.error(err);
          try {
            theThis.emit('error', 'Can not get server time', err);
          } catch (error) {
            console.error('Canot get server time');
          }
        });
    })
    .catch(_callingMainError => {
      console.error(
        'Error calling main() from QuestradeClient class in constructor'
      );
    });
  return void 0;
}
