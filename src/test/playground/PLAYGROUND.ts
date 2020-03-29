import { redeemToken } from '../..';
import { StrategyVariantRequest } from '../../typescript';
import { log, setDateRange, void0 } from '../../utils';

const myToken = '2a15Be6L9aphlS0xdnppd8MKAADK9dxM0';

export const testingThat = (async () => {
  const qtApi = await redeemToken(myToken)
    .then(result => {
      return result.qtApi;
    })
    .catch(err => console.log(err));
  if (!qtApi) throw new Error('Redeem token fault');
  const theResult = await qtApi.account.getPositions();
  const theResult2 = await qtApi.search.stock('aapl');
  console.log('theResult1', theResult);
  console.log('theResult2', theResult2);
  return { theResult, theResult2 };
})().catch(error => console.log('PlayGround error message:', error.message));
// testingThat();

export const xyz = async () => {
  //
  return void 0;
};
// )().catch(error => console.log('error message:', error.message));
// order id 584497639

// POST https://api01.iq.questrade.com/v1/markets/quotes/strategies
export const demoRequestVariants: StrategyVariantRequest = {
  variants: [
    {
      variantId: 1,
      strategy: 'Custom',
      legs: [
        {
          symbolId: 27244725,
          ratio: 1000,
          action: 'Buy',
        },
        {
          symbolId: 27244738,
          ratio: 1001,
          action: 'Sell',
        },
      ],
    },
  ],
};
void0([log, setDateRange]);
