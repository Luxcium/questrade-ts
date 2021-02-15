/* eslint-disable prefer-destructuring */
import { questradeAPI } from '../..';
import {
  Credentials,
  QtApiAccount,
  QtApiMarket,
  QtApiOptionChains,
  QtApiOptionsQuotes,
  QtApiQuotes,
  QtApiSearch,
  QtApiSymbols,
  StrategyVariantRequest,
} from '../../typescript';
import { setDateRange, void0 } from '../../utils';

const dateRange30Days = setDateRange(30);
let qtApi: any;
let credentials: Credentials;
let account: () => Promise<QtApiAccount>;
let market: () => Promise<QtApiMarket>;
let getQuotes: () => Promise<QtApiQuotes>;
let getOptionsQuotes: () => Promise<QtApiOptionsQuotes>;
let getSymbols: () => Promise<QtApiSymbols>;
let getOptionChains: () => Promise<QtApiOptionChains>;
let search: () => Promise<QtApiSearch>;

beforeAll(async done => {
  const qtApiAndCredentials = await questradeAPI({ token: 'MOCK' });

  qtApi = qtApiAndCredentials.qtApi;

  credentials = qtApiAndCredentials.credentials;

  account = () => qtApi.account;
  market = () => qtApi.market;
  getQuotes = () => qtApi.getQuotes;
  getOptionsQuotes = () => qtApi.getOptionsQuotes;
  search = () => qtApi.search;
  getSymbols = () => qtApi.getSymbols;
  getOptionChains = () => qtApi.getOptionChains;

  void0({
    dateRange30Days,
    getQuotes,
    getSymbols,
    market,
    search,
  });
  done();
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

  it('should validate qtApi myBalances 1/3', async done => {
    expect(
      (await qtApi.myBalances()).CAD.combined.current.buyingPower,
    ).not.toBeNaN();
    done();
  });

  it('should validate qtApi myBalances 2/3', done => {
    void0(qtApi.serverTime);
    done();
  }, 10_000);
  it('should validate qtApi myBalances 3/3', async done => {
    void0((await qtApi.myBalances()).CAD.combined.current.buyingPower);
    done();
  });
});

// # ACCOUNT METHODS
describe('ACCOUNT METHODS will test all methods on get.account', () => {
  it('should validate activities', async done => {
    const activities30Days = async () =>
      dateRange30Days((await account()).getActivities);

    void0(await activities30Days());
    done();
  }, 10_000);
  it('should validate balances', async done => {
    void0(await (await account()).getBalances());
    done();
  }, 10_000);
  it('should validate allAccount', async done => {
    void0(await (await account()).getAllAccounts());
    done();
  }, 10_000);
  it('should validate executions', async done => {
    const executions30Days = async () =>
      dateRange30Days((await account()).getExecutions);

    void0(await executions30Days());
    done();
  }, 10_000);
  it("should validate orders 'All' state filter", async done => {
    const orders30Days = async () =>
      dateRange30Days((await account()).getOrders('All'));

    void0(await orders30Days());
    done();
  }, 10_000);
  it('should validate orders default state filter', async done => {
    const orders30Days = async () =>
      dateRange30Days((await account()).getOrders());

    void0(await orders30Days());
    done();
  }, 10_000);
  it('should validate orders Open state filter', async done => {
    const orders30Days = async () =>
      dateRange30Days((await account()).getOrders('Open'));

    void0(await orders30Days());
    done();
  }, 10_000);
  it('should validate orders Closed state filter', async done => {
    const orders30Days = async () =>
      dateRange30Days((await account()).getOrders('Closed'));

    void0(await orders30Days());
    done();
  }, 10_000);
  it('should validate ordersByIds', async done => {
    void0((await account()).getOrdersByIds([123]));
    done();
  }, 10_000);
  it('should validate positions', async done => {
    void0(await (await account()).getPositions());
    done();
  }, 10_000);
  it('should validate serverTime', async done => {
    void0(await (await account()).getServerTime());
    done();
  }, 10_000);
});

// # MARKET METHODS
describe('MARKET METHODS will test all methods on get.market', () => {
  it('should validate allMarkets', async done => {
    void0(await (await market()).getAllMarkets());
    done();
  });
  it("should validate candlesByStockId with 'OneDay' interval", async done => {
    const candel30Day = async () =>
      dateRange30Days((await market()).getCandlesByStockId(8049)('OneDay'));

    void0(await candel30Day());
    done();
  });
  it('should validate candlesByStockId with default interval', async done => {
    // Const candel30Day = async () =>
    //   DateRange30Days((await market()).getCandlesByStockId(8049)());
    void0((await market()).getCandlesByStockId(8049)());
    done();
  });
});

// # QUOTES METHODES
describe('QUOTES METHODES will test all methods on get.quotes', () => {
  const demoRequestVariants: StrategyVariantRequest = {
    variants: [
      {
        legs: [
          {
            action: 'Buy',
            ratio: 1000,
            symbolId: 27_244_725,
          },
          {
            action: 'Sell',
            ratio: 1001,
            symbolId: 27_244_738,
          },
        ],
        strategy: 'Custom',
        variantId: 1,
      },
    ],
  };

  it('should validate get quotes byStockIds', async done => {
    void0(await (await getQuotes()).byStockIds([8049]));
    done();
  });
  it('should validate get quotes byStrategies', async done => {
    void0(await (await getQuotes()).byStrategies(demoRequestVariants));
    done();
  });
  it('should validate that can get optionsQuotes fromFilter', async done => {
    void0(
      await (await getOptionsQuotes()).fromFilter({
        expiryDate: '2019-10-18T00:00:00.000000-05:00',
        underlyingId: 27_426,
      }),
    );
    done();
  });
  it('should validate that can get optionsQuotes byOptionsIds', async done => {
    void0(await (await getOptionsQuotes()).byOptionsIds([27_244_725]));
    done();
  });
});

// # SEARCH METHODES
describe('SEARCH METHODES will test all methods on get.search', () => {
  it('should validate countResults ', async done => {
    void0(await (await search()).stock('aapl'));
    void0(await (await search()).stock('aapl', 0));
    done();
  });
  it('should validate allStocks ', async done => {
    void0(await (await search()).allStocks('aapl'));
    void0(await (await search()).allStocks('aapl', 0));
    done();
  });
  it('should validate countResults ', async done => {
    void0(await (await search()).countResults('aapl'));
    done();
  });
});

// # SYMBOLS METHODS
describe('SYMBOLS METHODS will test all methods on get.symbols', () => {
  it('should validate optionChains byStockId', async done => {
    void0(await (await getOptionChains()).byStockId(8049));
    done();
  });
  it('should validate symbols byStockIds', async done => {
    void0(await (await getSymbols()).byStockIds([8049]));

    done();
  });
});
