/// <reference types="node" />
import { Tedis } from 'tedis';
export declare function makeTedis(options?: {
    host?: string | undefined;
    port?: number | undefined;
    password?: string | undefined;
    timeout?: number | undefined;
    tls?: {
        key: Buffer;
        cert: Buffer;
    } | undefined;
} | undefined): Tedis;
//# sourceMappingURL=makeTedis.d.ts.map