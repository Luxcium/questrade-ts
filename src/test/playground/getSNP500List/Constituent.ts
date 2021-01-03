export interface Constituent {
  Symbol: string;
  Name: string;
  Sector: string;
}
export type ConstituentsSymbolsAndList = [
  ConstituentsSymbols,
  ConstituentsList,
];
export type ConstituentsSymbols = string[];
export type ConstituentsList = Constituent[];
