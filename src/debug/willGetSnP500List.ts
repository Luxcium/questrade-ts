import { willGetSNP500StringList } from './development/getSNP500List';

export async function willGetSnP500List({
  startIndex = 0,
  endIndex,
}: { startIndex?: number; endIndex?: number } = {}): Promise<string[]> {
  return (await willGetSNP500StringList()).slice(startIndex, endIndex);
}
