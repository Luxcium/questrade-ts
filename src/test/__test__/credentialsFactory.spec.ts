import { _logErrors } from '../../core/private/client/_coreApiFunction_AXIOS/_logErrors';
import { redeemToken } from '../../core/public';
import {
  Credentials,
  IQtApiAccount,
  IQtApiGet,
  IQtApiMarket,
  IQtApiQuotes,
  IQtApiSearch,
  IQtApiSymbols,
  IQuestradeApi,
} from '../../core/typescript';
import { log, setDateRange, void0 } from '../../utils';

const dateRange30Days = setDateRange(30);

let qtApi: IQuestradeApi;
let credentials: Credentials;
let get: IQtApiGet;

let account: () => Promise<IQtApiAccount>;
let market: () => Promise<IQtApiMarket>;
let quotes: () => Promise<IQtApiQuotes>;
let search: () => Promise<IQtApiSearch>;
let symbols: () => Promise<IQtApiSymbols>;

beforeAll(async done => {
  const qtApiAndCredentials = await redeemToken(
    'i4grq9hRfji9WFwA316ZtpildcNUaogC0'
  );
  qtApi = qtApiAndCredentials.qtApi;
  get = qtApi.get;
  credentials = qtApiAndCredentials.credentials;

  account = async () => get.account;
  market = async () => get.market;
  quotes = async () => get.quotes;
  search = async () => get.search;
  symbols = async () => get.symbols;

  void0({
    dateRange30Day: dateRange30Days,
    market,
    quotes,
    search,
    symbols,
  });
  done();
});

// # QtAPI PROPERTIES
describe.skip('QtAPI PROPERTIES will test all properties and methods on qtApi', () => {
  it('should validate credentials toValue', async done => {
    void0(credentials.toValue());
    done();
  });
  it('should credentials toString', async done => {
    void0(credentials.toString());
    done();
  });

  it('should validate qtApi myBalances', async done => {
    expect(
      (await qtApi.myBalances()).CAD.combined.current.buyingPower
    ).not.toBeNaN();
    done();
  });
  it('!!! !!! should validate qtApi myBalances', async done => {
    expect(() => {
      throw _logErrors(new Error('Should ThrowError'));
    }).toThrowError('Should ThrowError');
    done();
  });
  it('!!! !!! should validate qtApi myBalances', async done => {
    expect(() => {
      throw _logErrors(
        new Error('Should ThrowError'),
        'testing error messages'
      );
    }).toThrowError('Should ThrowError');
    done();
  });
  it('should validate qtApi myBalances', async done => {
    void0(qtApi.serverTime);
    done();
  });
  it('should validate qtApi myBalances', async done => {
    void0((await qtApi.myBalances()).CAD.combined.current.buyingPower);
    done();
  });
});

// # ACCOUNT METHODS
describe.skip('ACCOUNT METHODS will test all methods on get.account', () => {
  it('should validate activities', async done => {
    const activities30Days = async () =>
      dateRange30Days((await account()).activities);
    void0(await activities30Days());
    done();
  });
  it('should validate balances', async done => {
    void0(await (await account()).balances());
    done();
  });
  it('should validate allAccount', async done => {
    void0(await (await account()).allAccounts());
    done();
  });
  it('should validate executions', async done => {
    const executions30Days = async () =>
      dateRange30Days((await account()).executions);
    void0(await executions30Days());
    done();
  });
  it("should validate orders 'All' state filter", async done => {
    const orders30Days = async () =>
      dateRange30Days((await account()).orders('All'));
    void0(await orders30Days());
    done();
  });
  it('should validate orders default state filter', async done => {
    const orders30Days = async () =>
      dateRange30Days((await account()).orders());
    void0(await orders30Days());
    done();
  });
  it('should validate orders Open state filter', async done => {
    const orders30Days = async () =>
      dateRange30Days((await account()).orders('Open'));
    void0(await orders30Days());
    done();
  });
  it('should validate orders Closed state filter', async done => {
    const orders30Days = async () =>
      dateRange30Days((await account()).orders('Closed'));
    void0(await orders30Days());
    done();
  });
  it('should validate ordersByIds', async done => {
    void0((await account()).ordersByIds([123]));
    done();
  });
  it('should validate positions', async done => {
    void0(await (await account()).positions());
    done();
  });
});

// # MARKET METHODS
describe.skip('MARKET METHODS will test all methods on get.market', () => {
  it('should validate allMarkets', async done => {
    void0(await (await market()).allMarkets());
    done();
  });
  it("should validate candlesByStockId with 'OneDay' interval", async done => {
    const candel30Day = async () =>
      dateRange30Days((await market()).candlesByStockId(8049)('OneDay'));
    void0(await candel30Day());
    done();
  });
  it('should validate candlesByStockId with default interval', async done => {
    const candel30Day = async () =>
      dateRange30Days((await market()).candlesByStockId(8049)());
    void0(await candel30Day());
    done();
  });
});

// # QUOTES METHODES
describe('QUOTES METHODES will test all methods on get.quotes', () => {
  it.skip('should validate get quotes byStockIds', async done => {
    void0(await (await quotes()).byStockIds([8049]));
    done();
  });
  it('should validate that can get optionsQuotes fromFilter', async done => {
    void0(
      await (await quotes()).optionsQuotes.fromFilter({
        expiryDate: '2019-10-18T00:00:00.000000-05:00',
        underlyingId: 27426,
      })
    );
    done();
  });
  it('should validate that can get optionsQuotes byOptionsIds', async done => {
    void0(await (await quotes()).optionsQuotes.byOptionsIds([27244725]));
    done();
  });
  it.skip('should validate that can get quotes byStrategies', async done => {
    void0(
      await (await quotes()).byStrategies({
        variants: [
          {
            variantId: 1,
            strategy: 'Custom',
            legs: [
              {
                symbolId: 27426,
                ratio: 1000,
                action: 'Buy',
              },
              {
                symbolId: 10550014,
                ratio: 10,
                action: 'Sell',
              },
            ],
          },
        ],
      })
    );
    done();
  });
});

// # SEARCH METHODES
describe.skip('SEARCH METHODES will test all methods on get.search', () => {
  it('should validate allStocks ', async done => {
    void0(await (await search()).allStocks('aapl'));
    void0(await (await search()).allStocks('aapl', 0));

    // https://api01.iq.questrade.com/v1/symbols/search?prefix=AAPL
    done();
  });
  it('should validate countResults ', async done => {
    void0(await (await search()).countResults('aapl'));
    done();
  });
  it('should validate countResults ', async done => {
    void0(await (await search()).stock('aapl'));
    void0(await (await search()).stock('aapl', 0));
    done();
  });
});

// # SYMBOLS METHODS
describe.skip('SYMBOLS METHODS will test all methods on get.symbols', () => {
  it('should validate optionChains byStockId', async done => {
    void0(await (await symbols()).optionChains.byStockId(8049));
    done();
  });
  it('should validate symbols byStockIds', async done => {
    void0(await (await symbols()).byStockIds([8049]));

    done();
  });
});
void0(log);
