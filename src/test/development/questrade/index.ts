import { questradeAPI } from '../../..';
import { QuestradeApi } from '../../../typescript';

/* you will need to create your own API key: */
/* https://login.questrade.com/APIAccess/UserApps.aspx */

const yourRefreshToken = '9biJACDg2bZiMZYNfDhewfb1gybCNYAc0';

export const qt = async () => {
  const { qtApi, credentials } = await questradeAPI({
    token: yourRefreshToken,
  });

  return { credentials, qtApi };
};

export const quotes = (qtApi: QuestradeApi) => qtApi.getQuotes;
export const symbols = (qtApi: QuestradeApi) => qtApi.getSymbols;
export const account = (qtApi: QuestradeApi) => qtApi.account;
export const search = (qtApi: QuestradeApi) => qtApi.search;
