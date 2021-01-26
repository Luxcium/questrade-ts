import crypto from 'crypto';

export const getHash = (
  data: string,
  hashAlgo: string = 'sha1',
  shortSlice: number = 6,
) => {
  const hAlgo = crypto.createHash(hashAlgo);

  hAlgo.write(data);
  const longer: string = hAlgo.digest('hex').toString();
  const shorter: string = longer.slice(0, shortSlice);
  const hashObj = { longer, shorter };

  return [shorter, longer, hashObj];
};

export type GetHash = (
  data: string,
  hashAlgo: string,
  shortSlice: number,
) => [
  string,
  string,
  {
    shorter: string;
    longer: string;
  },
];
