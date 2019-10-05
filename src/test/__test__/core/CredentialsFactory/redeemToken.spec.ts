// import { axios } from '../../__mocks__/axios';
import axios from 'axios';
import { _redeemToken } from '../../../../api';
// const axios = require('axios');
describe('redeemToken', () => {
  it('should be using Axios', async (done: any) => {
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
    done();
  });
});
