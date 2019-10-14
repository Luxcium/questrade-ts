import { redeemToken } from '../../../api/public';
import { log, setDateRange, void0 } from '../../../api/utils';
import {
  IQtApiAccount,
  IQtApiGet,
  IQtApiMarket,
  IQtApiQuotes,
  IQtApiSearch,
  IQtApiSymbols,
  IQuestradeApi,
} from '../../../typescript';

const dateRange30Days = setDateRange(30);

let qtApi: IQuestradeApi;

let get: IQtApiGet;

let account: () => Promise<IQtApiAccount>;
let market: () => Promise<IQtApiMarket>;
let quotes: () => Promise<IQtApiQuotes>;
let search: () => Promise<IQtApiSearch>;
let symbols: () => Promise<IQtApiSymbols>;

beforeAll(async done => {
  qtApi = (await redeemToken('MOCKMOCK')).qtApi;
  get = qtApi.get;

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

describe('methods on get.account', () => {
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
  it('should validate all(await Account())s', async done => {
    void0(await (await account()).allAccounts());
    done();
  });
  it('should validate executions', async done => {
    const executions30Days = async () =>
      dateRange30Days((await account()).executions);
    void0(await executions30Days());
    done();
  });
  it('should validate orders', async done => {
    const orders30Days = async () =>
      dateRange30Days((await account()).orders('All'));
    void0(await orders30Days());
    done();
  });
  // it.skip('should validate ordersByIds', async done => {
  //   void0((await account()).ordersByIds);
  //   // void0(await ordersByIds());
  //   done();
  // });
  it('should validate positions', async done => {
    void0(await (await account()).positions());
    done();
  });
});
describe.skip('all methods on get.market', () => {
  it('should validate allMarkets', async done => {
    log(await (await market()).allMarkets());
    done();
  });
  it('should validate candlesByStockId', async done => {
    const candel30Day = async () =>
      dateRange30Days((await market()).candlesByStockId(8049)('OneDay'));
    log(await candel30Day());
    done();
  });
});
// describe.skip('all methods on get.quotes', () => {
//   let {} = quotes;
//   beforeAll(async done => {
//     done();
//   });
// });
// describe.skip('all methods on get.search', () => {
//   let {} = search;
//   beforeAll(async done => {
//     done();
//   });
// });
// describe.skip('all methods on get.symbols', () => {
//   let {} = symbols;
//   beforeAll(async done => {
//     done();
//   });
// });

/*


  it('should validate

  ', async () => {/*  *-/});
  it('

  ', async () => {

  });

it('should validate activities', async () => {
  //
});
it('should validate balances', async () => {
  //
});
it('should validate allAccounts', async () => {
  //
});
it('should validate executions', async () => {
  //
});
it('should validate orders', async () => {
  //
});
it('should validate ordersByIds', async () => {
  //
});
it('should validate positions', async () => {
  //
});

describe('all methods on qtApi', () => {
//

});describe('all methods on

', () => {
//

});

 describe('all methods on get.account', () => {
//
 });describe('all methods on get.market', () => {
//
 });describe('all methods on get.quotes', () => {
//
 });describe('all methods on get.search', () => {
//
 });describe('all methods on get.symbols', () => {



//

});
touch account.spec.ts
touch market.spec.ts
touch quotes.spec.ts
touch search.spec.ts
touch symbols.spec.ts
*/
// it('myBalances', async done => {
//   console.log(await qtApi.myBalances());
//   done();
// });
// it('myBalances', async done => {
//   console.log(await qtApi.myBalances());
//   done();
// });
// it('myBalances', async done => {
//   console.log(await qtApi.myBalances());
//   done();
// });
// it('myBalances', async done => {
//   console.log(await qtApi.myBalances());
//   done();
// });
// it('myBalances', async done => {
//   console.log(await qtApi.myBalances());
//   done();
// });
