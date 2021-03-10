import { Currency } from 'questrade-api-enumerations';

export interface ISymbolInfos {
  currency: Currency;
  description: string;
  listingExchange: string;
  securityType: string;
  serverTime: Date;
  symbolID: number;
  symbolName: string;
  valid: boolean;
}
