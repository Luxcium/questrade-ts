// TODO: remove dependencies to nodeJS crypt-module making it optional ...
import { BinaryToTextEncoding, createHash } from 'crypto';

import { UrlDataAndHashes } from '../typescript';

'73B439CEB0EBEF90782E9978FEEBF88AA1540C763CAEDABA5B16223D306437E0'.length;
export const creatUrlAndDataHashes = (
  urlPath: string = '',
  dataToHash?: any,
): UrlDataAndHashes => {
  // TODO: remove dependencies to nodeJS crypt-module making it optional ...
  const BASE64: BinaryToTextEncoding = 'base64';
  // TODO: remove dependencies to nodeJS crypt-module making it optional ...
  const HEX: BinaryToTextEncoding = 'hex';
  return {
    DATA: !dataToHash ? 'null' : dataToHash,
    DATA_HASH_B62: !dataToHash
      ? 'null'
      : // TODO: remove dependencies to nodeJS crypt-module making it optional ...
        `DATA:B62${createHash('sha256')
          .update(JSON.stringify(dataToHash))
          .digest(BASE64)
          .replaceAll('+', '')
          .replaceAll('/', '')
          .replaceAll('=', '')
          .slice(0, 8)}`,
    DATA_HASH_HEX: !dataToHash
      ? 'null'
      : // TODO: remove dependencies to nodeJS crypt-module making it optional ...
        `DATA:${createHash('sha256')
          .update(JSON.stringify(dataToHash))
          .digest(HEX)
          .toUpperCase()
          .slice(0, 16)}`,
    URL_HASH_B62: !urlPath
      ? 'null'
      : // TODO: remove dependencies to nodeJS crypt-module making it optional ...
        `URL:B62:${createHash('sha256')
          .update(urlPath)
          .digest(BASE64)
          .replaceAll('+', '')
          .replaceAll('/', '')
          .replaceAll('=', '')
          .slice(0, 8)}`,
    URL_HASH_HEX: !urlPath
      ? 'null'
      : // TODO: remove dependencies to nodeJS crypt-module making it optional ...
        `URL:${createHash('sha256')
          .update(urlPath)
          .digest(HEX)
          .toUpperCase()
          .slice(0, 16)}`,
    URL_PATH: !urlPath ? 'null' : urlPath,
    // .slice(0, 16),
  };
};

/*
'HEX:73B439CEB0EBEF90',
'BASE62:SHA256:c7Q5zrDr',
  DATA_HASH_HEX: 'HEX:F82F6522C52BB7A6',
  DATA_HASH_64: 'BASE62:SHA256:C9lIsUrt'

 */
