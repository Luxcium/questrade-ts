import { access, constants, readFileSync, writeFileSync } from 'fs';
import { dirname } from 'path';

import { mkDirP } from '../../../../../resources/side-effects';
import { ApiOptions } from '../../../../../typescript';
import { apiOptionsCredentialsFactory } from '../../../core/authentication/http-autentication/apiOptionsCredentialsFactory';

export async function validateToken(options: ApiOptions) {
  const credentials = apiOptionsCredentialsFactory(options);
  let refreshToken: string = credentials.seedToken;

  try {
    await (credentials.keyFile
      ? mkDirP(dirname(credentials.keyFile))
      : mkDirP(credentials.keyDir));

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
}
