// import { _getMarkets } from '.';
import { _questradeApi } from '../../../api';
import { QtApi } from '../../../libraries';
import { IMarkets, IQuotes } from '../../../types';
import {
  _getAccounts,
  _getActivities,
  // _getApiAccountCalls,
  _getBalances,
  _getExecutions,
  _getOrders,
  _getPrimaryAccountNumber,
} from '../_Accounts';
import { _getEndPoinFactory } from './_endPoinFactory';

export const questrade = async (options: any) => {
  const qtApi: QtApi = await _questradeApi(options);

  qtApi.credentials.accountNumber = await _getPrimaryAccountNumber(qtApi)();
  const accounts = {
    activities: _getAccounts(qtApi),
    orders: _getActivities(qtApi),
    executions: _getExecutions(qtApi), // :// _getApiAccountCalls(qtApi),
    balances: _getBalances(qtApi),
    listAccounts: _getExecutions(qtApi),
    time: _getOrders(qtApi),
  } as any;
  const markets = {
    candles: _getCandles(qtApi),
    list: _getMarkets(qtApi),
  } as any;
  const quotes = {
    strategies: _postGetStrategiesQuotes(qtApi),
    options: _postGetOptionsQuotes(qtApi),
    fromSymbolID: _getQuotesFromSymbolID(qtApi),
  } as any;
  const symbols = {
    search: _getSymbolSearch(qtApi),
    options: _getOptionsSymbols(qtApi),
    fromSymbolID: _getSymbolFromSymbolID(qtApi),
  } as any;

  return {
    qtApi,
    accounts,
    symbols,
    markets,
    quotes,
  };
};

// GET https://api01.iq.questrade.com/v1/markets/candles/38738?startTime=2014-10-01T00:00:00-05:00&endTime=2014-10-20T23:59:59-05:00&interval=OneDay
const _getCandles = (qtApi: QtApi) => (startDate: string) => (
  interval: string = 'OneDay'
) => (endDate: string) => async (symbolID: string) => {
  return _getEndPoinFactory<Promise<any>>(
    `/markets/candles/${symbolID}?startTime=${startDate}&endTime=${endDate}&interval=${interval}`
  )(qtApi);
};

/*

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
*/

// POST https://api01.iq.questrade.com/v1/markets/quotes/strategies
const _postGetStrategiesQuotes = (qtApi: QtApi) => async () => {
  return _getEndPoinFactory<Promise<any>>('/markets/quotes/strategies')(qtApi);
};

// GET https://api01.iq.questrade.com/v1/markets/quotes?ids=38738,...
const _getQuotesFromSymbolID = (qtApi: QtApi) => async (symbolID: string) => {
  return _getEndPoinFactory<Promise<any>>(`/markets/quotes?ids=${symbolID}`)(
    qtApi
  );
};

// GET https://api01.iq.questrade.com/v1/symbols/search?prefix=BMO
const _getSymbolSearch = (qtApi: QtApi) => async (prefix: string) => {
  return _getEndPoinFactory<Promise<any>>(`/symbols/search?prefix=${prefix}`)(
    qtApi
  );
};

// GET https://api01.iq.questrade.com/v1/symbols/9291/options
const _getOptionsSymbols = (qtApi: QtApi) => async (symbolID: string) => {
  return _getEndPoinFactory<Promise<any>>(`/symbols/${symbolID}/options`)(
    qtApi
  );
};

/*

{
    “filters”: [
        {
             “optionType”: ”Call”,
             “underlyingId”: 27426,
             “expiryDate”: ”2017-01-20T00:00:00.000000-05:00”,
             “minstrikePrice”: 70,
             “maxstrikePrice”: 80
        },
              ...
      ],
      “optionIds”:
             [
              9907637,
              9907638,
                  ...
         ]
  }
*/
// POST https://api01.iq.questrade.com/v1/markets/quotes/options
const _postGetOptionsQuotes = (qtApi: QtApi) => async () => {
  return _getEndPoinFactory<Promise<any>>('/markets/quotes/options')(qtApi);
};

// GET https://api01.iq.questrade.com/v1/symbols?ids=8049,...
const _getSymbolFromSymbolID = (qtApi: QtApi) => async () => {
  return _getEndPoinFactory<Promise<any>>('/symbols')(qtApi);
};

export const _getMarketsQuotes = (qtApi: QtApi) => async (
  qtSymbol: number[]
) => {
  if (!qtSymbol.length) {
    // will error out after calling the api the server will reply the error message ...
    return (await _getEndPoinFactory<Promise<IQuotes>>('/markets/quotes')(
      qtApi
    )()).quotes;
  }
  let qtSymbolString: string = '';
  qtSymbol.forEach((val, currentIndex, ar) => {
    qtSymbolString += `${val.toString()}${
      !(ar.length - currentIndex - 1) ? '' : ','
    }`;
  });

  const endpoint = `/markets/quotes${
    qtSymbol.length === 1 ? `/${qtSymbolString}` : `?ids=${qtSymbolString}`
  }`;
  return (await _getEndPoinFactory<Promise<IQuotes>>(endpoint)(qtApi)()).quotes;
};

export const _getMarkets = (qtApi: QtApi) => async () => {
  return _getEndPoinFactory<Promise<IMarkets>>('/markets')(qtApi)();
};
