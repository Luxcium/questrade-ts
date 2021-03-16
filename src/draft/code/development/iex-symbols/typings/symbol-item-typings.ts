import { MaybeList } from '../../functional';
import { Sectors } from './sectors';

export type SnP500Symbols = string[];
export type ConstituentsList = SnP500SymbolItem[];
export type SymbolConstituentLists = [SnP500Symbols, ConstituentsList];

/** Will Provide a MaybeList of Constituent  */
export type ConstituentProvider = () => Promise<MaybeList<SnP500SymbolItem>>;

/** Will Provide a MaybeList of SymbolString  */
export type SymbolStringProvider = () => Promise<MaybeList<string>>;

/** Will Provide an Array or Forked MaybeList of SymbolString  */
export type SymbolStringArrayProvider = () => Promise<string[]>;

export interface ConstituentRaw {
  Symbol: string;
  Name: string;
  Sector: string;
}
export interface IEXSymbolsRAW {
  symbol: string;
  name: string;
  date: string;
  isEnabled: boolean;
  type: string;
  iexId: string;
}

export interface SymbolProperty {
  symbol: string;
}

export interface NameProperty {
  name: string;
}

export interface SnP500SymbolItem extends SymbolProperty, NameProperty {
  symbol: string;
  name: string;
  sector: Sectors;
}

export interface IEXSymbolItem extends SymbolProperty, NameProperty {
  symbol: string;
  name: string;
  date: string;
  iexId: number;
  isEnabled: boolean;
  type: string;
}

export interface SymbolItem
  extends SymbolProperty,
    NameProperty,
    IEXSymbolItem,
    SnP500SymbolItem {
  symbol: string;
  name: string;
  sector: Sectors;
  date: string;
  iexId: number;
  isEnabled: boolean;
  type: string;
}

const date = new Date().toISOString();
export const defaulSymbolItem = (): SymbolItem => ({
  date,
  iexId: 0,
  isEnabled: true,
  name: '',
  sector: Sectors.SECTOR_NA,
  symbol: '',
  type: 'n/a',
});
