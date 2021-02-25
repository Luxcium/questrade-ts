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
export declare function sync(p: string, opts?: Mode | OptionsSync, made?: Made): Made;
//# sourceMappingURL=mkdirp.d.ts.map