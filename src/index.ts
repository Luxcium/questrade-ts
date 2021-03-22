import type { ApiCallQ_ } from './private/core/next-rate-limiter/queue';
import { questradeAPI } from './public';
import type { QuestradeAPIv2_0 } from './public/IQuestradeAPIv2_0';
import type { ApiOptions, Credentials } from './typescript';

export const qtAPIv2_0: (
  apiOptions: ApiOptions,
) => Promise<{
  apiCallQ: ApiCallQ_;
  credentials: Credentials;
  qtApi: QuestradeAPIv2_0;
}> = questradeAPI;

export type { QuestradeAPIv2_0 };
