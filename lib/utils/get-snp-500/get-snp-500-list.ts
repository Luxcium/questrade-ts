import { sideEffects } from '../../resources/side-effects';
import {
  Constituent,
  ConstituentsList,
  ConstituentsSymbols,
  ConstituentsSymbolsAndList,
} from './Constituent';
import { uriToConstituents_json } from './uriToConstituents_json';

export async function getSnP500List({
  startIndex = 0,
  endIndex,
}: { startIndex?: number; endIndex?: number } = {}): Promise<string[]> {
  return (await willGetSNP500StringList()).slice(startIndex, endIndex);
}

const { getHttpClient } = sideEffects;
const client = getHttpClient();

export const willGetSNP500StringList = async () =>
  (await willGetSNP500List())[0];

export async function willGetSNP500List() {
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
  })(uriToConstituents_json);
}
