import { sideEffects } from '../../../resources/side-effects';
import {
  Constituent,
  ConstituentsList,
  ConstituentsSymbols,
  ConstituentsSymbolsAndList,
} from './Constituent';
import { uriToConstituents_json as path } from './uriToConstituents_json';

const { getHttpClient } = sideEffects;
const client = getHttpClient();

export const willGetSNP500StringList = async () =>
  (await willGetSNP500List())[0];

export async function willGetSNP500List() {
  return (async url => {
    const data: Constituent[] = (await client.get(url)).data;
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
