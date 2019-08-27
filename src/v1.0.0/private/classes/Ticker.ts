/** The class Ticker is used to create objects representing a Stock Symbol */
export class Ticker {
  /** Symbol identifier */
  public symbolID: number;
  /** Symbol that follows Questrade symbology  */
  public qtSymbol: string;
  /** Indicates whether the symbol is actively listed. */
  public isQuotable: boolean;
  /** Indicates whether the symbol is tradeble. */
  public isTradable: boolean;

  constructor() {
    this.qtSymbol = '';
    this.symbolID = 0;
    this.isQuotable = false;
    this.isTradable = false;
  }
}
