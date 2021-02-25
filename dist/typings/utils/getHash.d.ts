export declare const getHash: (data: string, hashAlgo?: string, shortSlice?: number) => (string | {
    longer: string;
    shorter: string;
})[];
export declare type GetHash = (data: string, hashAlgo: string, shortSlice: number) => [
    string,
    string,
    {
        shorter: string;
        longer: string;
    }
];
//# sourceMappingURL=getHash.d.ts.map