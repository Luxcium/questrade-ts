import { willGetSNP500StringList } from '../../utils/get-snp-500/get-snp-500-list';

/** @deprecated Please use getSnP500List */
export async function step1_DPRECATED(
  startIndex: number = 0,
  endIndex?: number,
) {
  return (await willGetSNP500StringList()).slice(startIndex, endIndex);
}
