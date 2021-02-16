import { questradeAPI } from './public';
import { IQuestradeAPIv2_0 } from './public/IQuestradeAPIv2_0';
import { ApiOptions, Credentials } from './typescript';

export const qtAPIv2_0: (
  apiOptions: ApiOptions,
) => Promise<{
  credentials: Credentials;
  qtApi: IQuestradeAPIv2_0;
}> = questradeAPI;
