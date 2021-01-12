export interface UrlDataAndHashes<T = any> {
  DATA: T | 'null';
  URL_PATH: string | 'null';
  URL_HASH_HEX: string | 'null';
  URL_HASH_B62: string | 'null';
  DATA_HASH_HEX: string | 'null';
  DATA_HASH_B62: string | 'null';
  URLDATA_HEX: string | 'null';
}
