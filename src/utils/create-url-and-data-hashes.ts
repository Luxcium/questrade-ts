import { BinaryToTextEncoding, createHash } from 'crypto';

import { UrlDataAndHashes } from '../typescript';

'73B439CEB0EBEF90782E9978FEEBF88AA1540C763CAEDABA5B16223D306437E0'.length;
export const creatUrlAndDataHashes = (
  urlPath: string = '',
  dataToHash?: any,
): UrlDataAndHashes => {
  // const BASE64: BinaryToTextEncoding = 'base64';
  const HEX: BinaryToTextEncoding = 'hex';
  return {
    DATA_HSH: !dataToHash
      ? 'null'
      : `DATA:${createHash('sha256')
          .update(JSON.stringify(dataToHash))
          .digest(HEX)
          .toUpperCase()
          .slice(0, 16)}`,
    URLDATA_HSH: `URLDATA:${createHash('sha256')
      .update(
        `${
          !dataToHash
            ? 'null'
            : `DATA:${createHash('sha256')
                .update(JSON.stringify(dataToHash))
                .digest(HEX)
                .toUpperCase()}`
        }${
          !urlPath
            ? 'null'
            : `URL:${createHash('sha256')
                .update(urlPath)
                .digest(HEX)
                .toUpperCase()}`
        }`,
      )
      .digest(HEX)
      .toUpperCase()
      .slice(0, 15)}`,
    URL_HSH: !urlPath
      ? 'null'
      : `URL:${createHash('sha256')
          .update(urlPath)
          .digest(HEX)
          .toUpperCase()
          .slice(0, 18)}`,
    data: !dataToHash ? 'null' : dataToHash,
    path: !urlPath ? 'null' : urlPath,
  };
};

// DATA_HASH_B62: !dataToHash
//   ? 'null'
//   : `DATA:B62${createHash('sha256')
//       .update(JSON.stringify(dataToHash))
//       .digest(BASE64)
//       .replaceAll('+', '')
//       .replaceAll('/', '')
//       .replaceAll('=', '')
//       .slice(0, 8)}`,

// URL_HASH_B62: !urlPath
//   ? 'null'
//   : `URL:B62:${createHash('sha256')
//       .update(urlPath)
//       .digest(BASE64)
//       .replaceAll('+', '')
//       .replaceAll('/', '')
//       .replaceAll('=', '')
//       .slice(0, 8)}`,
