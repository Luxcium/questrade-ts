// - ------------------------------------------------------------------------ //
import {
  Currency,
  ListingExchange,
  SecurityType,
} from 'questrade-api-enumerations';

// -------------------------------------------------------------------------- //
// - Copyright (c) Benjamin Vincent Kasapoglu (Luxcium). All rights reserved.
// - Licensed under the MIT License.
// - See License.txt in the project root for license information.
// - ------------------------------------------------------------------------ //

export interface IStockSymbol {
  symbol: string;
  symbolId: number;
  description: string;
  securityType: SecurityType;
  listingExchange: ListingExchange;
  isTradable: boolean;
  isQuotable: boolean;
  currency: Currency;
}

export type StockSymbol = IStockSymbol | string;
// - ------------------------------------------------------------------------ //
