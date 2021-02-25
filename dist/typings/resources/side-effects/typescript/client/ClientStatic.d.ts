import { CancelStatic } from './CancelStatic';
import { CancelTokenStatic } from './CancelTokenStatic';
import { ClientError } from './ClientError';
import { ClientInstance } from './ClientInstance';
import { ClientRequestConfig } from './ClientRequestConfig';
export interface ClientStatic extends ClientInstance {
    create(config?: ClientRequestConfig): ClientInstance;
    Cancel: CancelStatic;
    CancelToken: CancelTokenStatic;
    isCancel(value: any): boolean;
    all<T>(values: (T | Promise<T>)[]): Promise<T[]>;
    spread<T, R>(callback: (...args: T[]) => R): (array: T[]) => R;
    isAxiosError(payload: any): payload is ClientError;
}
//# sourceMappingURL=ClientStatic.d.ts.map