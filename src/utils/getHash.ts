import crypto from 'crypto';

export const getHash = (
  data: string,
  hashAlgo: string = 'sha1',
  shortSlice: number = 6
) => {
  const hAlgo = crypto.createHash(hashAlgo);
  hAlgo.write(data);
  const longer: string = hAlgo.digest('hex').toString();
  const shorter: string = longer.slice(0, shortSlice);
  const hashObj = { shorter, longer };
  const returnValue: [
    string,
    string,
    {
      shorter: string;
      longer: string;
    }
  ] = [shorter, longer, hashObj];
  return returnValue;
};
