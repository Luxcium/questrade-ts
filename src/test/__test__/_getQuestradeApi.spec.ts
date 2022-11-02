import { redeemToken } from '../..';
import {
  Credentials,
  IQtApiAccount,
  IQtApiMarket,
  IQtApiOptionChains,
  IQtApiOptionsQuotes,
  IQtApiQuotes,
  IQtApiSearch,
  IQtApiSymbols,
  IQuestradeApi,
  StrategyVariantRequest,
} from '../../typescript';
import { log, setDateRange, void0 } from '../../utils';

const dateRange30Days = setDateRange(30);

let qtApi: IQuestradeApi;
let credentials: Credentials;

let account: () => Promise<IQtApiAccount>;
let market: () => Promise<IQtApiMarket>;
let getQuotes: () => Promise<IQtApiQuotes>;
let getOptionsQuotes: () => Promise<IQtApiOptionsQuotes>;
let getSymbols: () => Promise<IQtApiSymbols>;
let getOptionChains: () => Promise<IQtApiOptionChains>;
let search: () => Promise<IQtApiSearch>;

beforeAll(async () => {
  const qtApiAndCredentials = await redeemToken('MOCK');
  qtApi = qtApiAndCredentials.qtApi;

  credentials = qtApiAndCredentials.credentials;

  account = async () => qtApi.account;
  market = async () => qtApi.market;
  getQuotes = async () => qtApi.getQuotes;
  getOptionsQuotes = async () => qtApi.getOptionsQuotes;
  search = async () => qtApi.search;
  getSymbols = async () => qtApi.getSymbols;
  getOptionChains = async () => qtApi.getOptionChains;

  void0({
    dateRange30Days,
    market,
    getQuotes,
    search,
    getSymbols,
  });
});

// # QtAPI PROPERTIES
describe('QtAPI PROPERTIES will test all properties and methods on qtApi', () => {
  it('should validate credentials toValue', done => {
    void0(credentials.toValue());
    done();
  });
  it('should credentials toString', done => {
    void0(credentials.toString());
    done();
  });

  it('should validate qtApi myBalances', async () => {
    expect(
      (await qtApi.myBalances()).CAD.combined.current.buyingPower
    ).not.toBeNaN();
  });

  it('should validate qtApi myBalances', done => {
    void0(qtApi.serverTime);
    done();
  });
  it('should validate qtApi myBalances', async () => {
    void0((await qtApi.myBalances()).CAD.combined.current.buyingPower);
  });
});

// # ACCOUNT METHODS
describe('ACCOUNT METHODS will test all methods on get.account', () => {
  it('should validate activities', async () => {
    const activities30Days = async () =>
      dateRange30Days((await account()).getActivities);
    void0(await activities30Days());
  });
  it('should validate balances', async () => {
    void0(await (await account()).getBalances());
  });
  it('should validate allAccount', async () => {
    void0(await (await account()).getAllAccounts());
  });
  it('should validate executions', async () => {
    const executions30Days = async () =>
      dateRange30Days((await account()).getExecutions);
    void0(await executions30Days());
  });
  it("should validate orders 'All' state filter", async () => {
    const orders30Days = async () =>
      dateRange30Days((await account()).getOrders('All'));
    void0(await orders30Days());
  });
  it('should validate orders default state filter', async () => {
    const orders30Days = async () =>
      dateRange30Days((await account()).getOrders());
    void0(await orders30Days());
  });
  it('should validate orders Open state filter', async () => {
    const orders30Days = async () =>
      dateRange30Days((await account()).getOrders('Open'));
    void0(await orders30Days());
  });
  it('should validate orders Closed state filter', async () => {
    const orders30Days = async () =>
      dateRange30Days((await account()).getOrders('Closed'));
    void0(await orders30Days());
  });
  it('should validate ordersByIds', async () => {
    void0((await account()).getOrdersByIds([123]));
  });
  it('should validate positions', async () => {
    void0(await (await account()).getPositions());
  });
  it('should validate serverTime', async () => {
    void0(await (await account()).getServerTime());
  });
});

// # MARKET METHODS
describe('MARKET METHODS will test all methods on get.market', () => {
  it('should validate allMarkets', async () => {
    void0(await (await market()).getAllMarkets());
  });
  it("should validate candlesByStockId with 'OneDay' interval", async () => {
    const candel30Day = async () =>
      dateRange30Days((await market()).getCandlesByStockId(8049)('OneDay'));
    void0(await candel30Day());
  });
  it('should validate candlesByStockId with default interval', async () => {
    const candel30Day = async () =>
      dateRange30Days((await market()).getCandlesByStockId(8049)());
    void0(await candel30Day());
  });
});

// # QUOTES METHODES
describe('QUOTES METHODES will test all methods on get.quotes', () => {
  const demoRequestVariants: StrategyVariantRequest = {
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
  it('should validate get quotes byStockIds', async () => {
    void0(await (await getQuotes()).byStockIds([8049]));
  });
  it('should validate get quotes byStrategies', async () => {
    void0(await (await getQuotes()).byStrategies(demoRequestVariants));
  });
  it('should validate that can get optionsQuotes fromFilter', async () => {
    void0(
      await (
        await getOptionsQuotes()
      ).fromFilter({
        expiryDate: '2019-10-18T00:00:00.000000-05:00',
        underlyingId: 27426,
      })
    );
  });
  it('should validate that can get optionsQuotes byOptionsIds', async () => {
    void0(await (await getOptionsQuotes()).byOptionsIds([27244725]));
  });
});

// # SEARCH METHODES
describe('SEARCH METHODES will test all methods on get.search', () => {
  it('should validate countResults ', async () => {
    void0(await (await search()).stock('aapl'));
    void0(await (await search()).stock('aapl', 0));
  });
  it('should validate allStocks ', async () => {
    void0(await (await search()).allStocks('aapl'));
    void0(await (await search()).allStocks('aapl', 0));
  });
  it('should validate countResults ', async () => {
    void0(await (await search()).countResults('aapl'));
  });
});

// # SYMBOLS METHODS
describe('SYMBOLS METHODS will test all methods on get.symbols', () => {
  it('should validate optionChains byStockId', async () => {
    void0(await (await getOptionChains()).byStockId(8049));
  });
  it('should validate symbols byStockIds', async () => {
    void0(await (await getSymbols()).byStockIds([8049]));
  });
});
void0(log);
