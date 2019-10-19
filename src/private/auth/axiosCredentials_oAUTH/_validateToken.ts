import { access, constants, readFileSync, writeFileSync } from 'fs';
import { dirname } from 'path';
import { QuestradeAPIOptions } from '../../../typescript';
import { sync } from '../../../utils';
import { _buildCredentialsFromToken } from '../credentialsFactory';

export const _validateToken = (options: QuestradeAPIOptions) => {
  const credentials = _buildCredentialsFromToken(options);
  let refreshToken: string = credentials.seedToken;
  try {
    if (!!credentials.keyFile) {
      sync(dirname(credentials.keyFile));
    } else {
      sync(credentials.keyDir);
    }
    credentials.keyFile =
      `${credentials.keyDir}/${credentials.seedToken}` && credentials.keyFile;
    refreshToken = readFileSync(credentials.keyFile, 'utf8');
  } catch (_) {
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
  return { refreshToken, credentials };
};
