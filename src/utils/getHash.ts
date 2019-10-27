import crypto from 'crypto';

export const getHash = (data: string, hashAlgo = 'sha1', shortSlice = 6) => {
  const hAlgo = crypto.createHash(hashAlgo);
  hAlgo.write(data);
  const longer: string = hAlgo.digest('hex').toString();
  const shorter: string = longer.slice(0, shortSlice);
  const hashObject = { shorter, longer };
  const returnValue: [
    string,
    string,
    {
      shorter: string;
      longer: string;
    }
  ] = [shorter, longer, hashObject];
  return returnValue;
};
