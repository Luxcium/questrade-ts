import { _axiosApiPost } from '.';
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


GET markets/quotes/strategies
Retrieve a calculated L1 market data quote for a single or many multi-leg strategies.

Request

Name	Type	Description
variants
Complex
Input array of Strategy Variants
StrategyVariantRequest

Strategy record for strategy quotes.

Name	Type	Description
variantId
Integer
Variant ID
strategy
Enumeration
Strategy type (e.g. “Custom”)
See Strategy Types section for all allowed values.
legs
Complex
Array of Strategy legs
StrategyVariantLeg

Strategy record for strategy quotes

Name	Type	Description
symbolId
Integer
Internal symbol identifier
action
Enumeration
Order side (e.g. “Buy”)
See Order Action section for all allowed values.
ratio
Integer
Numeric ration of the leg in strategy
Response properties

Name	Type	Description
variantId
Integer
Variant ID corresponding to variant in request
bidPrice
Double
Bid price
askPrice
Double
Ask price
underlying
String
Underlying name
underlyingId
Integer
Underlying ID
openPrice
Double
Open price
volatility
Double
Volatility
delta
Double
Delta
gamma
Double
Gamma
theta
Double
Theta
vega
Double
Vega
rho
Double
Rho
isRealTime
Boolean
Whether or not the data is real-time
NOTES:
Leg quantities will be factorized. For example, if you place quantities of 10 and 1000, they will be sent as an order quantity of 10 and leg ratio quantities 1 and 100. Price uses a factorized strategy.
Maximum of 4 legs is allowed.
The variantId parameter will be echoed so you can match the quotes to the request.The variantId parameter will be echoed so you can match the quotes to the request.
Sample request


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

Sample response:


   {
       “stategyQuotes”: [
           {
               “variantId”: 1,
               “bidPrice”: 27.2,
               “askPrice”: 27.23,
               “underlying”: ”MSFT”,
               “underlyingId”:  27426,
               “openPrice”:  null,
               “volatility”: 0,
               “delta”: 1,
               “gamma”: 0,
               “theta”: 0,
               “vega”: 0,
               “rho”: 0,
               “isRealTime”: true
           },
              ...
      ]
 }



*/
