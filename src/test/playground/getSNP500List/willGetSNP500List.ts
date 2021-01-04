import axios from 'axios';

import {
  Constituent,
  ConstituentsList,
  ConstituentsSymbols,
  ConstituentsSymbolsAndList,
} from './Constituent';
import { uriToConstituents_json as path } from './uriToConstituents_json';

export const willGetSNP500StringList = async () =>
  (await willGetSNP500List())[0];

export async function willGetSNP500List(): Promise<ConstituentsSymbolsAndList> {
  return (async (url): Promise<ConstituentsSymbolsAndList> => {
    const data: Constituent[] = (await axios.get(url)).data;
    const constituentsSymbols: ConstituentsSymbols = data.map(
      (obj: Constituent) => obj.Symbol,
    );
    const constituentsList: ConstituentsList = data.map(
      (obj: Constituent) => obj,
    );
    return [
      constituentsSymbols,
      constituentsList,
    ] as ConstituentsSymbolsAndList;
  })(path);
}
// willGetSNP500List().then(
//   symbolsAndList => console.log(symbolsAndList)
//   // symbolsAndList[0].forEach((item, index) => console.log(index + 1, item))
// );
