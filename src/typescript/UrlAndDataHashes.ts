export interface UrlDataAndHashes<T = any> {
  DATA_HSH: string | 'null';
  dataToCache: T | 'null';
  path: string | 'null';
  URL_HSH: string | 'null';
  UDATAGRAM: string | 'null';
}
