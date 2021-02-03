import { BinaryToTextEncoding, createHash } from 'crypto';

import { UrlDataAndHashes } from '../typescript';

'73B439CEB0EBEF90782E9978FEEBF88AA1540C763CAEDABA5B16223D306437E0'.length;
function getUrlHash(urlPath: string) {
  const HEX: BinaryToTextEncoding = 'hex';

  return {
    URL_HSH: !urlPath
      ? 'null'
      : `URL:${createHash('sha256')
          .update(urlPath)
          .digest(HEX)
          .toUpperCase()
          .slice(0, 18)}`,
    path: !urlPath ? 'null' : urlPath,
  };
}
function getDataHash(dataToHash: string) {
  const HEX: BinaryToTextEncoding = 'hex';

  return {
    DATA_HSH: !dataToHash
      ? 'null'
      : `DATA:${createHash('sha256')
          .update(JSON.stringify(dataToHash))
          .digest(HEX)
          .toUpperCase()
          .slice(0, 16)}`,
    data: !dataToHash ? 'null' : dataToHash,
  };
}
function getUDatagram(urlPath: string, dataToHash: string) {
  const HEX: BinaryToTextEncoding = 'hex';

  return {
    UDATAGRAM: `UDATAGRAM:${createHash('sha256')
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
  };
}

function getUrlAndDataHashes(
  urlPath: string = '',
  dataToCache?: any,
): UrlDataAndHashes {
  // const BASE64: BinaryToTextEncoding = 'base64';
  const HEX: BinaryToTextEncoding = 'hex';

  return {
    DATA_HSH: !dataToCache
      ? 'null'
      : `DATA:${createHash('sha256')
          .update(JSON.stringify(dataToCache))
          .digest(HEX)
          .toUpperCase()
          .slice(0, 16)}`,
    UDATAGRAM: `UDATAGRAM:${createHash('sha256')
      .update(
        `${
          !dataToCache
            ? 'null'
            : `DATA:${createHash('sha256')
                .update(JSON.stringify(dataToCache))
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
    dataToCache: !dataToCache ? 'null' : dataToCache,
    path: !urlPath ? 'null' : urlPath,
  };
}

export { getDataHash, getUDatagram, getUrlAndDataHashes, getUrlHash };

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
