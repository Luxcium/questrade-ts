import { Credentials } from './typescript';
export declare const _axiosGetApi: (credentials: Credentials) => <R>(endpoint: string) => () => Promise<R>;
export declare const _axiosAccountGetApi: (credentials: Credentials) => <R>(accountEndpoint: string) => () => Promise<R>;
export declare const _axiosApiPost: (credentials: Credentials) => <D = any>(postData: D) => <R>(endpoint: string) => Promise<R>;
export declare const _axiosApiGetEndpointFactory: <R>(endpoint: string) => (credentials: Credentials) => () => Promise<R>;
export declare const _axiosApiPostEndpointFactory: <R>(endpoint: string) => <D = any>(postData: D) => (credentials: Credentials) => Promise<R>;
export declare const _delayedCrednetialsFunction: (credentials: Credentials) => <T = any>(functionX: (C: Credentials) => Promise<T>) => () => Promise<T>;
export declare const _delayedFunctionCredentials: <R>(functionX: (C: Credentials) => Promise<R>) => (credentials: Credentials) => () => Promise<R>;
export declare const _axiosApiGetEndpointFactoryD: <R>(endpoint: string) => (credentials: Credentials) => () => Promise<R>;
export declare const _axiosApiPostEndpointFactoryD: <R>(endpoint: string) => <D = any>(postData: D) => (credentials: Credentials) => () => Promise<R>;
//# sourceMappingURL=_axiosApi.d.ts.map