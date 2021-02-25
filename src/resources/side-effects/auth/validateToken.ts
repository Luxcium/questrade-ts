import { access, constants, readFileSync, writeFileSync } from 'fs';
import { dirname } from 'path';

import type { ApiOptions } from '../../../typescript';
import { sync } from '..';
import { apiOptionsCredentialsFactory } from './api-options-credentials-factory';

export const validateToken = (options: ApiOptions) => {
  const credentials = apiOptionsCredentialsFactory(options);
  let refreshToken: string = credentials.seedToken;

  try {
    if (credentials.keyFile) {
      sync(dirname(credentials.keyFile));
    } else {
      sync(credentials.keyDir);
    }

    credentials.keyFile =
      credentials.keyFile || `${credentials.keyDir}/${credentials.seedToken}`;
    refreshToken = readFileSync(credentials.keyFile, 'utf8');
  } catch {
    credentials.keyFile =
      credentials.keyFile || `${credentials.keyDir}/${credentials.seedToken}`;
    access(credentials.keyFile, constants.F_OK, async none => {
      if (none) {
        writeFileSync(credentials.keyFile, credentials.seedToken, {
          encoding: 'utf8',
        });
      }
    });
  }

  return { credentials, refreshToken };
};

// export function (
//   options: QuestradeAPIOptions,
// ): {
//   refreshToken: string;
//   credentials: Credentials;
// } {
//   return _validateToken(options);
// }
