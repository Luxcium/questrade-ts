import { redeemToken } from '../..';
import { StrategyVariantRequest } from '../../typescript';
import { log, setDateRange, void0 } from '../../utils';

const myToken = '2a15Be6L9aphlS0xdnppd8MKAADK9dxM0';

export const testingThat = (async () => {
  const qtApi = await redeemToken(myToken)
    .then(result => {
      return result.qtApi;
    })
    .catch(error => console.log(error)); // CONSOLE: List the side effects

  if (!qtApi) {
    throw new Error('Redeem token fault');
  }
  const theResult = await qtApi.account.getPositions();
  const theResult2 = await qtApi.search.stock('aapl');
  console.log('theResult1', theResult); // CONSOLE: List the side effects

  console.log('theResult2', theResult2); // CONSOLE: List the side effects

  return { theResult, theResult2 };
})().catch(error => console.log('PlayGround error message:', error.message)); // CONSOLE: List the side effects

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
void0([log, setDateRange]);
