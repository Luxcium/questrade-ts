import { _axiosApiPost } from '..';
import { Credentials } from './typescript';

export const some = (cred: Credentials) => _axiosApiPost(cred);
/*


POST https://api01.iq.questrade.com/v1/markets/quotes/strategies
 {
    "variants": [
        {
             "variantId": 1,
             "strategy": ”Custom”,
             "legs": [
                   {
                      "symbolId": 27426,
                      "ratio":  1000,
                      "action": "Buy"
                   },
                   {
                       "symbolId": 10550014,
                       "ratio":  10,
                       "action": "Sell"
                   }
                ]
          },
             ...
    ]
}


NOTES:
Leg quantities will be factorized. For example, if you place quantities of 10 and 1000, they will be sent as an order quantity of 10 and leg ratio quantities 1 and 100. Price uses a factorized strategy.
Maximum of 4 legs is allowed.
The variantId parameter will be echoed so you can match the quotes to the request.The variantId parameter will be echoed so you can match the quotes to the request.

*/
