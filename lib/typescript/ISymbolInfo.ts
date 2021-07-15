import { Currency } from 'questrade-api-enumerations';

export interface ISymbolInfo {
  readonly currency: Currency;
  readonly description: string;
  readonly listingExchange: string;
  readonly securityType: string;
  readonly serverTime: Date;
  readonly symbolID: number;
  readonly symbolName: string;
  readonly valid: boolean;
}
