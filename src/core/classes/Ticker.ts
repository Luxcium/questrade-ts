// - Copyright (c) Benjamin Vincent Kasapoglu (Luxcium). All rights reserved.
// - Licensed under the MIT License.
// - See License.txt in the project root for license information.

// tslint:disable: class-name
/** The class Ticker is used to create objects representing a Stock Symbol */
class _Ticker implements Ticker {
  /**
   * String value identifier representing stock symbol that follows
   * Questrade symbology.
   */
  private _qtSymbol: string;
  /** Numeric value representing Questrade Internal symbol identifier. */
  private _symbolID: number;
  /** Indicates whether the symbol is optionable. */
  private _hasOptions: boolean;
  /** Indicates whether the symbol is actively listed. */
  private _isQuotable: boolean;
  /** Indicates whether the symbol is tradeble. */
  private _isTradable: boolean;

  /** Indicates whether the symbol is actively listed. */
  public get isQuotable() {
    return this._isQuotable && !this._isNull;
  }
  /** Indicates whether the symbol is tradeble. */
  public get isTradable() {
    return this._isTradable && !this._isNull;
  }
  /** Indicates whether the symbol is optionable. */
  public get hasOptions() {
    return this._hasOptions && !this._isNull;
  }
  private get _isNull() {
    return !!this.qtSymbol && !!this.symbolID;
  }
  /**
   * String value identifier representing stock symbol that follows
   * Questrade symbology.
   */
  public get qtSymbol() {
    if (!this._symbolID) this._qtSymbol = '';
    return this._qtSymbol;
  }
  /** Numeric value representing Questrade Internal symbol identifier. */
  public get symbolID() {
    if (!this._qtSymbol) this._symbolID = 0;
    return this._symbolID;
  }
  constructor(
    qtSymbol: string,
    symbolID: number,
    hasOptions: boolean,
    isQuotable: boolean,
    isTradable: boolean
  ) {
    this._qtSymbol = qtSymbol;
    this._symbolID = symbolID;
    this._hasOptions = hasOptions;
    this._isQuotable = isQuotable;
    this._isTradable = isTradable;
  }
  /**
   * The toString() method returns the qtSymbol string value identifier
   * that follows Questrade symbology for a Stock Symbol.
   */
  public toString() {
    return this.qtSymbol || null;
  }
  /**
   * The valueOf() method returns the symbolID numeric value
   * representing Questrade Internal symbol identifier of a Stock Symbol.
   */
  public valueOf() {
    return this.symbolID || null;
  }
}
/**
 * An interface of the Ticker object is used to represent a Stock ticker Symbol.
 */
export interface Ticker {
  /**
   * String value identifier representing stock symbol that follows
   * Questrade symbology.
   */
  qtSymbol: string;
  /** Numeric value representing Questrade Internal symbol identifier. */
  symbolID: number;
  /** Indicates whether the symbol is optionable. */
  hasOptions: boolean;
  /** Indicates whether the symbol is actively listed. */
  isQuotable: boolean;
  /** Indicates whether the symbol is tradeble. */
  isTradable: boolean;
}

export const tickerFactory = ({
  qtSymbol,
  symbolID,
  hasOptions,
  isQuotable,
  isTradable,
}: Ticker): Ticker => {
  return new _Ticker(qtSymbol, symbolID, hasOptions, isQuotable, isTradable);
};

const nullSymbol = tickerFactory({
  qtSymbol: '',
  symbolID: 0,
  hasOptions: false,
  isQuotable: false,
  isTradable: false,
});
nullSymbol.toString(); // ?
/* export function tickerFactory(
  qtSymbol:string,
  symbolID:number,
  hasOptions: boolean,
  isQuotable: boolean,
  isTradable: boolean,
): Ticker  */
