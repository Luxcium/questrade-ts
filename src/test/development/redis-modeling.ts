import { questradeAPI } from '../../other';
import { ech0, getMyToken } from '../../resources/side-effects';
import { redisProxyHandler } from '../../resources/side-effects/proxies/client/redis/redis-client-proxy-handler-class';
/*
    tedis: Tedis,
    redisinstance: IoRedis | null,
    jsonRedis: StaticJSONCache,
    handlerOptions: ProxyHandlerOptions,
    credentials?: Credentials,
 */

async function main(/* tedis?: Tedis */) {
  const proxyFactory = redisProxyHandler({
    httpConnectProxy: true,
  });
  void proxyFactory;
  const { qtApi } = await questradeAPI({
    // proxyFactory,
    token: getMyToken,
    accountCallsPerHour: 30000,
    accountCallsPerSecond: 30,
    marketCallsPerHour: 1500,
    marketCallsPerSecond: 20,
  });
  ech0(await qtApi.account.getServerTime());

  // const snp500list = id0(await willGetSNP500StringList()); //.map(ech0);
  // snp500list
  //   .map(stock => qtApi.search.stock(stock))
  //   .map(stock =>
  //     stock.then(s => {
  //       try {
  //         return s[0].symbolId;
  //       } catch (error) {
  //         return 0;
  //       }
  //     }),
  //   )
  //   .map(t =>
  //     t.then(sid => {
  //       try {
  //         return qtApi.getSymbols.byStockIds([sid]);
  //       } catch (error) {
  //         return {} as ISymbol[];
  //       }
  //     }),
  //   );

  // await qtApi.search.stock('couche tard');
  void qtApi;
  // void snp500list;
}

// async function main() {
//   return mainFunction();
// }

export { main };
/*

 //

  // void0(await tedis.keys('URL:*'));
  // void0(await tedis.keys('URLDATA:*'));
  // void0(await tedis.keys('HYPER:*'));
  const step1 = ech0((await tedis.keys('count:*')).sort());
  void0(step1);
  // void0(await qtApi.account.getServerTime());

  // const step2 = step1.map(async item => {
  //   const count = (await tedis.command('PFCOUNT', item)) as number; // DEL
  //   if (count === 1) {
  //     tedis.command('DEL', item);
  //     return 0;
  //   }
  //   return count;
  // });

  // void0(step2);
  // const lastStep = await Promise.all(step2);
  // echo(lastStep);

import { redeemToken } from '../..';
import { sideEffects, Tedis } from '../../resources/side-effects';
import { httpHashLoggerClientProxyHandler } from '../../resources/side-effects/proxies';
import { getSymboIdByStockSymbol, void0 } from '../../utils';

const { ech0, errorlog, getMyToken, makeTedis } = sideEffects;

export const parser = (obj: any) => JSON.parse(JSON.stringify(obj));
async function main(): Promise<Tedis> {
  const { qtApi, credentials } = await redeemToken(
    getMyToken(),
    httpHashLoggerClientProxyHandler,
  );

  void0(credentials);
  void0(qtApi);
  return (async (): Promise<Tedis> => {
    const getSymbolId = getSymboIdByStockSymbol(qtApi);
    void ech0(await getSymbolId('AAPL'));
    const tedis = makeTedis({ port: 6379 });

    ech0(await tedis.keys('*'));
    // const redis = ech0(createClient(6379));
    // void ech0(redis.PING());
    return tedis;
  })().then(t => t);
}
main()
  .then(t => t.close())
  .catch(error => errorlog(error.message));

 */

/*
  export interface ISymbol {
  symbol?: string;
  symbolId?: number;
  tradeUnit: number;
  prevDayClosePrice?: number;
  highPrice52?: number;
  lowPrice52?: number;
  averageVol3Months?: number;
  averageVol20Days?: number;
  outstandingShares?: number;
  eps?: number;
  pe?: number;
  dividend?: number;
  yield?: number;
  exDate?: Date | string;
  marketCap?: number;
  optionType?: OptionType | null;
  optionDurationType?: OptionDurationType | null;
  optionRoot?: string;
  optionContractDeliverables?: string | OptionContractDeliverables;
  underlyings?: string | [];
  UnderlyingMultiplierPair?: string | [];
  multiplier?: number;
  underlyingSymbol?: string;
  underlyingSymbolId?: string;
  cashInLieu?: number;
  optionExerciseType?: OptionExerciseType | null;
  listingExchange?: string | [];
  description?: string;
  securityType?: SecurityType;
  dividendDate?: Date | string;
  optionExpiryDate: string | null;
  optionStrikePrice?: number | null;
  isTradable?: boolean;
  isQuotable?: boolean;
  hasOptions?: boolean;
  currency?: Currency;
  minTicks?: string | MinTick[];
  MinTickData?: string | [];
  pivot?: number;
  minTick?: number;
  industrySector?: string;
  industryGroup?: string;
  industrySubGroup?: string;
  industrySubgroup: string;
  count?: number;
}
   */
