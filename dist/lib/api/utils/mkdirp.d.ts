import fs from 'fs';
export declare type Made = string | null;
export declare type Mode = number | string | null;
export interface FsImplementationSync {
    mkdirSync: typeof fs.mkdirSync;
    statSync: typeof fs.statSync;
}
export interface OptionsSync {
    mode?: Mode;
    fs?: FsImplementationSync;
}
export declare const sync: (p: string, opts?: string | number | OptionsSync | null | undefined, made?: string | null | undefined) => string | null;
//# sourceMappingURL=mkdirp.d.ts.map