import axios from 'axios';
import { redeemToken, _redeemToken } from './api';
import * as utils from './utils';
export { qtEnumerations as Enumerations } from 'questrade-api-enumerations';
export { testEnumerations } from './test';
export { day } from './utils';
export { utils };
export { redeemToken };
(async () => {
  //
  const { credentials } = await _redeemToken(axios)(
    'JPkAws5CSK1GkAzpVovk4Q3nwVbUTUPA0'
  );
  console.log(credentials);
  return credentials;
})()
  // .then((cred: any) => console.log(cred))
  .catch(error => console.log('error message:', error.message));
