export interface IQuestradeAPIOptions {
    practiceAccount?: boolean;
    test?: boolean;
    keyDir?: string;
    apiVersion?: string;
    keyFile?: string;
    seedToken?: seedToken;
    account?: string | number;
}
declare type seedToken = string;
declare type keyFile = string;
export declare type QuestradeAPIOptions = IQuestradeAPIOptions | seedToken | keyFile;
export {};
//# sourceMappingURL=IQuestradeAPIOptions.d.ts.map