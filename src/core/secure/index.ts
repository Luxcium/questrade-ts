import { Credentials, QuestradeAPIOptions } from '../types';
import { _apiGet } from './_apiGet';
import {
  // getAccessToken,
  oAuthLogic,
  validateAuthOptions,
} from './_getAccessToken';

/** As first test will get time from server after oAuthentiocation  */
export async function getTimeFirst(
  options: QuestradeAPIOptions,
  cb: any = () => void 0
) {
  const credentials = validateAuthOptions(options);

  try {
    const oAuth = await oAuthLogic(credentials);
    const timeFirst = await getTime(oAuth);
    console.log('TIME getTimeFirst', timeFirst);
    // apiGet('',theSelf.accessToken)
  } catch (error) {
    //
  }
  oAuthLogic(credentials)
    .then((self: any) => {
      self
        // getTime()
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
            // credentials.emit('error', 'Can not get server time', err);
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
  return cb(credentials);
}

const getTime = async (oAuth: Credentials) => {
  try {
    const { time } = await _apiGet('/time', oAuth); // this._api<Time>('/time');
    return time;
  } catch (error) {
    throw new Error(error.message);
  }
};
