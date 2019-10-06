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
  const { credentials, qtApi } = await _redeemToken(axios)(
    'JPkAws5CSK1GkAzpVovk4Q3nwVbUTUPA0'
  );
  console.log(credentials);
  const serverTime = await qtApi.getServerTime();
  console.log(serverTime);
  console.log(serverTime);
  console.log(await (await qtApi.get.symbols.search('t')).currency);

  return credentials;
})()
  // .then((cred: any) => console.log(cred))
  .catch(error => console.log('error message:', error.message));
