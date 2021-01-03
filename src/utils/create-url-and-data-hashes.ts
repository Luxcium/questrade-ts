import { BinaryToTextEncoding, createHash } from 'crypto';

import { UrlDataAndHashes } from '../typescript';

export const creatUrlAndDataHashes = (
  urlPath: string = '',
  dataToHash?: any,
): UrlDataAndHashes => {
  const BASE64: BinaryToTextEncoding = 'base64';
  const HEX: BinaryToTextEncoding = 'hex';
  return {
    DATA: !dataToHash ? null : dataToHash,
    URL_PATH: !urlPath ? null : urlPath,
    URL_HASH_HEX: !urlPath
      ? null
      : createHash('sha256').update(urlPath).digest(HEX),
    URL_HASH_64: !urlPath
      ? null
      : createHash('sha256').update(urlPath).digest(BASE64),
    DATA_HASH_HEX: !dataToHash
      ? null
      : createHash('sha256').update(JSON.stringify(dataToHash)).digest(HEX),
    DATA_HASH_64: !dataToHash
      ? null
      : createHash('sha256').update(JSON.stringify(dataToHash)).digest(BASE64),
  };
};
