import { qtAPIv2_0 } from '../..';
import { sideEffects } from '../../resources/side-effects';
import type { StrategyVariantRequest } from '../../typescript';

const { echo, errorLog, getMyToken } = sideEffects;

export const testingThat = (async () => {
  const qtApi = await qtAPIv2_0({ token: getMyToken })
    .then(result => {
      return result.qtApi;
    })
    .catch(error => void errorLog('', error));

  if (!qtApi) {
    throw new Error('Redeem token fault');
  }

  const theResult = await qtApi.account.getPositions();
  const theResult2 = await qtApi.search.stock('tu');

  echo('theResult1', theResult);

  echo('theResult2', theResult2[0]);

  return { theResult, theResult2 };
})().catch(error => void errorLog('PlayGround error message:', error.message));

// testingThat();

export const xyz = () => {
  //
  return void 0;
};
// order id 584497639

// pOST https://api01.iq.questrade.com/v1/markets/quotes/strategies
export const demoRequestVariants: StrategyVariantRequest = {
  variants: [
    {
      legs: [
        {
          action: 'Buy',
          ratio: 1000,
          symbolId: 27_244_725,
        },
        {
          action: 'Sell',
          ratio: 1001,
          symbolId: 27_244_738,
        },
      ],
      strategy: 'Custom',
      variantId: 1,
    },
  ],
};
