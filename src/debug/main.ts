/* eslint-disable radar/no-duplicate-string */
/* eslint-disable radar/no-identical-functions */
import { qtAPIv2_0 } from '..';
import { IQuestradeAPIv2_0 } from '../public/IQuestradeAPIv2_0';
import { ech0, echo, getMyToken } from '../resources/side-effects';
import { redisProxyHandler } from '../resources/side-effects/proxies/client/redis/redis-client-proxy-handler-class';
import { id0 } from '../utils';
import { willGetSNP500StringList } from './development/getSNP500List';

const once = { onlyOnce: true };

// -----------------------------------------------------------------------------!!

export async function main() {
  echo(`Will execute main: ${once.onlyOnce}`);
  if (!once.onlyOnce) {
    return false;
  }

  once.onlyOnce = false;
  echo('Will process');
  const { qtApi } = await qtAPIv2_0({ token: getMyToken });
  // echo(await qtApi.account.getServerTime());
  void qtApi;

  return true;
}

main();

export async function mainRedis() {
  const proxyFactory = redisProxyHandler({
    httpConnectProxy: true,
  });

  void proxyFactory;
  const { qtApi } = await qtAPIv2_0({
    accountCallsPerHour: 30_000,
    accountCallsPerSecond: 30,
    marketCallsPerHour: 1500,
    marketCallsPerSecond: 20,
    proxyFactory,
    token: getMyToken,
  });

  ech0(await qtApi.account.getServerTime());

  return qtApi;
}

export async function getTime() {
  const qtApi: IQuestradeAPIv2_0 = await mainRedis();
  const time = qtApi.account.getServerTime(); // ('2021-02-01')('2021-02-10');

  ech0(await time);

  return id0(qtApi);
}

export async function getAllAccounts() {
  const qtApi: IQuestradeAPIv2_0 = await mainRedis();
  const accounts = qtApi.account.getAllAccounts(); // ('2021-02-01')('2021-02-10');

  ech0(await accounts);

  return id0(qtApi);
}

export async function getPositions() {
  const qtApi: IQuestradeAPIv2_0 = await mainRedis();
  const positions = qtApi.account.getPositions(); // ('2021-02-01')('2021-02-10');

  ech0(await positions);

  return id0(qtApi);
}

export async function getBalances() {
  const qtApi: IQuestradeAPIv2_0 = await mainRedis();
  const balances = qtApi.account.getBalances(); // ('2021-02-01')('2021-02-10');

  ech0(await balances);

  return id0(qtApi);
}

export async function getOrders() {
  const qtApi: IQuestradeAPIv2_0 = await mainRedis();
  const orders = qtApi.account.getOrders()('2021-02-01')('2021-02-10');

  ech0(await orders);

  return id0(qtApi);
}

export async function getExecutions() {
  const qtApi: IQuestradeAPIv2_0 = await mainRedis();
  const executions = qtApi.account.getExecutions('2021-02-01')('2021-02-10');

  ech0(await executions);

  return id0(qtApi);
}

export async function getOrdersByIds() {
  const qtApi: IQuestradeAPIv2_0 = await mainRedis();
  const order = qtApi.account.getOrdersByIds([793_393_477]); // ('2021-02-01')('2021-02-10');

  ech0(await order);

  return id0(qtApi);
}

export async function getActivities() {
  const qtApi: IQuestradeAPIv2_0 = await mainRedis();
  const activities = qtApi.account.getActivities('2021-02-01')('2021-02-10');

  ech0(await activities);

  return id0(qtApi);
}

export async function getCandles() {
  const qtApi: IQuestradeAPIv2_0 = await mainRedis();

  // .map(item => async () =>
  //   qtApi.getSymbols.byStockIds([(await item())[0]?.symbolId || 1]),
  // )
  // .map(item => item());

  // .slice(0, 20)

  id0(await willGetSNP500StringList())
    .map(item => qtApi.search.stock(item))
    .map(async item => {
      const symbolId = (await item)[0]?.symbolId || 1;
      qtApi.market.getCandlesByStockId(symbolId)()(
        new Date('2020-01-01').toISOString(),
      )(new Date('2021-01-01').toISOString());

      return symbolId;
    })
    .map(async symbolId => {
      // const symbolId = (await item )[0]?.symbolId || 1;
      qtApi.market.getCandlesByStockId(await symbolId)()(
        new Date('2019-01-01').toISOString(),
      )(new Date('2020-01-01').toISOString());

      return symbolId;
    })
    .map(async symbolId => {
      // const symbolId = (await item )[0]?.symbolId || 1;
      qtApi.market.getCandlesByStockId(await symbolId)()(
        new Date('2018-01-01').toISOString(),
      )(new Date('2019-01-01').toISOString());

      return symbolId;
    })
    .map(async symbolId => {
      // const symbolId = (await item )[0]?.symbolId || 1;
      qtApi.market.getCandlesByStockId(await symbolId)()(
        new Date('2016-01-01').toISOString(),
      )(new Date('2017-01-01').toISOString());

      return symbolId;
    });
}
