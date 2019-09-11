import { Credentials } from '../libraries/Credentials';
import { QuestradeAPIOptions } from '../types';
import { _apiGet } from './_apiGet';
import { _oAuthLogic } from './_oAuthLogic';

/** As first test will get time from server after oAuthentiocation  */
export async function _getTimeFirst(
  options: QuestradeAPIOptions,
  cb: any = (creds: Credentials) => creds
) {
  const credentials = await _oAuthLogic(options);

  try {
    const timeFirst = await _getTime(credentials);
    console.log('TIME getTimeFirst', timeFirst);
    // apiGet('',theSelf.accessToken)
  } catch (error) {
    //
  }
  return cb(credentials);
}
// _oAuthLogic(credentials)
//   .then((self: any) => {
//     self
//       // getTime()
//       .then((time: any) => {
//         console.info('Server Time:', new Date(time).toLocaleString());
//         console.info(
//           'self',
//           self.tokenType,
//           'token expire in',
//           self.expiresIn / 60,
//           'minutes'
//         );
//         self.emit('ready', self);
//       })
//       .catch((err: Error) => {
//         console.error(err);
//         try {
//           // credentials.emit('error', 'Can not get server time', err);
//         } catch (error) {
//           console.error('Canot get server time');
//         }
//       });
//   })
//   .catch(_callingMainError => {
//     console.error(
//       'Error calling main() from QuestradeClient class in constructor'
//     );
//   });

const _getTime = async (credentials: Credentials) => {
  try {
    const { time } = await _apiGet('/time', credentials);
    return time;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const questradeAPI = [_oAuthLogic, _apiGet];
