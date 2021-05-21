import { writeFile } from 'fs/promises';

import { ClientRequestConfig } from '../../../../../resources/side-effects/types';
import type {
  ApiOptions,
  Credentials,
  ICreds,
} from '../../../../../typescript';
import { preValidateToken } from '../../../../../utils';

export async function writeCreds({
  apiOptions,
  responseCreds,
  conf,
}: {
  apiOptions: ApiOptions;
  responseCreds: Promise<ICreds>;
  conf: Promise<{ config: ClientRequestConfig; credentials: Credentials }>;
}) {
  const { credentials } = await conf;
  writeFile(
    apiOptions.keyFile ||
      `${apiOptions.keyDir}/${preValidateToken(apiOptions) ?? 'ERROR'}`,
    (await responseCreds).refreshToken,
    'utf8',
  );

  return {
    ...credentials,
    ...(await responseCreds),
  };
}
