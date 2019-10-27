export interface HeadersQT {
  'strict-transport-security'?: string;
  'x-ratelimit-remaining'?: string;
  'x-ratelimit-reset'?: string;
  'content-type'?: string;
  'content-length'?: string;
  date?: string;
  connection?: string;
}

export function pareHeader(headers: HeadersQT) {
  const ratelimit = new Date(parseInt(headers['x-ratelimit-reset']??'0',2)).toISOString();
  const remaining = parseInt(headers['x-ratelimit-remaining']??'0',2);
  console.log(ratelimit);
  console.log(remaining);
}

/*
  { 'strict-transport-security': 'max-age=31536000; includeSubDomains;',
        'x-ratelimit-remaining': '29997',
        'x-ratelimit-reset': '1572157981',
        'content-type': 'application/json; charset=utf-8',
        'content-length': '261',
        date: 'Sun, 27 Oct 2019 05:57:55 GMT',
        connection: 'close' },
*/
