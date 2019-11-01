import { redeemToken } from 'questrade-ts';
import { IBalance, IQuestradeApi } from 'questrade-ts/typings/typescript';
import ramda from 'ramda';
import redis from 'redis';
import { promisify } from 'util';
// import { promisify } from 'util';
import { willGetSNP500List } from '../getSNP500List';

export const myToken = 'lZp64JzzScKDBd1rvUO1RNCHVg0g2wA90';

export const sleep = async (ms: number) => promisify(setTimeout)(ms);
export const tuningFork = async (hz: number) => sleep(HZtoMS(hz));
export const tuning = tuningFork;
export const HZtoMS = (hz: number) => {
  // When delay is larger than 2147483647 or less than 1,
  // the delay will be set to 1.
  // Non-integer delays are truncated to an integer.
  let HZ = !hz ? 0.00000456789 : hz;
  HZ = HZ < 0 ? hz * -1 : hz;
  return 1000 / HZ;
};
export const MStoHZ: number = 0;
export const _sleep = (ms: number) => async <T>(x: T) => {
  await sleep(ms);
  return x;
};
export const _tuningFork = (hz: number) => async <T>(x: T) => {
  await tuningFork(hz);
  return x;
};

// import { qt } from '.';

export const getSymbolId = (qtApi: IQuestradeApi) => async (
  stockSymbol: string
) => (await qtApi.search.stock(stockSymbol)).symbolId;

export const getQuotes = (qtApi: IQuestradeApi) => async (
  stockSymbol: string | number | number[]
) => {
  const getquotes = qtApi.getQuotes.byStockIds;
  const getsymbols = getSymbolId(qtApi);
  if (typeof stockSymbol === 'string') {
    return getquotes([await getsymbols(stockSymbol)]);
  }
  if (typeof stockSymbol === 'number') {
    return getquotes([stockSymbol]);
  }
  return getquotes(stockSymbol);
};
let count = 0;
export const getSymbolDetails = (qtApi: IQuestradeApi) => async (
  stockSymbol: string | number | number[]
) => {
  count += 1;
  console.log('count:', count);
  const getSymbolsByStockIds = qtApi.getSymbols.byStockIds;
  const getquotes = qtApi.getQuotes.byStockIds;
  if (typeof stockSymbol === 'string') {
    const symbolID = await getSymbolId(qtApi)(stockSymbol);
    return {
      ...(await getSymbolsByStockIds([symbolID]))[0],
      ...(await getquotes([symbolID]))[0],
    };
  }
  if (typeof stockSymbol === 'number') {
    return {
      ...(await getSymbolsByStockIds([stockSymbol]))[0],
      ...(await getquotes([stockSymbol]))[0],
    };
  }
  return {
    ...(await getSymbolsByStockIds(stockSymbol))[0],
    ...(await getquotes(stockSymbol))[0],
  };
};

