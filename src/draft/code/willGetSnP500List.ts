import { willGetSNP500StringList } from '../../utils/get-snp-500/get-snp-500-list';

export async function willGetSnP500List({
  startIndex = 0,
  endIndex,
}: { startIndex?: number; endIndex?: number } = {}): Promise<string[]> {
  return (await willGetSNP500StringList()).slice(startIndex, endIndex);
}
