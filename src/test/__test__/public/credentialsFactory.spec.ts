import { redeemToken } from '../../../api/public';
import { setDateRange, void0 } from '../../../api/utils';
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

describe('all methods on get.account', () => {
  // const {
  //   activities,
  //   balances,
  //   allAccounts,
  //   executions,
  //   orders,
  //   ordersByIds,
  //   positions,
  // } =  account;
  it('Will validate activities', async done => {
    const activities30Days = async () =>
      dateRange30Days((await account()).activities);
    console.log(await activities30Days());
    done();
  });
  it('Will validate balances', async done => {
    console.log(await (await account()).balances());
    done();
  });
  it('Will validate all(await Account())s', async done => {
    console.log(await (await account()).allAccounts());
    done();
  });
  it('Will validate executions', async done => {
    const executions30Days = async () =>
      dateRange30Days((await account()).executions);
    console.log(await executions30Days());
    done();
  });
  it('Will validate orders', async done => {
    const orders30Days = async () =>
      dateRange30Days((await account()).orders('All'));
    console.log(await orders30Days());
    done();
  });
  // it.skip('Will validate ordersByIds', async done => {
  //   void0((await account()).ordersByIds);
  //   // console.log(await ordersByIds());
  //   done();
  // });
  it('Will validate positions', async done => {
    console.log(await (await account()).positions());
    done();
  });
});
// describe.skip('all methods on get.market', () => {
//   let {} = market;
//   beforeAll(async done => {
//     done();
//   });
// });
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


  it('Will validate

  ', async () => {/*  *-/});
  it('

  ', async () => {

  });

it('Will validate activities', async () => {
  //
});
it('Will validate balances', async () => {
  //
});
it('Will validate allAccounts', async () => {
  //
});
it('Will validate executions', async () => {
  //
});
it('Will validate orders', async () => {
  //
});
it('Will validate ordersByIds', async () => {
  //
});
it('Will validate positions', async () => {
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
