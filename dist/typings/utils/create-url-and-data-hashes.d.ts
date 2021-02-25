import type { UrlDataAndHashes } from '../typescript';
declare function getUrlHash(urlPath: string): {
    URL_HSH: string;
    path: string;
};
declare function getDataHash(dataToHash: string): {
    DATA_HSH: string;
    data: string;
};
declare function getUDatagram(urlPath: string, dataToHash: string): {
    UDATAGRAM: string;
};
declare function getUrlAndDataHashes(urlPath?: string, dataToCache?: any): UrlDataAndHashes;
export { getDataHash, getUDatagram, getUrlAndDataHashes, getUrlHash };
//# sourceMappingURL=create-url-and-data-hashes.d.ts.map