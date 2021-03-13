import { willGetSNP500StringList } from '../../utils/get-snp-500/get-snp-500-list';


export async function step1(startIndex: number = 0, endIndex?: number) {
  return (await willGetSNP500StringList()).slice(startIndex, endIndex);
}
