import { Currency } from 'questrade-api-enumerations';

import { ISymbolSearchResult } from '../../../../typescript';

export const symbolSearchResult: ISymbolSearchResult = {
  count: 4,
  currency: Currency.USD,
  description: 'APPLE INC',
  isQuotable: true,
  isTradable: true,
  listingExchange: 'NASDAQ',
  securityType: 'Stock',
  symbol: 'AAPL',
  symbolId: 8049,
};
