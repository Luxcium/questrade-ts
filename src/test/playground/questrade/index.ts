/* 'require' call may be converted to an import. */
import { redeemToken } from '../../../';
import { IQuestradeApi } from '../../../typescript';
// const { redeemToken } = require('questrade-ts');

/* You will need to create your own API key: */
/* https://login.questrade.com/APIAccess/UserApps.aspx */

const yourRefreshToken = '9biJACDg2bZiMZYNfDhewfb1gybCNYAc0';

export const qt = async () => {
  const { qtApi, credentials } = await redeemToken(yourRefreshToken);
  return { qtApi, credentials };
};

export const quotes = (qtApi: IQuestradeApi) => qtApi.getQuotes;
export const symbols = (qtApi: IQuestradeApi) => qtApi.getSymbols;
export const account = (qtApi: IQuestradeApi) => qtApi.account;
export const search = (qtApi: IQuestradeApi) => qtApi.search;

export { getSymbolDetails } from './getSymbolDetails';
export { getSymbolId } from './getSymbolId';
