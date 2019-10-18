import { default as ƒ } from 'ramda';
import { redeemToken } from '..';
import { StrategyVariantRequest } from '../typescript';
import { log, setDateRange, void0 } from '../utils';

const myToken = '';

export const testingThat = async () => {
  const qtApi = await redeemToken(myToken)
    .then(result => {
      return result.qtApi;
    })
    .catch(err => console.log(err));
  if (!qtApi) throw new Error('Redeem token fault');
  const theResult = await qtApi.getQuotes.byStrategies(demoRequestVariants);
  console.log('theResult', theResult);
  return theResult;
};
testingThat();
// )().catch(error => console.log('PlayGround error message:', error.message));

export const xyz = async () => {
  //
  return void 0 && ƒ;
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
