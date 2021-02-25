import type { IAccountActivity, Logger } from '../../../../typescript';
/** pROVIDE: credentials, startTime string and endTime string THEN GET: a 'Promise\<IAccountActivity[]\>' */
export declare const _getActivities: (accountGetApi: <R>(accountEndpoint: string) => () => Promise<R>, errorlog?: Logger) => (startTime: string) => (endTime: string) => Promise<IAccountActivity[]>;
//# sourceMappingURL=_getActivities.d.ts.map