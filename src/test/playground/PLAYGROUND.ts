import { redeemToken } from '../..';
import { echo, errorlog, getMyToken } from '../../resources/side-effects';
import { StrategyVariantRequest } from '../../typescript';

// const { echo, errorlog, getMyToken } = sideEffects;
const myToken = getMyToken();

export const testingThat = (async () => {
  const qtApi = await redeemToken(myToken)
    .then(result => {
      return result.qtApi;
    })
    .catch(error => void errorlog(error));

  if (!qtApi) {
    throw new Error('Redeem token fault');
  }
  const theResult = await qtApi.account.getPositions();
  const theResult2 = await qtApi.search.stock('tu');
  void echo<unknown>('theResult1', theResult);

  void echo<unknown>('theResult2', theResult2[0]);

  return { theResult, theResult2 };
})().catch(
  error => void errorlog<unknown>('PlayGround error message:', error.message),
);

// testingThat();

export const xyz = async () => {
  //
  return void 0;
};
// order id 584497639

// POST https://api01.iq.questrade.com/v1/markets/quotes/strategies
export const demoRequestVariants: StrategyVariantRequest = {
  variants: [
    {
      variantId: 1,
      strategy: 'Custom',
      legs: [
        {
          symbolId: 27_244_725,
          ratio: 1000,
          action: 'Buy',
        },
        {
          symbolId: 27_244_738,
          ratio: 1001,
          action: 'Sell',
        },
      ],
    },
  ],
};
