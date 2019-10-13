import { redeemToken } from '../../../api/public';
import { void0 } from '../../../api/utils';
import { IQuestradeApi } from '../../../typescript';

describe('all methods on qtApi', () => {
  let qtApi: IQuestradeApi;
  let { account, market, quotes, search, symbols } = qtApi.get;
  // let  = get;
  void0(void0); // [accounts, market, quotes, search, symbols]);
  beforeAll(async done => {
    qtApi = (await redeemToken('MOCKMOCK')).qtApi;
    const get = qtApi.get;
    ({ account, market, quotes, search, symbols } = get);
    account = get.account;
    market = get.market;
    quotes = get.quotes;
    search = get.search;
    symbols = get.symbols;
    done();
  });
  it('myBalances', async done => {
    console.log(await qtApi.myBalances());
    done();
  });
});
