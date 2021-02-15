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

export function willGetSNP500List() {
  return (async url => {
    const { data } = await client.get(url);
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
