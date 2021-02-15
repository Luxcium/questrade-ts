import { redeemToken } from '../..';
import { sideEffects } from '../../resources/side-effects';
import { void0 } from '../../utils';

const { errorlog } = sideEffects;

test('Validating all README examples', async done => {
  const yourRefreshToken = 'RocgyhkqWp-USE-YOUR-OWN-TOKEN-M3BSDjd0';

  // Inside of an async function or async IIFE
  (async doneTesting => {
    const { qtApi, credentials } = await redeemToken(yourRefreshToken);
    // Validate the server time as your hello world for this package
    const { serverTime } = qtApi;

    void0(serverTime);

    // Inside an async function use await qt.get.<... some methode>
    const balances = await qtApi.account.getBalances();

    void0(balances);

    void0(credentials);

    return doneTesting;
    // You can use a try/catch block to manage error instead:
  })(done)
    .then(doneTesting => doneTesting())
    .catch(error => errorlog(error.message));
});