// (await qtApi.search.stock(stockSymbol)).symbolId;
const executeIFFE: boolean = false;
(async IIFE => {
  if (IIFE.isReadyToExecute) {
    const { R } = IIFE;
    const { map, prop, path } = R;
    const {
      qtApi,
      qtApi: { account, myBalances },
    } = await redeemToken(myToken);

    const currency = 'USD';
    const customProp = 'totalEquity';
    const getCustomPropertie = prop(customProp);

    const myBalance = await myBalances();
    const balancesNow = path(
      [currency, 'combined', 'current'],
      myBalance
    ) as IBalance;
    const balancesSOD = path(
      [currency, 'combined', 'startOfDay'],
      myBalance
    ) as IBalance;
    //   const balancesSODs = (await myBalances()).balances.combined.startOfDay;
    //   const balancesSODX = (await myBalances()).combined.balances.startOfDay;
    // console.log(balancesNow);
    // console.log(balancesSOD);
    // console.log(
    // customProp,
    // 'change since the morning morning',
    // getCustomPropertie(balancesNow) - getCustomPropertie(balancesSOD)
    // );

    // console.log(await getSymbolId(qtApi)('AAPL'));
    // console.log(await getQuotes(qtApi)('AAPL'));

    // const propsList: string[] = ['symbol', 'symbolId'];
    // console.log(await getSymbolDetails(qtApi)('AAPL'));
    const myRedisClient = redis.createClient(6379);
    myRedisClient.on('error', err => {
      console.log('Error ', err);
    });
    // const myRedisClientGET = promisify(myRedisClient.GET);
    const symbolDetailsMapper = async (stockSymbol: string) => {
      myRedisClient.SET(
        stockSymbol,
        JSON.stringify(getSymbolDetails(qtApi)(stockSymbol))
      );
      myRedisClient.GET(stockSymbol, console.info);
      // console.log(await myRedisClientGET(item).catch(console.error));
    };
    // !!
    // !!
    const [snp500] = await willGetSNP500List();
    symbolDetailsMapper('');
    // willGetSNP500List().then(symbolsAndList => {
    //   const getItemsFromQtApi = timingLoop(symbolDetailsMapper);
    //   getItemsFromQtApi(symbolsAndList[0], 15);
    //   return symbolsAndList;
    // });
    // const someArray = (await willGetSNP500List())[0].map(async item => {
    //   const mappedItem = await symbolDetailsMapper(item);
    //   console.log(mappedItem);
    //   return mappedItem;
    // });
    // console.log(await Promise.all(someArray));
    return {
      account,
      // getItemsFromQtApi,
      // symbolDetailsMapper,
      map,
      snp500,
      myBalances,
      prop,
      qtApi,
      getCustomPropertie,
      balancesNow,
      balancesSOD,
    };
  }
  return;
})({ R: ramda, isReadyToExecute: executeIFFE }).catch(error =>
  console.log('error message:', error.message)
);
//
export {};
// const getItemsFromQtApi = timingLoop(symbolDetailsMapper);
// getItemsFromQtApi(symbolsAndList[0], 15);
// const myRedisClientGET = promisify(myRedisClient.GET);
// console.log(await myRedisClientGET(item).catch(console.error));
// export const iDontKnowTheName = _someKindOftimingLoop(console.info);
// willGetSNP500List().then(
//   symbolsAndList => {
//     iDontKnowTheName(symbolsAndList[0], 29);
//     console.log('function end');
//     return symbolsAndList;
//   }
//   // symbolsAndList[0].forEach((item, index) => console.log(index + 1, item))
// );
// return (qtApi: IQuestradeApi) => {
//   const symbolDetails = getSymbolDetails(qtApi);
// }
// export function _symbolDetailsMapper(qtApi: IQuestradeApi) {
//   const stockSymbolRedisClient = setStockSymbolRedisClient(6379);
//   stockSymbolRedisClient(getSymbolDetails(qtApi));
// }
//
// const getSnP500 = curry(_getSnP500StringList);
// const symbolDetailsMapper = curry(_symbolDetailsMapper);
// const timingLoop = curry(_timingLoop);
// export { getSnP500, symbolDetailsMapper, timingLoop };
/*

{
  description: 'APPLE INC',
  symbol: 'AAPL',
  symbolId: 8049,

  industrySector: 'Technology',
  industryGroup: 'ComputerHardware',
  industrySubgroup: 'ConsumerElectronics',

  listingExchange: 'NASDAQ',
  securityType: 'Stock',
  currency: 'USD',

  eps: 11.78,
  pe: 20.37012,
  marketCap: 1084422432800,
  outstandingShares: 4519180000,

  isHalted: false,
  isTradable: true,
  isQuotable: true,
  hasOptions: true,
  delay: 0,

  volume: 11160083,
  averageVol3Months: 28873987,
  averageVol20Days: 26568009,

  high52w: 244.8,
  low52w: 142,

  prevDayClosePrice: 243.18,
  highPrice52: 243.24,
  lowPrice52: 142,
  VWAP: 242.958197

  bidPrice: 242.78,
  bidSize: 2,
  askPrice: 242.8,
  askSize: 1,
  lastTradePriceTrHrs: 242.78,
  lastTradePrice: 242.78,
  lastTradeSize: 100,
  lastTradeTick: 'Up',
  lastTradeTime: '2019-10-24T13:11:29.725000-04:00',
  openPrice: 244.51,
  highPrice: 244.8,
  lowPrice: 241.805,

  dividend: 0.77,
  yield: 1.28355,
  dividendDate: '2019-08-15T00:00:00.000000-04:00',
  exDate: '2019-08-09T00:00:00.000000-04:00',
  

  
  minTicks:
  [ { pivot: 0, minTick: 0.0001 }, { pivot: 1, minTick: 0.01 } ],
  tradeUnit: 1,
  tier: '',

 }

  optionType: null,
  optionDurationType: null,
  optionRoot: '',
  optionContractDeliverables: { underlyings: [], cashInLieu: 0 },
  optionExerciseType: null,
  optionExpiryDate: null,
  optionStrikePrice: null,


[ { symbol: 'AAPL',
    symbolId: 8049,
    averageVol3Months: 28873987,
    averageVol20Days: 26568009,
    outstandingShares: 4519180000,
    eps: 11.78,
    pe: 20.37012,
    dividend: 0.77,
    yield: 1.28355,
    exDate: '2019-08-09T00:00:00.000000-04:00',
    
    description: 'APPLE INC',
    securityType: 'Stock',
    
    dividendDate: '2019-08-15T00:00:00.000000-04:00',
    
    isTradable: true,
    isQuotable: true,
    hasOptions: true,
    
    
    industrySector: 'Technology',
    industryGroup: 'ComputerHardware',
    industrySubgroup: 'ConsumerElectronics' } ]

    lowPrice52: 142,
    lowPrice52: 142,

     { symbol: 'AAPL',
    symbolId: 8049,
    tier: '',
    bidPrice: 243.08,
    bidSize: 1,
    askPrice: 243.09,
    askSize: 3,
    lastTradePriceTrHrs: 243.09,
    lastTradePrice: 243.09,
    lastTradeSize: 100,
    lastTradeTick: 'Equal',
    lastTradeTime: '2019-10-24T12:49:10.786000-04:00',
    volume: 10670407,
    openPrice: 244.51,
    highPrice: 244.8,
    lowPrice: 241.805,
    delay: 0,
    isHalted: false,
    high52w: 244.8,
    low52w: 142,
    VWAP: 242.955105 } ]
[ { symbol: 'AAPL',
    symbolId: 8049,
    prevDayClosePrice: 243.18,
    highPrice52: 243.24,
    lowPrice52: 142,
    averageVol3Months: 28873987,
    averageVol20Days: 26568009,
    outstandingShares: 4519180000,
    eps: 11.78,
    pe: 20.37012,
    dividend: 0.77,
    yield: 1.28355,
    exDate: '2019-08-09T00:00:00.000000-04:00',
    marketCap: 1084422432800,
    tradeUnit: 1,
    optionType: null,
    optionDurationType: null,
    optionRoot: '',
    optionContractDeliverables: { underlyings: [], cashInLieu: 0 },
    optionExerciseType: null,
    listingExchange: 'NASDAQ',
    description: 'APPLE INC',
    securityType: 'Stock',
    optionExpiryDate: null,
    dividendDate: '2019-08-15T00:00:00.000000-04:00',
    optionStrikePrice: null,
    isTradable: true,
    isQuotable: true,
    hasOptions: true,
    currency: 'USD',
    minTicks: [ [Object], [Object] ],
    industrySector: 'Technology',
    industryGroup: 'ComputerHardware',
    industrySubgroup: 'ConsumerElectronics' } ]


*/
console.log('ramdaQT.ts');
