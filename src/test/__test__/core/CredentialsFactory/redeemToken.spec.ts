import { redeemToken } from '../../../../api';
describe('redeemToken', () => {
  it('should be using Axios', async (done: any) => {
    // (async () => {
    //
    const { credentials } = await redeemToken(
      'JPkAws5CSK1GkAzpVovk4Q3nwVbUTUPA0'
    );
    console.log(credentials);
    // return credentials;
    // })()
    // .then((cred: any) => console.log(cred))
    // .catch(error => console.log('error message:', error.message));
    done();
  });
});
