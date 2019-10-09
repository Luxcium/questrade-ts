import { Currency } from 'questrade-api-enumerations';
import { ISymbolSearchResult } from '../../api/private/QuestradeApi/MarketsCalls/_getSymbolSearch/typescript';

export const symbolSearchResult: ISymbolSearchResult = {
  symbol: 'AAPL',
  symbolId: 8049,
  description: 'APPLE INC',
  securityType: 'Stock',
  listingExchange: 'NASDAQ',
  isTradable: true,
  isQuotable: true,
  currency: Currency.USD,
  count: 4,
};
