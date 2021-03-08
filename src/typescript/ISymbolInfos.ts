import { Currency } from 'questrade-api-enumerations';

export interface ISymbolInfos {
  currency: Currency;
  description: string;
  listingExchange: string;
  securityType: string;
  serverTime: Date;
  symbolId: number;
  symbolName: string;
  valid: boolean;
}
